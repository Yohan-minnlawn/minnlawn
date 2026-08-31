import Link from "next/link";
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
      <div className="promo-bar">
        <div className="container promo-bar__inner">
          <span>
            Get 10% off any service if you mention this website promotion!
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="Minnlawn home">
            <div className="brand__mark">M</div>

            <div className="brand__text">
              <span className="brand__name">Minnlawn</span>
              <span className="brand__tag">Lawn &amp; Landscape</span>
            </div>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
          </nav>

          <a href="#quote" className="btn btn--primary header-cta">
            Get a Free Quote
          </a>
        </div>
      </header>
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
