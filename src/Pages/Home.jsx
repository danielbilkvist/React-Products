import { useEffect } from "react";
import styles from "./Home.module.css";

export default function HomePage() {

  useEffect(() => {
    document.title = "Home - DenDanskeButik";
  },[]);

  return (
    <>
      <h1>Velkommen til DenDanskeButik</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6i-lHGnVlUAKOlhidRlMY5WrLdbOzjRpAgQ&s"
        alt="Den Danke Butik"
        className={styles.heroImage}
      />
    </>
  );
}
