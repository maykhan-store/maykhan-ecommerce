import { useState } from "react";

function ProductForm({ onSave, initialData }) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    price: initialData?.price || "",
    category: initialData?.category || "",
    stock: initialData?.stock || "",
    featured: initialData?.featured || false,

    image: initialData?.image || "",

    description: initialData?.description || "",

    gallery: initialData?.images
      ? initialData.images.join("\n")
      : "",

    features: initialData?.features
      ? initialData.features.join("\n")
      : "",

    specifications: initialData?.specifications
      ? Object.entries(initialData.specifications)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")
      : ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function parseGallery(text) {
    return text
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  }

  function parseFeatures(text) {
    return text
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  }

  function parseSpecifications(text) {
    const specs = {};

    text.split("\n").forEach((line) => {
      const parts = line.split(":");

      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(":").trim();

        specs[key] = value;
      }
    });

    return specs;
  }

  function submit(e) {
    e.preventDefault();

    const product = {
      name: form.name,
      price: Number(form.price),
      category: form.category,
      stock: Number(form.stock),
      featured: form.featured,

      image: form.image,

      images: parseGallery(form.gallery),

      description: form.description,

      features: parseFeatures(form.features),

      specifications: parseSpecifications(form.specifications)
    };

    onSave(product);
  }

  return (
    <form
      className="product-form"
      onSubmit={submit}
    >
      <h2>Product Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
      />

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "15px 0"
        }}
      >
        <input
          type="checkbox"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />
        Featured Product
      </label>

      <hr />

      <h2>Main Image</h2>

      <input
        type="text"
        name="image"
        placeholder="Main Image URL"
        value={form.image}
        onChange={handleChange}
      />

      {form.image && (
        <img
          src={form.image}
          alt="Preview"
          className="main-preview"
        />
      )}

      <hr />

      <h2>Gallery Images</h2>

      <textarea
        name="gallery"
        placeholder="One image URL per line"
        value={form.gallery}
        onChange={handleChange}
        rows={5}
      />

      <hr />

      <h2>Description</h2>

      <textarea
        name="description"
        placeholder="Product Description"
        value={form.description}
        onChange={handleChange}
        rows={6}
      />

      <hr />

      <h2>Features</h2>

      <textarea
        name="features"
        placeholder={`Rechargeable Battery
28 Learning Functions
Hindi & English
Safe ABS Plastic`}
        value={form.features}
        onChange={handleChange}
        rows={6}
      />

      <hr />

      <h2>Specifications</h2>

      <textarea
        name="specifications"
        placeholder={`Brand: MAYKHAN
Material: ABS Plastic
Battery: Rechargeable
Age: 2-10 Years`}
        value={form.specifications}
        onChange={handleChange}
        rows={8}
      />

      <button type="submit">
        Save Product
      </button>
    </form>
  );
}

export default ProductForm;