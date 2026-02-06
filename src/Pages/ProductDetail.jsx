import { useParams } from "react-router";
import { useEffect, useState } from "react";

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

  return (
    <>
      <header>
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <h2>Price: ${product.price} Dkk</h2>
      </header>
      <main>
        <img src={product.image} alt={product.title} />
        <p>
          {params.id}: {product.description}
        </p>
        <span
          className={`product-stock ${product.inStock ? "in-stock" : "out-of-stock"}`}
        >
          {product.inStock ? "På Lager" : "Udsolgt"}
        </span>
      </main>
    </>
  );
}
