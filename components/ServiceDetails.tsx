"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "lawn-care",
    title: "Lawn Care",
    description:
      "Reliable lawn care for residential and commercial properties throughout the Rochester area.",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Outdoor improvements designed to create clean, attractive, and well-maintained landscapes.",
  },
  {
    id: "cleanup",
    title: "Spring & Fall Cleanup",
    description:
      "Seasonal property cleanup to help prepare your lawn and landscape for the months ahead.",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    description:
      "Dependable winter property care for residential and commercial clients during Minnesota snow season.",
  },
  {
    id: "tree-removal",
    title: "Small Tree Removal",
    description:
      "Small tree removal services for properties that need targeted outdoor cleanup and improvement.",
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
  if ([12, 1, 2, 3].includes(month)) {
    return [
      "snow-removal",
      "tree-removal",
      "landscaping",
      "lawn-care",
      "cleanup",
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
      "tree-removal",
      "cleanup",
      "snow-removal",
    ];
  }

  return [
    "cleanup",
    "landscaping",
    "tree-removal",
    "lawn-care",
    "snow-removal",
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
            <div className="service-detail__image" aria-hidden="true" />

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