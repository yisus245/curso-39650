import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">
          <Link to={"/"}>Tienda</Link>
        </h1>
        <Link className="seeCarrito" to={"/cart"}>
          🛒
        </Link>
        <Link className="seeCarrito" to={"/detalles"}>
          🛒
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
