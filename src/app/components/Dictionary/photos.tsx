import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export const Photos = (props) => {
  if (props.photos) {
    return (
      <Carousel className="w-full my-5">
        <CarouselContent>
          {props.photos.map((photo, index) => {
            return (
              <CarouselItem className=" md:basis-1/2" key={index}>
                <Link
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={photo.src.landscape}
                    className="rounded-lg w-full"
                    alt="image"
                    width={100}
                    height={50}
                    quality={100}
                  />
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  } else {
    return null;
  }
};
