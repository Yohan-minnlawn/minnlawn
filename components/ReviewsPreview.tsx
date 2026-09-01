const reviews = [
  {
    name: "Madeline Timken",
    initials: "MT",
    category: "Lawn Care",
    text: "Yohan always does a great job with our lawn! He’s reliable, easy to work with, and leaves everything looking clean and well maintained. The mowing and edging are always done with care, and it really makes a difference. We appreciate his attention to detail and would definitely recommend him to anyone looking for dependable lawn care.",
  },
  {
    name: "Adrianne Curtis",
    initials: "AC",
    category: "Landscaping",
    text: "Yohan was great to work with! He was very responsive to messages and always kept us informed. We needed a few established shrubs transplanted, and he was honest about whether or not he thought he could do the job and was able to get the job done! We will definitely continue working with Yohan for all our landscaping needs.",
  },
  {
    name: "Jody Howell",
    initials: "JH",
    category: "Customer Review",
    text: "Yohan and Minnlawn Lawn and Landscape are the best! He does an amazing job! He is punctual, has excellent communication and our yard looks great! I highly recommend Yohan for your yard care. I cannot say enough good things about the service and care we have received. Thank you for your wonderful service!",
  },
];

export default function ReviewsPreview() {
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
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-card__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>

              <div className="review-card__footer">
                <div className="review-card__avatar" aria-hidden="true">
                  {review.initials}
                </div>

                <div className="review-card__reviewer">
                  <strong>{review.name}</strong>
                  <span>{review.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reviews-preview__source">
          Reviews from Google
        </p>
      </div>
    </section>
  );
}
