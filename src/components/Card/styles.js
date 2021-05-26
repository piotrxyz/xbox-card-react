import styled, { css } from 'styled-components';

const bounce = `cubic-bezier(0.68, -0.55, 0.27, 1.55);`;

export const FormContainer = styled.form`
  margin: 20px 0 20px 0;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 20px #0000003b;
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    margin: 0;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 0 0 0 18.6px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightArrow = styled.button`
  width: 40px;
  height: 40px;
`;

export const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`;

export const OrderDetailsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 24px 19px 31.4px 36px;
  }
`;

export const FormHeading = styled.h1`
  max-width: 315px;
  margin: 0;
  font-size: ${({ theme }) => theme.sizeXL};
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemPrice = styled.h2`
  font-size: ${({ theme }) => theme.sizeXL};
  margin: 4px 0 5px 0;
  line-height: 25px;
  color: ${({ theme, amount }) => (amount === 0 ? 'gray' : theme.blueColor)};
  transition: color 0.3s;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.sizeS};
  line-height: 19px;
  margin: 0 0 7px 0;
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
  }
`;

export const OrderInformationContainer = styled.div`
  font-size: ${({ theme }) => theme.sizeS};
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 20px;
  height: 64px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
  }
`;

export const DeliveryInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;

  img {
    width: 15px;
    height: 16px;
    margin-right: 12px;
  }
`;

export const Availability = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 0;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 15px;
    height: 11px;
    margin-right: 11px;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 165px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Status = styled.span`
  margin-right: 16px;
`;

export const DetailedInformation = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    position: relative;
    color: ${({ theme }) => theme.blueColor};

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -1px;
      background: ${({ theme }) => theme.borderColor};
      transform: scaleX(0);
      transition: all 0.6s ${bounce};
    }

    &:hover {
      &:before {
        transform: scaleX(1);
      }
    }
  }
`;

export const QuantityContainer = styled.div`
  font-size: ${({ theme }) => theme.sizeM};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-right: 12px;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;

export const QuantityCounter = styled.div`
  padding: 17.2px 64px 16.8px 65px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  margin-bottom: 10px;
  text-align: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 0;
    min-width: 150px;
    max-width: 150px;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;

export const MinusButton = styled.button`
  position: absolute;
  left: 12px;
  transition: opacity 0.3s;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;

export const PlusButton = styled.button`
  position: absolute;
  right: 11px;
  transition: opacity 0.3s;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    margin-top: 0;
  }
`;
