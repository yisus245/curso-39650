import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import CartElements from "./CartElements";
import Navbar from "../Navbar/Navbar";
import CartTotal from "./CartTotal";
import React from "react";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);
  return cart.length > 0 ? (
    <>
      <Navbar />
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2 className="cart-message-center">Carrito vacio</h2>
  );
};

export default CartContent;
