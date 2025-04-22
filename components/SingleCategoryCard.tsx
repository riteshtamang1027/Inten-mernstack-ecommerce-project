import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SingleCategoryCard() {
  return (
    <Carousel
    className="w-full"
    opts={{
      align: "start",
    }}
  >
    <CarouselContent className="-ml-1  ">
     
     {/* Map the categories */}
      {categories.map((item, index) => (
        <CarouselItem key={index} className="pl-1 sm:basis-1/2  lg:basis-1/3 xl:basis-1/4">
          <div className="p-4 flex items-center justify-center">
            <Card className="max-w-xs rounded-2xl overflow-hidden group bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm cursor-pointer">
              <CardContent className=" space-y-4  h-88   relative p-4  ">
                <div className="  w-full border bg-white  overflow-hidden rounded-xl ">
                  <Image
                    className="rounded-xl w-88 group-hover:scale-110 duration-400 cursor-pointer  h-62 object-cover  top-4  "
                    src={item.image}
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-lg font-semibold opacity-90 group-hover:translate-x-2 duration-400">{item.name} </p>
                  <p className="flex items-center group-hover:text-purple-500 duration-400 gap-1">
                    View Category <ArrowRight className=" group-hover:translate-x-1 mt-1 duration-400" size={16} strokeWidth={1.5} />
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}


    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}


const categories = [
    {
      image: "/categoryImage/img1.png",
      name: "Sanitary Napkins",
    },
  
    {
      image: "/categoryImage/img2.png",
      name: "Wipes",
    },
  
    {
      image: "/categoryImage/img3.png",
      name: "Tissue Papers",
    },
  
    {
      image: "/categoryImage/img4.png",
      name: "Diaper",
    },
  
  
  ];