function ReviewList({ reviews }) {

  if (reviews.length === 0) {

    return (
      <p>No reviews yet.</p>
    );

  }

  return (

    <div>

      {reviews.map(review => (

        <div
          key={review.id}
          className="review-card"
        >

          <h4>

            {"⭐".repeat(review.rating)}

          </h4>

          <p>

            {review.comment}

          </p>

          <small>

            {review.userEmail}

          </small>

        </div>

      ))}

    </div>

  );

}

export default ReviewList;