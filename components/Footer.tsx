import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Image
            src="/images/brand/logo.webp"
            alt=""
            width={48}
            height={48}
            className="brand__mark"
          />

          <div>
            <strong>Minnlawn</strong>
            <span>Lawn &amp; Landscape</span>
          </div>

          <p>
            Professional lawn, landscape, and seasonal property care throughout
            the Rochester, Minnesota area.
          </p>
        </div>

        <div className="site-footer__column">
          <h2>Explore</h2>

          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>

        <div className="site-footer__column">
          <h2>Services</h2>

          <nav aria-label="Footer services">
            <Link href="/services#lawn-care">Lawn Care</Link>
            <Link href="/services#landscaping">Landscaping</Link>
            <Link href="/services#cleanup">Seasonal Cleanup</Link>
            <Link href="/services#snow-removal">Snow Removal</Link>
            <Link href="/services#tree-removal">Small Tree Removal</Link>
          </nav>
        </div>

        <div className="site-footer__column">
          <h2>Get a Quote</h2>

          <p>Residential and commercial property care in the Rochester area.</p>

          <a href="tel:+15074050911" className="site-footer__phone">
            507-405-0911
          </a>

          <Link href="/#quote" className="site-footer__quote">
            Request a Free Quote &rarr;
          </Link>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Minnlawn Lawn &amp; Landscape. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
