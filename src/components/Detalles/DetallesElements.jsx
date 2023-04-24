import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import React from "react";
import "./Detalles.css";
const DetallesElement = () => {
  const { detalles } = useContext(dataContext);
  return detalles.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-detile" />
        <h3 className="name">{product.name}</h3>
        <h4 className="price">{product.price}$</h4>
      </div>
    );
  });
};

export default DetallesElement;
