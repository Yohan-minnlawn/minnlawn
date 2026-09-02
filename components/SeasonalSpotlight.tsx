"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Season = {
  title: string;
  description: string;
};

const getSeason = (month: number): Season => {
  if (month === 12 || month <= 3) {
    return {
      title: "Snow Removal",
      description:
        "Keep your property accessible through Minnesota winter weather with dependable snow removal services.",
    };
  }

  if (month === 4) {
    return {
      title: "Spring Cleanup & Property Prep",
      description:
        "Get your lawn and landscape ready for the growing season with spring cleanup and seasonal property maintenance.",
    };
  }

  if (month >= 5 && month <= 9) {
    return {
      title: "Lawn Care & Landscaping",
      description:
        "Keep your property looking its best throughout the growing season with professional lawn care and landscaping services.",
    };
  }

  return {
    title: "Fall Cleanup",
    description:
      "Prepare your property for winter with seasonal fall cleanup and outdoor maintenance services.",
  };
};

export default function SeasonalSpotlight({
  showButton = true,
}: {
  showButton?: boolean;
}) {
  const [season, setSeason] = useState<Season>({
    title: "Seasonal Property Care",
    description:
      "Professional outdoor property services for every season in Rochester, Minnesota.",
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const month = Number(
        new Intl.DateTimeFormat("en-US", {
          month: "numeric",
          timeZone: "America/Chicago",
        }).format(new Date()),
      );

      setSeason(getSeason(month));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="seasonal-spotlight">
      <div className="container seasonal-spotlight__inner">
        <div>
          <p className="eyebrow">In Season Now</p>

          <h2>{season.title}</h2>

          <p className="seasonal-spotlight__description">
            {season.description}
          </p>
        </div>

        {showButton && (
          <Link href="/services" className="btn btn--primary">
            Explore Services
          </Link>
        )}
      </div>
    </section>
  );
}
