import { CartArray } from "../Cards/Cardslist"
import Cartitem from "./Cartitem";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

type Props = {
  cartItems: CartArray[];
  addToCart: (clicked: CartArray) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const totalSum = (items: CartArray[]) =>
    items.reduce(
      (count: number, item) => count + item.price * item.quantity,
      0
    );

  return (
    <div>
      <p style={{ textAlign: "center", color: "white", fontSize: 28, textTransform: "uppercase" }}>
        Shopping cart
      </p>
      {cartItems.length === 0 ? <p style={{color: "white", textAlign: "center"}}>Empty cart</p> : null}
      {cartItems.map((item) => (
        <Cartitem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <Card>
        <p
          style={{
            textAlign: "left",
            color: "black",
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          Total sum: {totalSum(cartItems)},-
        </p>
        <Wrapper>
          <Button onClick={handleClickOpen}>Continue to checkout</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Thanks for the purchase
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your total sum was on: {totalSum(cartItems)},-
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button onClick={handleClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Wrapper>
      </Card>
    </div>
  );
};

export default Cart;

const Card = styled.div`
  background-color: white;
  width: 270px;
  height: 120px;
  position: relative;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #ff6900;
  border: none;
  color: white;
  padding: 12px 44px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 10px;
`;
