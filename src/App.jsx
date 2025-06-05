import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Camping Backpack",
      price: 159.99,
      description:
        "A durable and spacious backpack for all your camping needs.",
    },
    {
      id: 2,
      name: "Camping Tent",
      price: 100.0,
      description:
        "A lightweight and easy-to-set-up tent for outdoor adventures.",
    },
    {
      id: 3,
      name: "Cooking stove",
      price: 49.99,
      description: "A portable stove for cooking meals in the wild.",
    },
  ]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
