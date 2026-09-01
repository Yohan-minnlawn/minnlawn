import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SeasonalSpotlight from "@/components/SeasonalSpotlight";
import ServicesPreview from "@/components/ServicesPreview";
import ClientTypes from "@/components/ClientTypes";
import WhyMinnlawn from "@/components/WhyMinnlawn";
import GalleryPreview from "@/components/GalleryPreview";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
    <SiteHeader />
      <section className="hero">
        <div className="hero__overlay" />

        <div className="container hero__content">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">Rochester, Minnesota</p>

            <h1>
              Lawn Care &amp; Landscaping
              <span>in Rochester, MN</span>
            </h1>

            <p className="hero__description">
              Professional outdoor property care for residential and commercial
              clients.
            </p>

            <div className="hero__actions">
              <a href="#quote" className="btn btn--primary">
                Get a Free Quote
              </a>

              <Link href="/gallery" className="btn hero__gallery-btn">
                View Gallery
              </Link>
            </div>

            <p className="hero__trust">
              Licensed &amp; Insured
              <span aria-hidden="true">•</span>
              Residential &amp; Commercial
            </p>
          </div>
        </div>
      </section>
      <SeasonalSpotlight />
      <ServicesPreview />
      <ClientTypes />
      <WhyMinnlawn />
      <GalleryPreview />
      <QuoteSection />
      <Footer />
    </main>
  );
}
