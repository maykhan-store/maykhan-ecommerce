function Contact() {
  return (
    <div className="container" style={{ padding: "50px 20px" }}>
      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you. Contact us using any of the options below.
      </p>

      <div style={{ marginTop: "30px", lineHeight: "2" }}>
        <h3>📞 Phone</h3>
        <p>+91 6300643960</p>

        <h3>💬 WhatsApp</h3>
        <a
          href="https://wa.me/916300643960"
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>

        <h3>📧 Email</h3>
        <p>your@email.com</p>

        <h3>📍 Address</h3>
        <p>Hyderabad, Telangana, India</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Contact;