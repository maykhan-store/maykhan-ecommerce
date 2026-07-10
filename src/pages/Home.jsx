import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../admin/services/firestoreProductService";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />

      <div className="container py-5">
        <h2 className="text-center mb-5">
          Featured Products
        </h2>

        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;