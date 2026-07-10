import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";

import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

import {
  getProduct,
  getProducts
} from "../admin/services/firestoreProductService";

import { getProductReviews } from "../admin/services/reviewService";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  async function loadReviews(productId) {

    const data = await getProductReviews(productId);

    setReviews(data);

  }

  useEffect(() => {

    async function load() {

      const selected = await getProduct(id);

      setProduct(selected);

      const allProducts = await getProducts();

      setProducts(allProducts);

      if (selected) {

        await loadReviews(selected.id);

      }

    }

    load();

  }, [id]);

  if (!product) {

    return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  }

  const averageRating = reviews.length
    ? (
        reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : 0;

  return (

    <div>

      <div className="product-page">

        <ProductGallery
          images={
            product.images?.length
              ? product.images
              : [product.image]
          }
        />

        <ProductInfo
          product={product}
        />

      </div>

      <RelatedProducts
        products={products}
        currentId={product.id}
      />

      <section className="reviews-section">

        <h2>Customer Reviews</h2>

        <h3>
          ⭐ {averageRating} ({reviews.length} Reviews)
        </h3>

        <ReviewForm
          productId={product.id}
          onReviewAdded={() => loadReviews(product.id)}
        />

        <ReviewList
          reviews={reviews}
        />

      </section>

    </div>

  );

}

export default ProductDetails;