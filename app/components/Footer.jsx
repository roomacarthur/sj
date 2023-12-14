import Link from 'next/link';
import React from 'react'
// icons
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/testimonials" className="link link-hover">
          Testimonials
        </Link>
        <Link href="/gallery" className="link link-hover">
          Gallery
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact Us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          {/* twitter */}
          <Link
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            href="/"
            target="_blank"
          >
            <FaTwitter />
          </Link>
          {/* youtube */}
          <Link
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            href="/"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          {/* Facebook */}
          <Link
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            href="/"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          {/* Instagram */}
          <Link
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            href="https://www.instagram.com/southgate.james_/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          © {new Date().getFullYear()} Southgate & James. All rights reserved.
        </p>
      </aside>
      <nav>
        <p className="text-xs font-sans">
          Site by{" "}
          <Link
            href="https://www.roomacarthur.dev"
            target="_blank"
            className="font-semibold underline tracking-wide"
          >
            Flat White Creative
          </Link>
        </p>
      </nav>
    </footer>
  );
}

export default Footer