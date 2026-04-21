import { Lilita_One, Pacifico } from "next/font/google";
import Carousel from "./Carousel";

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const GALLERY_IMAGES = [
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 1" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 2" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 3" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 4" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 5" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 6" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 7" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 8" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 9" },
  { src: "/nail-demo-img.jpg", alt: "Nail art demo 10" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative px-4 sm:px-6 py-16 md:py-24 scroll-mt-20 md:scroll-mt-24"
    >
      {/* Carry blobs into gallery */}
      <div className="hero-blob hero-blob-gallery-1" />
      <div className="hero-blob hero-blob-gallery-2" />

      <div className="sparkle sparkle-gallery-1">✦</div>
      <div className="sparkle sparkle-gallery-2">⋆</div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-14">
          <h2
            className={`${lilitaOne.className} text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3`}
          >
            A peek at the{" "}
            <span className={`${pacifico.className} text-pink-400`}>
              magic
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto">
            Real parties, real smiles, real sparkle.
          </p>
        </div>

        <Carousel images={GALLERY_IMAGES} />
      </div>
    </section>
  );
}
