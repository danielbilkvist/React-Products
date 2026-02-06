import { NavLink } from "react-router";

export default function NavigationBar(){
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    );
}