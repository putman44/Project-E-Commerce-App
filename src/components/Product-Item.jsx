import styles from "./Product-Item.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <div className={styles.productDetails}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default ProductItem;
