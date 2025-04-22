import React from "react";
import SingleCategoryCard from "./SingleCategoryCard";



export default function Category() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-8">
      {/* Header section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Explore Our Categories
        </p>
        <p className="md:text-lg opacity-70 ">
          Discover the wide range of products we offer for your personal and
          professional hygiene needs.
        </p>
      </div>

      {/* Categories section */}

    <SingleCategoryCard/>

    </div>
  );
}


