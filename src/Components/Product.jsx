import{Link} from "react-router"

export default function Product({ product }) {
  /*let stockText = product.inStock ? "På Lager" : "Udsolgt";
    let stockClass = product.inStock ? "in-stock" : "out-of-stock";
    let stockText;
    let stockClass;
    if (product.inStock) {
        stockText = "På Lager";
        stockClass = "in-stock";
    } else {
        stockText = "Udsolgt";
        stockClass = "out-of-stock";
    }*/
  
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <article className="product">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h2 className="product-title">
          {product.title || "Unavngivet produkt"}
        </h2>
        <p className="product-description">
          {product.description || "Ingen beskrivelse"}
        </p>
        <p className="product-price">Pris: {product.price || "???"} kr</p>
        <span
          className={`product-stock ${product.inStock ? "in-stock" : "out-of-stock"}`}
        >
          {product.inStock ? "På Lager" : "Udsolgt"}
        </span>
        {product.price < 20 &&
          console.log(`${product.title} er et godt tilbud!!!`)}
      </article>
    </Link>
  );
  
}

