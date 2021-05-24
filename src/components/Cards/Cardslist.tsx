import Cardsitem from "./Cardsitem";
import styled from "styled-components";
import { useState } from "react";
import CartIcon from "../../assets/svg/shopping-cart.svg";
import Exit from "../../assets/svg/exit.svg"
import Cart from "../Cart/Cart"

export type CartArray = {
  id: number;
  name: string;
  content: string;
  price: number;
  quantity: number;
  image: string;
};

const data = [
  {
    id: 1,
    name: "Nike Free Run",
    content: "Running shoes (Men)",
    price: 599,
    quantity: 0,
    image:
      "https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG-715x715.png",
  },
  {
    id: 2,
    name: "Nike Mag",
    content: "Running shoes (Unisex)",
    price: 400,
    quantity: 0,
    image:
      "https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png",
  },
  {
    id: 3,
    name: "Nike Zoom 4",
    content: "Running shoes (Unisex)",
    price: 800,
    quantity: 0,
    image:
      "https://cdn.shopify.com/s/files/1/2656/8156/products/VZE3J6EDRiimfs826OoE_NikeZoom4s_1240x.png?v=1562240870",
  },
  {
    id: 4,
    name: "Nike Zoom X",
    content: "Running shoes (Women)",
    price: 1200,
    quantity: 0,
    image:
      "https://static.nike.com/a/images/t_default/48c813c8-06df-41b7-a651-ab10c4aad7a6/zoomx-vaporfly-next-running-shoe-T5qg9m.png",
  },
];

const Cardslist = () => {
  const [cart, setCart] = useState([] as CartArray[]);
  const [show, setShow] = useState(false);

  const AddToCart = (clicked: CartArray) => {
    setShow(true);
    setCart((prev) => {
      const foundItem = prev.find((item) => item.id === clicked.id);

      if (foundItem) {
        return prev.map((item) =>
          item.id === clicked.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...clicked, quantity: 1 }];
    });
  };
  console.log(cart);

  const RemoveFromCart = (id: number) => {
    setCart(prev =>
      prev.reduce((count, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return count;
          return [...count, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...count, item];
        }
      }, [] as CartArray[])
    );
  };

  const AllItems = (items: CartArray[]) =>
    items.reduce((count: number, item) => count + item.quantity, 0);

  return (
    <>
      <HeaderContainer>
        <Container>
          <span>{AllItems(cart)}</span>
          <img src={CartIcon} onClick={() => setShow(true)} alt="" width="25" />
        </Container>
        {show === true ? (
          <SidebarContainerActive>
            <Sidebar>
              <Container2>
                <img
                  src={Exit}
                  onClick={() => setShow(false)}
                  alt=""
                  width="25"
                />
              </Container2>
              <Cart cartItems={cart} addToCart={AddToCart} removeFromCart={RemoveFromCart}></Cart>
            </Sidebar>
          </SidebarContainerActive>
        ) : null}
      </HeaderContainer>
      <WrapperMargin>
        <Wrapper>
          {data.map((item) => (
            <Cardsitem
              key={item.id}
              item={item}
              addToCart={AddToCart}
              removeFromCart={RemoveFromCart}
            ></Cardsitem>
          ))}
        </Wrapper>
      </WrapperMargin>
    </>
  );
};

export default Cardslist;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperMargin = styled.div`
  align-items: center;
  // Kode snuten press bredden mindre slik at jeg får 2 på hver rad
  // Fjern hvis du vil se 4 i bredden
  margin-right: 20%;
  // Fjern hvis du vil se 4 i bredden
  margin-left: 20%;
`;

const HeaderContainer = styled.header`
  min-height: 70px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: auto;
  margin-right: 40px;
  display: flex;
  span {
    position: absolute;
    font-size: 12px;
    top: -13px;
    right: -10px;
    background: #ff6900;
    color: white;
    padding: 2px 6px;
    border-radius: 50%;
    z-index: 0;
  }
`;

const Container2 = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 15px;
`;

const SidebarContainerActive = styled.div`
  background-color: #294C60;
  height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
`;

const Sidebar = styled.nav`
  background-color: #294C60;
  height: 100vh;
  width: 350px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
`;
