import Link from "next/link";

const galleryItems = [1, 2, 3, 4];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <div className="container gallery-preview__inner">
        <div className="gallery-preview__heading">
          <div>
            <p className="eyebrow">Recent Work</p>
            <h2>See What We&apos;ve Been Working On</h2>
            <p>
              A look at recent lawn care and landscaping projects throughout
              the Rochester area.
            </p>
          </div>

          <Link href="/gallery" className="btn btn--secondary">
            View Gallery
          </Link>
        </div>

        <div className="gallery-preview__grid">
          {galleryItems.map((item) => (
            <Link
              href="/gallery"
              className="gallery-preview__item"
              key={item}
              aria-label="View Minnlawn project gallery"
            >
              <div
                className="gallery-preview__placeholder"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}