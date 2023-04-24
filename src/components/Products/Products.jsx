import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import "./Products.css";

const Products = () => {
  const { data, cart, setCart, detalles, setdetalles } =
    useContext(dataContext);

  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  const detall = (product) => {
    console.log(product);
    setdetalles([...detalles, product]);
  };

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src="{product.img}" alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>buy</button>
        <button onClick={() => detall(product)}>Detalles</button>
      </div>
    );
  });
};

export default Products;
