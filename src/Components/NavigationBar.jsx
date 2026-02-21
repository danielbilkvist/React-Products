import { NavLink } from "react-router";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.logo}>
        <img
          src="https://loppesalgdev2.blob.core.windows.net/login/takeNowLogo.png"
          alt="Take Now Logo"
        />
      </div>
      <div className={styles.links}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/products" className={styles.link}>
          Products
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          About Us
        </NavLink>
      </div>
    </nav>
  );
}
