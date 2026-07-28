"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const images = [
  "/gallery/litoPics1.jpeg",
  "/gallery/litoPics2.jpeg",
  "/gallery/litoPics3.jpeg",
  "/gallery/litoPics4.jpg",
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div
      className="overflow-hidden rounded-[32px] shadow-xl"
      ref={emblaRef}
    >
      <div className="flex">
        {images.map((image) => (
          <div
            key={image}
            className="relative min-w-0 flex-[0_0_100%] aspect-[4/5]"
          >
            <Image
              src={image}
              alt="Happy dog"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}