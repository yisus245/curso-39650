import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import Navbar from "../Navbar/Navbar";
import DetallesElements from "./DetallesElements";
import React from "react";

const DetallesConte = () => {
  const { detalles } = useContext(dataContext);
  return detalles.length > 0 ? (
    <>
      <Navbar />
      <DetallesElements />
    </>
  ) : (
    <h2 className="cart-message-center">Carrito vacio</h2>
  );
};
export default DetallesConte;
