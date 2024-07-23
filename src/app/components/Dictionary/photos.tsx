import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface IPhoto {
  original: string;
  landscape: string;
}

interface IPhotosProps {
  photos: IPhoto[];
}

export const Photos: React.FC<IPhotosProps> = ({ photos }) => {
  if (photos && photos.length > 0) {
    return (
      <Carousel className="w-full my-5">
        <CarouselContent>
          {photos.map((photo, index) => {
            return (
              <CarouselItem className="md:basis-1/2" key={index}>
                <Link href={photo.original} target="_blank" rel="noreferrer">
                  <Image
                    src={photo.landscape}
                    className="rounded-lg w-full"
                    alt={`Image ${index + 1}`}
                    width={800}
                    height={450}
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
