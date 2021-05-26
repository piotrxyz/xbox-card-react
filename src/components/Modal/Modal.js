/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Card from '../Card';
import Icons from '../../assets/Icons';

const StyledPopup = styled(Popup)`
  &-overlay {
    position: absolute !important;
  }
`;

const OpenModalBtn = styled.button`
  background: ${({ theme }) => theme.blueColor};
  padding: 16.9px 45px 16.1px 46px;
  color: white;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.blueColor};
  font-size: ${({ theme }) => theme.sizeL};
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.lightBlueColor};
    border-color: ${({ theme }) => theme.lightBlueColor};
    transform: translateY(-2px);
  }
`;

const CloseButton = styled.button`
  z-index: 100;
  position: absolute;
  top: 37.9px;
  right: 19px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    top: 23.9px;
  }
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  addOrder = (newOrder) => {
    this.setState((prevState) => ({
      ...prevState,
      orders: [newOrder, ...prevState.orders]
    }));
    // eslint-disable-next-line no-undef
    alert('Dodano do koszyka, sprawdź console');
    console.log(newOrder);
  };

  render() {
    return (
      <StyledPopup
        trigger={<OpenModalBtn type="button">Otwórz</OpenModalBtn>}
        modal
        nested
        closeOnDocumentClick
      >
        {(close) => (
          <>
            <CloseButton type="button" onClick={close}>
              <img src={Icons.CloseIcon} alt="close" />
            </CloseButton>
            <Card onSubmit={this.addOrder} />
          </>
        )}
      </StyledPopup>
    );
  }
}

export default Modal;
