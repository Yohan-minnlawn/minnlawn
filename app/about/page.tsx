import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Minnlawn</p>

          <h1>Local Outdoor Property Care With a Personal Touch</h1>

          <p>
            Minnlawn is a family-owned lawn care and landscaping company proudly
            based in Mantorville, Minnesota, serving homeowners and businesses
            throughout the Rochester area.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__image" aria-hidden="true" />

          <div className="about-story__content">
            <p className="eyebrow">Our Story</p>

            <h2>Dependable Service. Quality Work. Local Commitment.</h2>

            <p>
              We are committed to providing reliable, high-quality lawn care and
              landscaping services with a personal touch, helping homeowners and
              businesses keep their properties looking their best.
            </p>

            <p>
              From lawn maintenance and landscaping to seasonal cleanups and
              outdoor improvements, we take pride in dependable service,
              attention to detail, and results you can count on.
            </p>

            <p>
              As members of the local community, we value hard work, honesty,
              and building lasting relationships with our customers.
            </p>

            <div className="about-story__trust">
              <span>Family Owned</span>
              <span>Licensed &amp; Insured</span>
              <span>Residential &amp; Commercial</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
