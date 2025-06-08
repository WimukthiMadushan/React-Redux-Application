import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
