import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-0 bg-pink-400 text-white px-4 sm:px-6 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-10">
        {/* Brand */}
        <div className="text-center md:text-left">
          <span
            className={`${pacifico.className} text-white text-3xl block mb-3`}
          >
            look my nails
          </span>
          <p className="text-pink-100 text-sm max-w-xs">
            Nail art, spa days &amp; party magic for kids. Making little ones
            feel like royalty since day one.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
              Navigate
            </h4>
            <a
              href="#"
              className="block text-pink-100 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#gallery"
              className="block text-pink-100 hover:text-white transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block text-pink-100 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
              Social
            </h4>
            <a
              href="#"
              className="block text-pink-100 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block text-pink-100 hover:text-white transition-colors"
            >
              TikTok
            </a>
            <a
              href="#"
              className="block text-pink-100 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 sm:mt-12 pt-6 border-t border-pink-300 text-center text-pink-100 text-xs">
        &copy; {new Date().getFullYear()} Look My Nails. All rights reserved.
      </div>
    </footer>
  );
}
