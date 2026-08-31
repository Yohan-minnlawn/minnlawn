import Link from "next/link";

const clientTypes = [
  {
    title: "Residential Services",
    description:
      "Reliable lawn and landscape care designed to keep your home and outdoor property looking its best.",
    href: "/services#residential",
  },
  {
    title: "Commercial Services",
    description:
      "Professional exterior property care for businesses and commercial properties throughout the Rochester area.",
    href: "/services#commercial",
  },
];

export default function ClientTypes() {
  return (
    <section className="client-types">
      <div className="container client-types__inner">
        {clientTypes.map((type) => (
          <article className="client-type-card" key={type.title}>
            <div className="client-type-card__image" aria-hidden="true" />

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