"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

type HeroCarouselProps = {
  group?: "one" | "two" | "three";
};

const imageGroups = {
  one: [
    "/gallery/litoPics2.jpeg",
    "/gallery/litoPics4.jpg",
    "/astraWalking.jpeg",
    "/EllieLunaGrass.jpeg",
  ],

  two: [
    "/capLilyMooseBench.jpeg",
    "/EllieUp.jpeg",
    "/KumaGrassLay.jpeg",
    "/EllieWalk.jpeg",
  ],

  three: [
    "/niko.jpeg",
    "/murphyAndCarmelo.JPEG",
    "/mooseOnTop.jpeg",
    "/moreAstraFar.jpeg",
  ],
};

export default function HeroCarousel({
  group = "one",
}: HeroCarouselProps) {
  const images = imageGroups[group];

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
            className="relative aspect-[4/5] min-w-0 flex-[0_0_100%]"
          >
            <Image
              src={image}
              alt="Happy dog"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}