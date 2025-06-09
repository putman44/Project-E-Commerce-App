import PRODUCTS from "./assets/PRODUCTS.JSX";
import ProductList from "./components/Product-List";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <ProductList products={PRODUCTS} />
      </div>
    </>
  );
}

export default App;
