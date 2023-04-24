import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvide from "./components/DataContext/DataContext";
import DetallesConte from "./components/Detalles/DetallesConte";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <DataProvide>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<CartContent />}></Route>
          <Route path="/detalles" element={<DetallesConte />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvide>
  );
}

export default App;
