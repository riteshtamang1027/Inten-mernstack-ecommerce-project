import HeroSection from "@/components/about/HeroSection";
import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutPage() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-16">
      {/* This is about  */}
      <div className="flex flex-col items-center gap-8">
        <Button className="rounded-4xl py-6 px-8 font-bold sm:text-lg bg-gradient-to-t from-purple-700 to-pink-700  ">
          About Us
        </Button>

        <div className=" bg-gradient-to-r from-pink-50 to-purple-50 md:px-12 px-8 py-4 md:py-8 rounded-xl">
          <p className="sm:text-lg text-sm  font-semibold opacity-80 tracking-wide">
            At Softy Hygiene, we believe that care begins with comfort,
            cleanliness, and trust. As one of Nepal&#39;s largest private-label
            manufacturers of personal hygiene products—including baby wipes,
            diapers, sanitary napkins, and tissues—we are committed to creating
            reliable, high-quality essentials for women and babies.
          </p>
        </div>
      </div>

      {/* This is why softy */}
      <div className="flex flex-col items-center gap-8">
        <Button className="rounded-4xl py-6 px-8 font-bold sm:text-lg bg-gradient-to-r from-blue-700 to-purple-700 w-max  ">
          Why softy
        </Button>

        <div className=" bg-gradient-to-r from-blue-50 to-purple-50 md:px-12 px-8 py-4 md:py-8 rounded-xl">
          <p className="sm:text-lg text-sm font-semibold opacity-80 tracking-wide">
            At Softy Hygiene, we With a focus on innovation, affordability, and
            well-being, our products are thoughtfully designed to support
            safety, hygiene, and everyday confidence. Whether it&#39;s a mother
            caring for her child or a woman navigating her day, Softy is here
            every step of the way—because hygiene isn&#39;t just a product, it&#39;s a
            promise.
          </p>
        </div>
        
      </div>
      <HeroSection/>

      {/* body  Header section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
        <p className="bg-gradient-to-t  from-purple-700 to-pink-700 text-transparent bg-clip-text font-semibold text-lg">
          Our Products
        </p>
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Comprehensive Hygiene Solutions
        </p>
        <p className="md:text-lg opacity-70 ">
          We specialize in manufacturing a wide range of hygiene products
          designed with care and precision for ultimate comfort and protection.
        </p>
      </div>
    </div>
  );
}
