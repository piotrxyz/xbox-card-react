import React from 'react';
import styled from 'styled-components';
import DropDownIcon from '../../assets/icons/arrow.svg';

const SelectContainer = styled.div`
  position: relative;
  min-height: 35px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.sizeXS};

  img {
    position: absolute;
    top: 13.8px;
    right: 14.4px;
    transform: rotate(90deg);
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  padding-left: 13px;
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.sizeXS};
  cursor: pointer;
`;

const Select = ({ input, ...rest }) => (
  <SelectContainer>
    <img src={DropDownIcon} alt="dropdown" />
    <StyledSelect {...input} {...rest} />
  </SelectContainer>
);

export default Select;
