import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
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

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      &:hover {
        transform: none;
      }
    `}
`;

const Button = (props) => {
  const { title } = props;
  return <StyledButton {...props}>{title}</StyledButton>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
