import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { db } from "../../fireConfig";
import { getDocs, collection } from "firebase/firestore";
export const dataContext = createContext();
const DataProvide = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [detalles, setdetalles] = useState([]);
  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const buyProducts = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);
    if (productrepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <dataContext.Provider
      value={{ data, cart, detalles, setCart, setdetalles, buyProducts }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default DataProvide;
