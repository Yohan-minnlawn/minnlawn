"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "lawn-care",
    title: "Lawn Care",
    description:
      "Reliable lawn care for residential and commercial properties throughout the Rochester area.",
    image: "/images/projects/striped-lawn-closeup.webp",
    alt: "Freshly striped lawn maintained by Minnlawn",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Outdoor improvements designed to create clean, attractive, and well-maintained landscapes.",
    image: "/images/projects/front-yard-rock-landscaping.webp",
    alt: "Finished front yard rock landscaping project by Minnlawn",
  },
  {
    id: "cleanup",
    title: "Spring & Fall Cleanup",
    description:
      "Seasonal property cleanup to help prepare your lawn and landscape for the months ahead.",
    image: "/images/projects/leaves-blower.webp",
    alt: "Minnlawn performing seasonal leaf cleanup",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    description:
      "Dependable winter property care for residential and commercial clients during Minnesota snow season.",
    image: "/images/projects/winter-plow.webp",
    alt: "Minnlawn snow removal service clearing a snowy property",
  },
  {
    id: "tree-removal",
    title: "Small Tree Removal",
    description:
      "Small tree removal services for properties that need targeted outdoor cleanup and improvement.",
    image: "/images/projects/small-tree-removal.webp",
    alt: "Minnlawn performing small tree removal work",
  },
];

function getCurrentMonth() {
  return Number(
    new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      timeZone: "America/Chicago",
    }).format(new Date()),
  );
}

function getSeasonalOrder(month: number) {
  if (month === 12 || month <= 3) {
    return [
      "snow-removal",
      "tree-removal",
      "cleanup",
      "lawn-care",
      "landscaping",
    ];
  }

  if (month === 4) {
    return [
      "cleanup",
      "lawn-care",
      "landscaping",
      "tree-removal",
      "snow-removal",
    ];
  }

  if (month >= 5 && month <= 9) {
    return [
      "lawn-care",
      "landscaping",
      "cleanup",
      "tree-removal",
      "snow-removal",
    ];
  }

  return [
    "cleanup",
    "tree-removal",
    "snow-removal",
    "lawn-care",
    "landscaping",
  ];
}

export default function ServiceDetails() {
  const [month] = useState(getCurrentMonth);

  const seasonalOrder = getSeasonalOrder(month);

  const orderedServices = seasonalOrder
    .map((id) => services.find((service) => service.id === id))
    .filter((service) => service !== undefined);

  return (
    <section className="service-details">
      <div className="container service-details__inner">
        {orderedServices.map((service, index) => (
          <article
            className={`service-detail ${
              index % 2 !== 0 ? "service-detail--reverse" : ""
            }`}
            id={service.id}
            key={service.id}
          >
            <div className="service-detail__image">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>

            <div className="service-detail__content">
              <p className="eyebrow">Minnlawn Service</p>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <Link href="/#quote" className="btn btn--primary">
                Get a Free Quote
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}