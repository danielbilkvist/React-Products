import { Route, Routes } from "react-router";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;

//cd vite-project && npm run dev
