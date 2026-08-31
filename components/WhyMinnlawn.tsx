import Link from "next/link";

export default function WhyMinnlawn() {
  return (
    <section className="why-minnlawn">
      <div className="container why-minnlawn__inner">
        <div className="why-minnlawn__image" aria-hidden="true" />

        <div className="why-minnlawn__content">
          <p className="eyebrow">Why Minnlawn?</p>

          <h2>Local Property Care You Can Count On</h2>

          <p>
            Minnlawn is a family-owned lawn care and landscaping company
            serving residential and commercial properties throughout the
            Rochester area.
          </p>

          <p>
            From routine lawn maintenance and landscaping to seasonal cleanup
            and outdoor improvements, the focus is dependable service,
            attention to detail, and quality work.
          </p>

          <div className="why-minnlawn__trust">
            <span>Licensed &amp; Insured</span>
            <span>Residential &amp; Commercial</span>
            <span>Local Service</span>
          </div>

          <Link href="/about" className="btn btn--secondary">
            About Minnlawn
          </Link>
        </div>
      </div>
    </section>
  );
}