import "./App.css";
import { Navbar } from "./compoments/Navbar/Navbar";
import { ItemList } from "./compoments/ItemList/ItemList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <h1>Home</h1>
    </div>
  );
}

export default App;
