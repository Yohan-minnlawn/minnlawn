import { getCustomerReviews } from "@/lib/reviews/get-reviews";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export default async function ReviewsPreview() {
  const reviews = await getCustomerReviews();

  return (
    <section className="reviews-preview">
      <div className="container reviews-preview__inner">
        <div className="reviews-preview__heading">
          <p className="eyebrow">Customer Reviews</p>
          <h2>What Our Customers Say</h2>
          <p>
            Real feedback from Minnlawn customers throughout the Rochester area.
          </p>
        </div>

        <div className="reviews-preview__grid">
          {reviews.map((review) => {
            const filledStars = Math.max(
              0,
              Math.min(5, Math.round(review.rating)),
            );

            return (
              <article className="review-card" key={review.id}>
                <div
                  className="review-card__stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(filledStars)}
                  {"☆".repeat(5 - filledStars)}
                </div>

                <p className="review-card__text">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="review-card__footer">
                  <div className="review-card__avatar" aria-hidden="true">
                    {getInitials(review.authorName)}
                  </div>

                  <div className="review-card__reviewer">
                    <strong>{review.authorName}</strong>
                    <span>
                      {review.relativePublishedAt ?? "Google Review"}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="reviews-preview__source">Reviews from Google</p>
      </div>
    </section>
  );
}