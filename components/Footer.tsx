import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="brand__mark">M</div>

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

          <a href="#quote" className="site-footer__quote">
            Request a Free Quote →
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {new Date().getFullYear()} Minnlawn Lawn &amp; Landscape. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}