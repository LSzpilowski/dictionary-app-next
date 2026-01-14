import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { IPhotosProps } from "@/types";

export const Photos: React.FC<IPhotosProps> = ({ photos }) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (photos && photos.length > 0) {
    return (
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Related Images</h3>
          <span className="text-sm text-muted-foreground">
            {current} / {photos.length}
          </span>
        </div>
        <Carousel 
          className="w-full" 
          aria-label="Related images carousel"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {photos.map((photo, index) => {
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                  <div className="relative group">
                    <Link 
                      href={photo.original} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      aria-label={`View full size image ${index + 1}`}
                      className="block"
                    >
                      <Image
                        src={photo.landscape}
                        className="rounded-lg w-full transition-transform hover:scale-105 duration-300"
                        alt={`Related image ${index + 1}`}
                        width={800}
                        height={450}
                        quality={80}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                        loading="lazy"
                      />
                      <div className="image-counter">
                        {index + 1}
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous image" className="hidden sm:flex" />
          <CarouselNext aria-label="Next image" className="hidden sm:flex" />
        </Carousel>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Photos from <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Pexels</a>
        </p>
      </div>
    );
  } else {
    return null;
  }
};
