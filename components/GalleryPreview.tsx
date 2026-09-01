import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    src: "/images/projects/walkway-rock-bed.webp",
    alt: "Rock bed and walkway landscaping project completed by Minnlawn",
  },
  {
    src: "/images/projects/fire-pit-project-finished.webp",
    alt: "Finished outdoor fire pit landscaping project by Minnlawn",
  },
  {
    src: "/images/projects/retaining-wall-garden.webp",
    alt: "Retaining wall and garden landscaping project by Minnlawn",
  },
  {
    src: "/images/projects/curved-backyard-rock-bed.webp",
    alt: "Curved backyard rock landscaping completed by Minnlawn",
  },
];

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
              key={item.src}
              aria-label="View Minnlawn project gallery"
            >
              <div className="gallery-preview__placeholder">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}