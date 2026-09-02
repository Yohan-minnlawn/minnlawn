import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SeasonalSpotlight from "@/components/SeasonalSpotlight";
import ServicesPreview from "@/components/ServicesPreview";
import ClientTypes from "@/components/ClientTypes";
import WhyMinnlawn from "@/components/WhyMinnlawn";
import ReviewsPreview from "@/components/ReviewsPreview";
import GalleryPreview from "@/components/GalleryPreview";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Minnlawn Lawn & Landscape",
  url: "https://minnlawn.com",
  telephone: "+1-507-405-0911",
  logo: "https://minnlawn.com/images/brand/logo.webp",
  image: "https://minnlawn.com/images/hero/minnlawn-striped-lawn-hero.webp",
  description:
    "Professional lawn care, landscaping, seasonal cleanup, snow removal, and outdoor property services for residential and commercial clients in the Rochester, Minnesota area.",
  areaServed: {
    "@type": "City",
    name: "Rochester",
    address: {
      "@type": "PostalAddress",
      addressRegion: "MN",
      addressCountry: "US",
    },
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <SiteHeader />
      <section className="hero">
        <Image
          src="/images/hero/minnlawn-striped-lawn-hero.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero__image"
        />
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
      <ReviewsPreview />
      <GalleryPreview />
      <QuoteSection />
      <Footer />
    </main>
  );
}
