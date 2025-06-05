import { useState } from "react";

import ProductList from "./components/Product-List";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Camping Backpack",
      price: 159.99,
      description:
        "A durable and spacious backpack for all your camping needs. It features multiple compartments and is made from water-resistant material.",
      image:
        "https://images.unsplash.com/photo-1599711862405-c7068b48ee32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Camping Tent",
      price: 100.0,
      description:
        "A lightweight and easy-to-set-up tent for outdoor adventures.",
      image:
        "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Cooking stove",
      price: 49.99,
      description: "A portable stove for cooking meals in the wild.",
      image:
        "https://images.unsplash.com/photo-1681400803605-8dc103e102e7?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <>
      <div>
        <ProductList products={products} />
      </div>
    </>
  );
}

export default App;
