const SERVICES = [
  {
    title: "Nails",
    description:
      "From glitter tips to tiny hand-painted flowers, our nail art is made for little hands. Pick fun colors, mix and match, or go full sparkle. Safe, kid-friendly polishes only.",
  },
  {
    title: "Spa",
    description:
      "Mini facials, cucumber eyes, and warm towel wraps. A real spa experience scaled down for kids. They leave glowing, relaxed, and feeling like royalty.",
  },
  {
    title: "Chocolate Face Therapy",
    description:
      "A gentle, cocoa-based face mask that smells as good as it feels. Hydrates young skin while they giggle through the whole thing. Sweet, safe, and totally indulgent.",
  },
  {
    title: "Makeup",
    description:
      "Age-appropriate, washable glam. Think shimmery eyeshadow, lip gloss, and a touch of blush. Perfect for making them feel grown-up without going overboard.",
  },
];

interface ServicesListProps {
  fontClass: string;
}

export default function ServicesList({ fontClass }: ServicesListProps) {
  return (
    <div id="services" className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left scroll-mt-24">
      {SERVICES.map((service) => (
        <div
          key={service.title}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className={`${fontClass} text-2xl md:text-3xl text-pink-400 mb-3`}>
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
