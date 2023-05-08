import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import "./Products.css";
import { Link } from "react-router-dom";
import { Refresh } from "@mui/icons-material";

const Products = () => {
  const { data, detalles, setdetalles, buyProducts } = useContext(dataContext);
  const detall = (product) => {
    console.log(product);
    setdetalles([...detalles, product]);
  };

  const redire = () => {
    const history = Link();
    const redirecion = () => {
      history.push("/cart");
      return;
    };
  };

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>buy</button>
        <button onClick={() => detall(product)}>Detalles</button>
        <button onClick={() => redirecion()}>enviar</button>
      </div>
    );
  });
};
export default Products;
