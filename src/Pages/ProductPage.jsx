//import { use } from "react";
import ProductGrid from "../Components/ProductGrid";
import { useEffect } from "react";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  useEffect(() => {
    document.title = "Products - DenDanskeButik";
  },[]);

  return (
    <>
      <header className={styles.productHeader}>
        <h1>Alle Produkter</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </>
  );
}
