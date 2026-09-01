import SiteHeader from "@/components/SiteHeader";
import SeasonalSpotlight from "@/components/SeasonalSpotlight";
import ServiceDetails from "@/components/ServiceDetails";
import Footer from "@/components/Footer";

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
            clients throughout Rochester, Minnesota and surrounding
            communities.
          </p>
        </div>
      </section>
      <SeasonalSpotlight />
      <ServiceDetails />
      <Footer />
    </main>
  );
}