import React from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.blueColor};
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 0;
  }
`;

const RadioStyled = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

const RadioLabel = styled.label`
  font-size: ${({ theme }) => theme.sizeXS};
  padding: 10.2px 18px 10.8px 18px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  min-width: 100%;
  text-align: center;

  ${RadioStyled}:checked + && {
    border: 2px solid ${({ theme }) => theme.blueColor};
    margin: -1px;
  }
`;

const Radio = ({ input, label, ...rest }) => (
  <>
    <RadioContainer>
      <RadioStyled {...input} {...rest} />
      {label && <RadioLabel>{label}</RadioLabel>}
    </RadioContainer>
  </>
);

export default Radio;
