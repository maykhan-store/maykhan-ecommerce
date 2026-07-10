import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addWishlist } = useContext(WishlistContext);

  return (
    <div className="card">

      <div className="category-tag">
        {product.category}
      </div>

      <img
        src={product.image || product.images?.[0]}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
      </p>

      <p>
        {product.stock > 0
          ? "✅ In Stock"
          : "❌ Out of Stock"}
      </p>

      <div className="card-buttons">

        <Link to={`/product/${product.id}`}>
          <button>
            View Details
          </button>
        </Link>

        <button
          onClick={() => addWishlist(product)}
        >
          ❤️ Wishlist
        </button>

      </div>

      <a
        href={`https://wa.me/916300643960?text=${encodeURIComponent(
          `Hi MAYKHAN, I'm interested in "${product.name}" priced at ₹${product.price}.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            width: "100%",
            marginTop: "10px",
            background: "#25D366",
            color: "#fff"
          }}
        >
          Order on WhatsApp
        </button>
      </a>

    </div>
  );
}

export default ProductCard;