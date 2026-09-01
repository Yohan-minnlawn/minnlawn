import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const galleryItems = Array.from({ length: 12 }, (_, index) => index + 1);

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Minnlawn Gallery</p>

          <h1>Our Work</h1>

          <p>
            Explore lawn care, landscaping, and outdoor property projects
            completed throughout the Rochester area.
          </p>
        </div>
      </section>

      <section className="gallery-page">
        <div className="container gallery-page__grid">
          {galleryItems.map((item) => (
            <div
              className="gallery-page__item"
              key={item}
              aria-hidden="true"
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}