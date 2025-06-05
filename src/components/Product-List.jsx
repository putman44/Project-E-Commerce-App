import ProductItem from "./Product-Item";
import styles from "./Product-List.module.css";

const ProductList = ({ products }) => {
  return (
    <>
      <h1>Product List</h1>
      <div className={styles.productList}>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
