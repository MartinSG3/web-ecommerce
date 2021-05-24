import styled from "styled-components";
import { CartArray } from "../Cards/Cardslist";

type Props = {
  item: CartArray;
  addToCart: (clicked: CartArray) => void;
  removeFromCart: (id: number) => void;
};

const Cartitem = ({ item, addToCart, removeFromCart }: Props) => {
  return (
    <Card>
      <CardOverview>
        <span style={{ marginBottom: -15, fontSize: 20 }}>{item.name} </span>
        <p style={{ fontSize: 15 }}>
          Antall: {item.quantity} <br /> {item.price * item.quantity},-{" "}
        </p>
        <img src={item.image}></img>
        <Button onClick={() => removeFromCart(item.id)}>-</Button>
        <Button onClick={() => addToCart(item)}>+</Button>
      </CardOverview>
    </Card>
  );
};

export default Cartitem;

const Card = styled.div`
  background-color: white;
  width: 270px;
  height: 50px;
  position: relative;
  margin-bottom: 120px;
  border-radius: 10px;
  @media (max-width: 486px) {
    height: 30px;
    margin-bottom: 134px;
  }
`;

const CardOverview = styled.div`
  background-color: white;
  font-size: 21px;
  padding: 12px;
  border-radius: 10px;
  img {
    height: 125px;
    width: 125px;
    position: absolute;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 110px;
    margin: auto;
    overflow: hidden;
    transition: transform .5s ease;
  }
  img:hover {
    transform: scale(
      1.2
    );
  }
`;

const Button = styled.button`
  margin-right: 12px;
  background-color: black;
  border: none;
  color: white;
  padding: 6px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 25px;
  cursor: pointer;
`;
