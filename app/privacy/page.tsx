import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Minnlawn Lawn & Landscape.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p>Effective September 22, 2026</p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container legal-page__content">
          <h2>Information You Provide</h2>
          <p>
            When you request a quote through this website, Minnlawn may collect
            information you choose to provide, including your name, email
            address, phone number, property address, requested service, project
            details, and photos you upload.
          </p>

          <h2>How We Use Information</h2>
          <p>
            Information submitted through the website is used to respond to
            inquiries, discuss or prepare quotes, communicate about requested
            services, and provide customer service. Minnlawn does not sell your
            personal information.
          </p>

          <h2>Google Business Profile Data</h2>
          <p>
            Minnlawn uses the Google Business Profile API to retrieve review
            information from Minnlawn&apos;s own Google Business Profile so that
            current customer reviews can be displayed on this website.
          </p>

          <p>
            Public review information may include a reviewer&apos;s display name,
            profile photo, star rating, review text, and review date as provided
            by Google.
          </p>

          <p>
            Google authorization credentials used for this integration are kept
            securely on the server and are not exposed to website visitors.
            Google user data is not sold or used for advertising.
          </p>

          <h2>Service Providers</h2>
          <p>
            Minnlawn uses third-party service providers, including website
            hosting and Google services, to operate this website and its
            features.
          </p>

          <h2>Data Security</h2>
          <p>
            Reasonable measures are used to protect submitted information,
            although no internet transmission or storage system can be
            guaranteed to be completely secure.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may contact Minnlawn to ask about information you previously
            submitted through this website or to request correction or deletion
            when appropriate.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact Minnlawn through the website or call
            507-405-0911.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}