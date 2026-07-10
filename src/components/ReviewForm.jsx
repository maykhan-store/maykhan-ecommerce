import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addReview } from "../admin/services/reviewService";

function ReviewForm({ productId, onReviewAdded }) {

  const { currentUser } = useAuth();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    if (!currentUser) {
      alert("Please login to submit a review.");
      return;
    }

    if (!comment.trim()) {
      alert("Please write a review.");
      return;
    }

    try {

      setLoading(true);

      await addReview({
        productId,
        userEmail: currentUser.email,
        rating: Number(rating),
        comment: comment.trim()
      });

      setRating(5);
      setComment("");

      if (onReviewAdded) {
        onReviewAdded();
      }

      alert("Review submitted successfully!");

    } catch (error) {

      console.error(error);
      alert("Failed to submit review.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="review-form">

      <h3>Write a Review</h3>

      <form onSubmit={handleSubmit}>

        <label>Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

      </form>

    </div>

  );

}

export default ReviewForm;