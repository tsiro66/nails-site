import { Lilita_One, Pacifico } from "next/font/google";
import Link from "next/link";
import ServicesList from "./ServicesList";

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col text-center px-4 sm:px-6 pt-16 md:pt-28"
    >
      {/* Decorative gradient blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Sparkle decorations */}
      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✦</div>
      <div className="sparkle sparkle-3">⋆</div>
      <div className="sparkle sparkle-4">✦</div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h1
          className={`${lilitaOne.className} text-4xl sm:text-5xl md:text-7xl leading-[1.1] text-gray-800 mb-6`}
        >
          Make her next birthday party{" "}
          <span
            className={`${pacifico.className} text-pink-400 text-5xl sm:text-6xl md:text-8xl`}
          >
            special
          </span>
        </h1>

        <p className="text-gray-500 text-base sm:text-xl leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
          Nail art, mini facials &amp; spa days made just for kids.
          <br />
          Let them feel fancy.
        </p>

        {/* CTA Button */}
        <Link
          href="/book"
          className="inline-block bg-pink-400 hover:bg-pink-500 text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-16 md:mb-24"
        >
          Book a Party ✨
        </Link>

        {/* Service cards */}
        <ServicesList fontClass={pacifico.className} />
      </div>
    </section>
  );
}
