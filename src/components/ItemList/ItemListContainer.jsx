import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { db } from "../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";
import Banner from "../Banner/Banner";
import Footer from "../footer/Footer";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          // console.log(product.data(), product.id)
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <Banner />
      <h2 style={{ textAlign: "center" }}>TODOS NUESTROS ARTICULOS</h2>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="red" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}

      <Footer />
    </div>
  );
};

export default ItemListContainer;
