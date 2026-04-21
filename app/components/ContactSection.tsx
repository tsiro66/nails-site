import { Lilita_One, Pacifico } from "next/font/google";

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 py-16 md:py-24 scroll-mt-20 md:scroll-mt-24"
    >
      {/* Blobs */}
      <div className="hero-blob hero-blob-contact-1" />
      <div className="hero-blob hero-blob-contact-2" />

      {/* Sparkles */}
      <div className="sparkle sparkle-contact-1">✦</div>
      <div className="sparkle sparkle-contact-2">⋆</div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2
            className={`${lilitaOne.className} text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3`}
          >
            Get in{" "}
            <span className={`${pacifico.className} text-pink-400`}>
              touch
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto">
            Questions, party ideas, or ready to book? We'd love to hear from
            you.
          </p>
        </div>

        <form className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-sm space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className={`${lilitaOne.className} block text-gray-700 text-sm mb-2`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-pink-100 text-gray-700 placeholder-gray-300 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`${lilitaOne.className} block text-gray-700 text-sm mb-2`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-pink-100 text-gray-700 placeholder-gray-300 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className={`${lilitaOne.className} block text-gray-700 text-sm mb-2`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Party booking, question, etc."
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-pink-100 text-gray-700 placeholder-gray-300 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`${lilitaOne.className} block text-gray-700 text-sm mb-2`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your party plans..."
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-pink-100 text-gray-700 placeholder-gray-300 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-pink-400 hover:bg-pink-500 text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send Message ✨
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
