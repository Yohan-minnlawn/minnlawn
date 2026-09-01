import Link from "next/link";
import Image from "next/image";

const clientTypes = [
  {
    title: "Residential Services",
    description:
      "Reliable lawn and landscape care designed to keep your home and outdoor property looking its best.",
    href: "/services#residential",
    image: "/images/projects/front-yard-rock-landscaping.webp",
    alt: "Residential landscaping project completed by Minnlawn",
  },
  {
    title: "Commercial Services",
    description:
      "Professional exterior property care for businesses and commercial properties throughout the Rochester area.",
    href: "/services#commercial",
    image: "/images/projects/retaining-wall-walkway.webp",
    alt: "Retaining wall and walkway project completed by Minnlawn",
  },
];

export default function ClientTypes() {
  return (
    <section className="client-types">
      <div className="container client-types__inner">
        {clientTypes.map((type) => (
          <article className="client-type-card" key={type.title}>
            <div className="client-type-card__image">
              <Image
                src={type.image}
                alt={type.alt}
                fill
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </div>

            <div className="client-type-card__content">
              <p className="eyebrow">
                {type.title.startsWith("Residential")
                  ? "For Your Home"
                  : "For Your Business"}
              </p>

              <h2>{type.title}</h2>

              <p>{type.description}</p>

              <Link href={type.href} className="client-type-card__link">
                Explore Services →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
