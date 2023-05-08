import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import { Link } from "react-router-dom";
import TotalItem from "../CartContent/TotalItem";
import "./Navbar.css";
import CartTotal from "../CartContent/CartTotal";
const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">Tienda</h1>
        </Link>
        <Link className="seeCarrito" to={"/detalles"}>
          🛒
        </Link>
        <Link className="seeCarrito" to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItem /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
