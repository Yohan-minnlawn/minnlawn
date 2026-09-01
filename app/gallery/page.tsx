import Image from "next/image";

import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const galleryItems = [
  {
    src: "/images/projects/walkway-rock-bed.webp",
    alt: "Rock landscaping beside a paved walkway completed by Minnlawn",
  },
  {
    src: "/images/projects/front-yard-rock-landscaping.webp",
    alt: "Front yard rock landscaping completed by Minnlawn",
  },
  {
    src: "/images/projects/retaining-wall-garden.webp",
    alt: "Retaining wall and garden landscaping completed by Minnlawn",
  },
  {
    src: "/images/projects/curved-backyard-rock-bed.webp",
    alt: "Curved backyard rock bed completed by Minnlawn",
  },
  {
    src: "/images/projects/backyard-rock-landscape.webp",
    alt: "Backyard rock landscaping completed by Minnlawn",
  },
  {
    src: "/images/projects/deck-rock-landscape.webp",
    alt: "Rock landscaping around a backyard deck completed by Minnlawn",
  },
  {
    src: "/images/projects/front-foundation-rock-bed.webp",
    alt: "Front foundation rock bed completed by Minnlawn",
  },
  {
    src: "/images/projects/side-yard-rock-bed.webp",
    alt: "Side yard rock bed completed by Minnlawn",
  },
  {
    src: "/images/projects/mulch-bed-side-yard.webp",
    alt: "Side yard mulch bed completed by Minnlawn",
  },
  {
    src: "/images/projects/landscape-tree-ring.webp",
    alt: "Landscaped tree ring completed by Minnlawn",
  },
  {
    src: "/images/projects/garden-shed-steps.webp",
    alt: "Landscaping and steps near a garden shed completed by Minnlawn",
  },
  {
    src: "/images/projects/gravel-landscape-steps.webp",
    alt: "Gravel landscaping and outdoor steps completed by Minnlawn",
  },
  {
    src: "/images/projects/landscape-block-steps.webp",
    alt: "Landscape block steps completed by Minnlawn",
  },
  {
    src: "/images/projects/retaining-wall-walkway.webp",
    alt: "Retaining wall and walkway completed by Minnlawn",
  },
  {
    src: "/images/projects/fire-pit-project-before.webp",
    alt: "Backyard before Minnlawn fire pit landscaping project",
  },
  {
    src: "/images/projects/fire-pit-project-finished.webp",
    alt: "Finished backyard fire pit landscaping project by Minnlawn",
  },
  {
    src: "/images/projects/landscape.webp",
    alt: "Residential landscaping completed by Minnlawn",
  },
  {
    src: "/images/projects/lawn-aeration-dethatching.webp",
    alt: "Lawn aeration and dethatching work by Minnlawn",
  },
  {
    src: "/images/projects/lawn.webp",
    alt: "Maintained residential lawn by Minnlawn",
  },
  {
    src: "/images/projects/striped-lawn-closeup.webp",
    alt: "Freshly striped lawn maintained by Minnlawn",
  },
];

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
            <div className="gallery-page__item" key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}