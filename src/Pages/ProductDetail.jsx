import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const params = useParams();
  const productId = Number(params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const url =
        "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/webshop/products.json";
      const response = await fetch(url);
      const products = await response.json();
      const productToDisplay = products.find((p) => p.id === productId);
      setProduct(productToDisplay);
    }
    fetchProducts();
  }, [productId]);

   useEffect(() => {
     document.title = `${product.title} - DenDanskeButik`;
   }, [product, product.title]);

  return (
    <div className={styles.productDetail}>
      <header>
        <h1>{product.title}</h1>
      </header>
      <main>
        <img src={product.image} alt={product.title} />
        <div className={styles.productInfo}>
          <h2>Price: ${product.price} Dkk</h2>
          <h2>{product.category}</h2>
          <p>
            {params.id}: {product.description}
          </p>
          <span
            className={`product-stock ${product.inStock ? "in-stock" : "out-of-stock"}`}
          >
            {product.inStock ? "På Lager" : "Udsolgt"}
          </span>
        </div>
      </main>
    </div>
  );
}
