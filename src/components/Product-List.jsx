import { useState } from "react";
import ProductItem from "./Product-Item";
import styles from "./Product-List.module.css";

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  //check
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : productsByCategory[selectedCategory] || [];

  let styleProductList;

  if (filteredProducts.length === 1) {
    styleProductList = styles.singleProductList;
  } else {
    styleProductList = styles.productList;
  }

  return (
    <>
      <h1>Product List</h1>
      <div className={styles.categorySelect}>
        <label htmlFor="filter">Filter by Category: </label>
        <select onChange={handleFilterChange} name="filter" id="filter">
          <option value="All">All</option>
          {Object.keys(productsByCategory).map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styleProductList}>
        {filteredProducts.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
