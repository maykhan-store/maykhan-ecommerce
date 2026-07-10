function WhatsAppButton() {
  const phone = "916300643960";

  const message = encodeURIComponent(
    "Hi MAYKHAN! I'm interested in your products. Please share more details."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;