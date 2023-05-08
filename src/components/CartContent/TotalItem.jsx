import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import React from "react";

const TotalItem = () => {
  const { cart } = useContext(dataContext);
  const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
  return <span className="cart-items-total">{itemsQuanty}</span>;
};

export default TotalItem;
