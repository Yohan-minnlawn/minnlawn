import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Lawn Care",
    href: "/services#lawn-care",
    image: "/images/projects/striped-lawn-closeup.webp",
    alt: "Freshly striped lawn maintained by Minnlawn",
  },
  {
    name: "Landscaping",
    href: "/services#landscaping",
    image: "/images/projects/front-yard-rock-landscaping.webp",
    alt: "Finished front yard rock landscaping project by Minnlawn",
  },
  {
    name: "Spring & Fall Cleanup",
    href: "/services#cleanup",
    image: null,
    alt: "",
  },
  {
    name: "Snow Removal",
    href: "/services#snow-removal",
    image: null,
    alt: "",
  },
  {
    name: "Small Tree Removal",
    href: "/services#tree-removal",
    image: null,
    alt: "",
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
              <div className="service-card__image-placeholder">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                )}
              </div>

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