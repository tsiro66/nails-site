"use client";

import { useState } from "react";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${pacifico.className} sticky top-4 z-50 mx-4 md:mx-auto md:max-w-3xl bg-white/80 backdrop-blur-sm shadow-md text-xl ${
        open ? "rounded-2xl" : "rounded-full"
      }`}
      style={{ transitionProperty: "border-radius", transitionDuration: open ? "0ms" : "0ms", transitionDelay: open ? "0ms" : "300ms" }}
    >
      {/* Desktop + mobile top bar */}
      <div className="flex items-center justify-between px-5 py-3">
        {/* Desktop links left */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-700 hover:text-pink-400 transition-colors"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-gray-700 hover:text-pink-400 transition-colors"
          >
            Gallery
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-pink-400 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo — center */}
        <a
          href="#"
          className="text-pink-400 text-xl md:text-2xl text-center leading-tight"
        >
          look my nails
        </a>

        {/* Desktop links right */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#contact"
            className="text-gray-700 hover:text-pink-400 transition-colors"
          >
            Contact
          </a>
          <Link
            href="/book"
            className="bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition-colors"
          >
            Book
          </Link>
        </div>

        {/* Book button — mobile only */}
        <Link
          href="/book"
          className="md:hidden bg-pink-400 hover:bg-pink-500 text-white px-4 py-1.5 text-base rounded-full transition-colors"
        >
          Book
        </Link>
      </div>

      {/* Mobile dropdown — animated */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 pb-5 text-xl">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-pink-400 transition-colors"
          >
            About
          </a>
          <a
            href="#gallery"
            onClick={() => setOpen(false)}
            className="text-pink-400 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-pink-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
