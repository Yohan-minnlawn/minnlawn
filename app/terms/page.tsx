import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website terms for Minnlawn Lawn & Landscape.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Website Terms</p>
          <h1>Terms of Service</h1>
          <p>Effective September 22, 2026</p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container legal-page__content">
          <h2>Website Use</h2>
          <p>
            This website provides information about Minnlawn Lawn &amp;
            Landscape, its services, completed work, and ways to request a
            quote.
          </p>

          <h2>Quotes and Services</h2>
          <p>
            Submitting a website inquiry or quote request does not create a
            service contract. Pricing, availability, scope, scheduling, and
            other service terms are confirmed separately with Minnlawn.
          </p>

          <h2>Photo Uploads</h2>
          <p>
            If you upload photos with a quote request, you confirm that you have
            permission to provide those images and allow Minnlawn to use them to
            evaluate your requested project.
          </p>

          <h2>Google Reviews</h2>
          <p>
            Reviews displayed on this website may be retrieved from Minnlawn&apos;s
            Google Business Profile. Review content, reviewer names, profile
            photos, ratings, and dates are provided by Google and the individual
            reviewers.
          </p>

          <h2>Website Content</h2>
          <p>
            Unless otherwise noted, website content and Minnlawn-owned project
            images may not be copied or republished for commercial purposes
            without permission.
          </p>

          <h2>Availability and Accuracy</h2>
          <p>
            Minnlawn works to keep website information accurate and available,
            but information may change and the website may occasionally be
            unavailable.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be updated when the website, services, or applicable
            requirements change.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms may be sent through the website or by
            calling Minnlawn at 507-405-0911.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}