import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SeasonalSpotlight from "@/components/SeasonalSpotlight";
import ServiceDetails from "@/components/ServiceDetails";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Services in Rochester, MN",
  description:
    "Explore Minnlawn lawn care, landscaping, spring and fall cleanup, snow removal, and small tree removal services for residential and commercial properties in the Rochester, Minnesota area.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Lawn Care & Landscaping Services in Rochester, MN",
    description:
      "Professional lawn care, landscaping, seasonal cleanup, snow removal, and small tree removal for Rochester-area homes and businesses.",
    url: "https://minnlawn.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Minnlawn Services</p>

          <h1>Complete Lawn &amp; Landscape Services</h1>

          <p>
            Professional outdoor property care for residential and commercial
            clients throughout Rochester, Minnesota and surrounding communities.
          </p>
        </div>
      </section>
      <SeasonalSpotlight showButton={false} />
      <ServiceDetails />
      <Footer />
    </main>
  );
}
