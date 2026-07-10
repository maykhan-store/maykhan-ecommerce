import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Welcome to <span>MAYKHAN</span>
        </h1>

        <p>
          Discover quality Toys, Mobile Accessories and Packaging Materials at
          affordable prices. Browse our catalog and order easily through
          WhatsApp.
        </p>

        <div className="hero-buttons">

          <Link to="/">
            <button className="primary-btn">
              Explore Products
            </button>
          </Link>

          <a
            href="https://wa.me/916300643960?text=Hi%20MAYKHAN,%20I'm%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="secondary-btn">
              WhatsApp Us
            </button>
          </a>

        </div>

      </div>

      <img
        src="/products/banner.png"
        alt="MAYKHAN Banner"
      />

    </section>
  );
}

export default Hero;