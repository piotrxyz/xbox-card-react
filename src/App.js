/* eslint-disable no-console */
import React, { Component } from 'react';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { standardTheme } from './constants/styles';
import Button from './components/Button';
import Card from './components/Card';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
   height: 100%;
   width: 100%;
}

  body {
    font-family: ${({ theme }) => theme.mainFontFamily};
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E0E0E1;
    min-height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    background: transparent;
    padding: 0;
  }

  select {
    border-color: ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    height: 35px;
    padding-left: 10px;
    font-size: 13px;
    appearance: none;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: true
    });
  };

  addOrder = (newOrder) => {
    this.setState((prevState) => ({
      ...prevState,
      orders: [newOrder, ...prevState.orders]
    }));
    console.log(newOrder);
  };

  render() {
    const { showModal } = this.state;
    return (
      <ThemeProvider theme={standardTheme}>
        <GlobalStyle />
        {showModal ? (
          <Card onSubmit={this.addOrder} />
        ) : (
          <Button title="Click" type="button" onClick={this.toggleModal} />
        )}
      </ThemeProvider>
    );
  }
}

export default App;
