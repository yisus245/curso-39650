import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const dataContext = createContext();
const DataProvide = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [detalles, setdetalles] = useState([]);
  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);
  return (
    <dataContext.Provider
      value={{ data, cart, detalles, setCart, setdetalles }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default DataProvide;
