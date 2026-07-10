import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>MAYKHAN</h2>

          <p>
            Quality Toys, Mobile Accessories and Packaging Materials at
            affordable prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📞 +91 6300643960</p>

          <p>📍 Hyderabad, Telangana</p>

          <p>📧 your@email.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MAYKHAN. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;