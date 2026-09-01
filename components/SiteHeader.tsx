"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="promo-bar">
        <div className="container promo-bar__inner">
          <span>
            Get 10% off any service if you mention this website promotion!
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link
            href="/"
            className="brand"
            aria-label="Minnlawn home"
            onClick={closeMenu}
          >
            <Image
              src="/images/brand/logo.webp"
              alt=""
              width={48}
              height={48}
              className="brand__mark"
            />

            <div className="brand__text">
              <span className="brand__name">Minnlawn</span>
              <span className="brand__tag">Lawn &amp; Landscape</span>
            </div>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link
            href="/#quote"
            className="btn btn--primary header-cta"
            onClick={closeMenu}
          >
            Get a Free Quote
          </Link>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
          aria-label="Mobile navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/#quote" className="btn btn--primary" onClick={closeMenu}>
            Get a Free Quote
          </Link>
        </nav>
      </header>
    </>
  );
}
