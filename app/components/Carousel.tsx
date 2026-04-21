"use client";

import Image from "next/image";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

// Inline rotation + offset for organic scattered feel
const TRANSFORMS = [
  { rotate: -6, y: 4 },
  { rotate: 3, y: -2 },
  { rotate: -2, y: 6 },
  { rotate: 5, y: -4 },
  { rotate: -4, y: 2 },
  { rotate: 1, y: -6 },
  { rotate: -3, y: 0 },
  { rotate: 6, y: -2 },
  { rotate: -1, y: 4 },
  { rotate: 4, y: -4 },
];

export default function Carousel({ images }: CarouselProps) {
  if (images.length === 0) return null;

  return (
    <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-5 sm:gap-8 py-8 px-2 sm:px-4 snap-x snap-mandatory md:snap-none scrollbar-hide">
      {images.map((img, idx) => {
        const t = TRANSFORMS[idx % TRANSFORMS.length];
        return (
          <div
            key={idx}
            className="relative w-36 sm:w-48 md:w-56 shrink-0 md:shrink snap-center hover:!rotate-0 hover:!translate-y-0 hover:scale-110 hover:z-10 transition-all duration-300 ease-out"
            style={{
              transform: `rotate(${t.rotate}deg) translateY(${t.y}px)`,
            }}
          >
            <div className="bg-white rounded-sm p-1.5 sm:p-2 pb-6 sm:pb-8 shadow-[2px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[4px_8px_24px_rgba(0,0,0,0.2)] transition-shadow duration-300">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
                  priority={idx < 4}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
