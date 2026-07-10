import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h2>MAYKHAN</h2>
      </Link>

      <div className="menu">

        <Link to="/">Home</Link>

        <Link to="/">Products</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/wishlist">❤️ Wishlist</Link>

      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <a
        href="https://wa.me/916300643960?text=Hi%20MAYKHAN,%20I'm%20interested%20in%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          WhatsApp
        </button>
      </a>

    </nav>
  );
}

export default Navbar;