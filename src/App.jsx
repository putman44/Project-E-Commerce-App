import { useState } from "react";
import PRODUCTS from "./assets/PRODUCTS.JSX";
import ProductList from "./components/Product-List";
import "./App.css";

function App() {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <>
      <div>
        <ProductList products={products} />
      </div>
    </>
  );
}

export default App;
