import { useState } from "react";
import { addReview } from "../services/reviewService";
import { useAuth } from "../context/AuthContext";

function ReviewForm({ productId, onReviewAdded }) {

  const { currentUser } = useAuth();

  const [rating, setRating] = useState(5);

  const [comment, setComment] = useState("");

  async function submitReview(e) {

    e.preventDefault();

    if (!currentUser) {

      alert("Please login first.");

      return;

    }

    await addReview({

      productId,

      userEmail: currentUser.email,

      rating: Number(rating),

      comment

    });

    setComment("");

    setRating(5);

    onReviewAdded();

  }

  return (

    <form onSubmit={submitReview}>

      <h3>Write a Review</h3>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >

        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>

      </select>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        required
      />

      <button type="submit">
        Submit Review
      </button>

    </form>

  );

}

export default ReviewForm;