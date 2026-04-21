import { Lilita_One, Pacifico } from "next/font/google";

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutSection() {
  return (
    <section id="about" className="relative px-4 sm:px-6 py-16 md:py-24 scroll-mt-20 md:scroll-mt-24">
      {/* Blobs */}
      <div className="hero-blob hero-blob-about-1" />
      <div className="hero-blob hero-blob-about-2" />

      {/* Sparkles */}
      <div className="sparkle sparkle-about-1">✦</div>
      <div className="sparkle sparkle-about-2">⋆</div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          {/* Left — big heading */}
          <div className="md:w-2/5 md:sticky md:top-28 shrink-0">
            <h2
              className={`${lilitaOne.className} text-3xl sm:text-5xl md:text-6xl text-gray-800 leading-tight mb-4`}
            >
              Who{" "}
              <span className={`${pacifico.className} text-pink-400`}>
                we are
              </span>
            </h2>
          </div>

          {/* Right — descriptive text */}
          <div className="md:w-3/5 space-y-5 md:space-y-6">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We started with a simple idea: every kid deserves to feel like a
              star on their special day. What began as backyard nail parties for
              friends quickly grew into something bigger.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Today we bring the full glam experience — nail art, mini facials,
              chocolate face therapy, and age-appropriate makeup — straight to
              your home or venue. No stress, no mess, just pure fun.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Every product we use is non-toxic, hypoallergenic, and made for
              young skin. Because keeping kids safe matters just as much as
              making them sparkle.
            </p>
            <p
              className={`${pacifico.className} text-pink-400 text-xl sm:text-2xl pt-2`}
            >
              — the look my nails team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
