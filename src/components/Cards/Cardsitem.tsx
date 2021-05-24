import styled from "styled-components";
import { CartArray } from "./Cardslist";

type Props = {
  item: CartArray;
  addToCart: (clicked: CartArray) => void;
  removeFromCart: (id: number) => void;
};

const Cardsitem = ({ item, addToCart }: Props) => {
  return (
    <Card>
      <CardInfo>
        <img src={item.image}></img>
      </CardInfo>

      <CardOverview>
        <span style={{ marginBottom: -5, fontSize: 20 }}>{item.name} </span>
        <p style={{ fontSize: 15 }}>
          {item.content} <br /> {item.price},-{" "}
        </p>
        <Button onClick={() => addToCart(item)}>Add to cart</Button>
      </CardOverview>
    </Card>
  );
};

export default Cardsitem;

const Card = styled.div`
  background-color: white;
  margin: 1rem;
  width: 350px;
  position: relative;
  margin-bottom: 50px;
  border-radius: 10px;
  border: 1px solid #eee;
`;

const CardInfo = styled.div`
  background-color: #e3e3e3;
  height: 320px;
  position: relative;
  border-radius: 0px;
  img {
    height: 250px;
    width: 250px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    transition: transform .5s ease;
  }
  img:hover {
    transform: scale(
      1.3
    );
  }
  @media (max-width: 486px) {
    img {
      height: 150px;
      width: 150px;
    }
  }
`;

const CardOverview = styled.div`
  background-color: white;
  font-size: 21px;
  padding: 18px;
`;

const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 25px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #666666;
    color: white;
  }
`;
