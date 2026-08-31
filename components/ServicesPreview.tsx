import Link from "next/link";

const services = [
  {
    name: "Lawn Care",
    href: "/services#lawn-care",
  },
  {
    name: "Landscaping",
    href: "/services#landscaping",
  },
  {
    name: "Spring & Fall Cleanup",
    href: "/services#cleanup",
  },
  {
    name: "Snow Removal",
    href: "/services#snow-removal",
  },
  {
    name: "Small Tree Removal",
    href: "/services#tree-removal",
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="container">
        <div className="services-preview__heading">
          <div>
            <p className="eyebrow">Our Services</p>
            <h2>Complete Lawn &amp; Landscape Services</h2>
            <p>
              Professional outdoor property care for residential and commercial
              clients throughout Rochester and surrounding communities.
            </p>
          </div>

          <Link href="/services" className="services-preview__all">
            View All Services
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              href={service.href}
              className="service-card"
              key={service.name}
            >
              <div
                className="service-card__image-placeholder"
                aria-hidden="true"
              />

              <div className="service-card__content">
                <h3>{service.name}</h3>
                <span>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}