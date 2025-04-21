"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % Images.length);
  //   }, 3000); // autoplay every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Carousel>
      <CarouselContent
      // style={{
      //   transform: `translateX(-${current * 100}%)`,
      //   transition: "transform 0.6s ease-in-out",
      //   display: "flex",
      // }}
      >
        {Images.map((item, index) => (
          <CarouselItem key={index} className="w-full ">
            <div className="">
              <Card className="rounded-none">
                <CardContent className="flex lg:h-[80vh] md:h-88 items-center justify-center">
                  <Image
                    className="w-full h-full object-cover
                     "
                    src={item.img}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const Images = [
  {
    img: "/heroImage/img1.png",
  },
  {
    img: "/heroImage/img2.png",
  },
  {
    img: "/heroImage/img3.png",
  },
];
