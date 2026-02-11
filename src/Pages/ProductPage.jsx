//import { use } from "react";
import ProductGrid from "../Components/ProductGrid";
import { useEffect } from "react";

export default function ProductPage() {
  useEffect(() => {
    document.title = "Products - DenDanskeButik";
  },[]);

  return (
    <>
      <header>
        <h1>Alle Produkter</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </>
  );
}
