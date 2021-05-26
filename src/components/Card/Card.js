/* eslint-disable no-console */
import React, { Component } from 'react';
import Loader from '../Loader';
import Icons from '../../assets/Icons';
import xwhiteS from '../../assets/images/xwhiteS.png';
import Button from '../Button';
import Radio from '../Radio';
import Select from '../Select';
import {
  FormContainer,
  CloseButton,
  Carousel,
  ImageContainer,
  RightArrow,
  LeftArrow,
  OrderDetailsContainer,
  FormHeading,
  FormFields,
  ItemPrice,
  Label,
  RadioGroupContainer,
  OrderInformationContainer,
  DeliveryInformation,
  Availability,
  StatusContainer,
  Status,
  DetailedInformation,
  QuantityContainer,
  QuantityCounter,
  MinusButton,
  PlusButton,
  FormFooter
} from './styles';

const API = './xbox.json';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.handleDataFetch();
  }

  handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const {
          product,
          sizes: { items },
          multiversions
        } = data;

        Object.entries(multiversions[0].items)
          .reverse()
          .map((item) => {
            const [, values] = item;
            return Object.values(values.values).map((value) => {
              const { name: color } = value;
              this.setState({
                variant: Object.values(color).join('')
              });
              return null;
            });
          });

        this.setState({
          loading: false,
          name: product.name,
          price: Object.values(items)[0].price,
          size: Object.values(items)[0].name,
          status: Object.values(items)[0].status,
          amount: Object.values(items)[0].amount,
          quantity: 1,
          items,
          data
        });
      })
      .catch((error) => console.log(error));
  };

  handleColorChange = (e) => {
    this.setState({ variant: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, size, variant, status, quantity } = this.state;
    const totalPrice = quantity * price;

    const newOrder = {
      name,
      price,
      totalPrice,
      size,
      variant,
      status,
      quantity
    };

    const { onSubmit } = this.props;

    onSubmit(newOrder);
  };

  increment = () => {
    const { quantity, amount } = this.state;
    if (quantity < amount) {
      this.setState((prevState) => ({
        ...prevState,
        quantity: prevState.quantity + 1
      }));
    }
  };

  decrement = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({
        ...prevState,
        quantity: prevState.quantity - 1
      }));
    }
  };

  render() {
    const { loading, name, price, status, amount, quantity, items, data } =
      this.state;

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <FormContainer onSubmit={this.handleSubmit}>
            <CloseButton type="button">
              <img src={Icons.CloseIcon} alt="close" />
            </CloseButton>
            <Carousel>
              <LeftArrow type="button">
                <img src={Icons.ArrowIcon} alt="left arrow" />
              </LeftArrow>
              <ImageContainer>
                <img src={xwhiteS} alt="xbox pic" />
              </ImageContainer>
              <RightArrow type="button">
                <img src={Icons.ArrowIcon} alt="right arrow" />
              </RightArrow>
            </Carousel>
            <OrderDetailsContainer>
              <FormHeading>{name}</FormHeading>
              <FormFields>
                <Label htmlor="price" />
                <ItemPrice amount={amount}>{price * quantity},00 zł</ItemPrice>
                <Label htmlFor="size">Rozmiar: </Label>
                <RadioGroupContainer>
                  {Object.values(items).map((item) => (
                    <Radio
                      onChange={(e) =>
                        this.setState({
                          size: e.target.value,
                          price: item.price,
                          status: item.status,
                          amount: item.amount,
                          quantity: 1
                        })
                      }
                      defaultChecked={item.name === 'Ram 32 GB'}
                      name="size"
                      type="radio"
                      key={item.type}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </RadioGroupContainer>
                <Label htmlFor="color">Wariant:</Label>
                <Select onChange={this.handleColorChange}>
                  {Object.entries(data.multiversions[0].items).map((item) => {
                    const [id, values] = item;
                    return Object.values(values.values).map((value) => {
                      const { name: color } = value;
                      return (
                        <option key={id} value={color}>
                          {color}
                        </option>
                      );
                    });
                  })}
                </Select>
                <OrderInformationContainer>
                  <Availability>
                    <StatusContainer>
                      {amount !== 0 ? (
                        <>
                          <Status>
                            <img src={Icons.CheckIcon} alt="checkmark" />
                            {status}
                          </Status>
                          <DeliveryInformation>
                            <img src={Icons.ClockIcon} alt="clock icon" />
                            <DetailedInformation>
                              <span>Możemy wysłać już dzisiaj!</span>
                              <a
                                aria-label="delivery information link"
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Sprawdź czasy i koszty wysyłki
                              </a>
                            </DetailedInformation>
                          </DeliveryInformation>
                        </>
                      ) : (
                        <>
                          <Status>
                            <img src={Icons.CrossIcon} alt="cross" />
                            {status}
                          </Status>
                        </>
                      )}
                    </StatusContainer>
                  </Availability>
                </OrderInformationContainer>
              </FormFields>
              <FormFooter>
                <QuantityContainer disabled={amount === 0}>
                  <MinusButton
                    type="button"
                    onClick={this.decrement}
                    disabled={amount === 1}
                  >
                    <img src={Icons.MinusIcon} alt="minus" />
                  </MinusButton>
                  <PlusButton
                    type="button"
                    onClick={this.increment}
                    disabled={amount === 1 || quantity === amount}
                  >
                    <img src={Icons.PlusIcon} alt="plus" />
                  </PlusButton>
                  <QuantityCounter>{quantity}</QuantityCounter>
                </QuantityContainer>
                <Button
                  type="submit"
                  title="Dodaj do koszyka"
                  disabled={amount === 0}
                />
              </FormFooter>
            </OrderDetailsContainer>
          </FormContainer>
        )}
      </>
    );
  }
}

export default Card;
