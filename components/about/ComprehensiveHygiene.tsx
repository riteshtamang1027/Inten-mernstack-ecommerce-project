import { Heart, Leaf, Shield } from "lucide-react";
import React from "react";

export default function ComprehensiveHygiene() {
  return (
            // <div className="flex  items-center justify-center">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 justify-items-center  w-full">
      {/* first div */}
      <div className="lg:w-[26vw] sm:w-[40vw] w-[80vw] h-120 rounded-2xl bg-pink-50 relative">
        <div className="absolute  transform  flex flex-col p-8 items-center  gap-4 justify-center text-center ">
          {/* there is a heart inside this div */}

          <div className="w-16  h-16 ring-6 ring-transparent bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Heart size={28} className="text-pink-400" />
            </div>
          </div>

          {/* text area */}
          <div className=" space-y-2">
            <p className="text-xl font-semibold opacity-90"> Feminine Care</p>
            <p className="opacity-60">
              Our sanitary napkins are designed for maximum comfort and
              protection, using the finest materials for sensitive skin.
            </p>
          </div>
        </div>

        {/* first inside div */}
        <div className="md:w-48 w-32 absolute left-1/2 bottom-24 transform -translate-x-1/2 rounded-t-full md:h-18 h-12 bg-pink-200 "></div>

        {/* second inside dev */}
        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2  bg-pink-100 rounded-t-4xl  lg:w-[calc(26vw-50px)] sm:w-[calc(40vw-50px)] w-[calc(74vw-30px)] h-18 flex items-center justify-center">
          <p className="w-10 h-2 bg-pink-300 rounded-md"></p>
        </div>
      </div>

      {/* second div */}
      <div className="lg:w-[26vw] sm:w-[40vw] w-[80vw] h-120 rounded-2xl bg-blue-50 relative">
        <div className="absolute  transform  flex flex-col p-8 items-center  gap-4 justify-center text-center ">
          {/* there is a heart inside this div */}

          <div className="w-16  h-16 ring-6 ring-transparent bg-gradient-to-r from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Shield size={28} className="text-blue-600" strokeWidth={1.5} />
            </div>
          </div>

          {/* text area */}
          <div className=" space-y-2">
            <p className="text-xl font-semibold opacity-90"> Baby Care</p>
            <p className="opacity-60">
            Our diapers and baby wipes are gentle on baby&#39;s skin while providing superior absorption and cleanliness.
            </p>
          </div>
        </div>

        {/* first inside div */}
        <div className="lg:w-[calc(26vw-50px)] sm:w-[calc(40vw-50px)] w-[calc(80vw-50px)] absolute left-1/2 bottom-12 transform -translate-x-1/2 rounded-2xl h-24 bg-blue-100 flex items-center justify-center ">
          {/* second inside dev */}
          <div className="absolute left-1/2  transform -translate-x-1/2  bg-blue-200 rounded-2xl lg:w-[calc(24vw-50px)] sm:w-[calc(36vw-50px)] w-[calc(70vw-50px)]  h-18 flex items-center justify-center">
            <p className="w-30 h-10 ring ring-blue-300 bg-white rounded-md"></p>
          </div>
        </div>
      </div>



            {/* third div */}
      <div className="lg:w-[26vw] sm:w-[40vw] w-[80vw] h-120 rounded-2xl bg-green-50 relative">
        <div className="absolute  transform  flex flex-col p-8 items-center  gap-4 justify-center text-center">
          {/* there is a heart inside this div */}

          <div className="w-16  h-16 ring-6 ring-transparent bg-gradient-to-r from-green-200 to-purple-100 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Leaf size={28} className="text-green-600" strokeWidth={1.5} />
            </div>
          </div>

          {/* text area */}
          <div className=" space-y-2">
            <p className="text-xl font-semibold opacity-90"> Wet Wipes & Tissues</p>
            <p className="opacity-60">
            Our disposable wet wipes and tissue papers provide convenient cleanliness for all ages and situations.
            </p>
          </div>
        </div>

        {/* first inside div */}
        <div className="lg:w-[calc(26vw-50px)] sm:w-[calc(40vw-50px)] w-[calc(80vw-50px)] absolute left-1/2 bottom-12 transform -translate-x-1/2 rounded-2xl h-32 bg-green-100 flex items-center justify-center ">
          {/* second inside dev */}
          <div className="absolute left-1/2  transform -translate-x-1/2  bg-white rounded-xl lg:w-[calc(22vw-50px)] sm:w-[calc(36vw-50px)] w-[calc(70vw-50px)] border border-green-600  h-18 flex flex-col justify-center items-center gap-2">
            <p className="lg:w-[calc(18vw-50px)] sm:w-[calc(28vw-50px)] w-[calc(60vw-50px)] h-1  bg-green-100 "></p>
            <p className="lg:w-[calc(18vw-50px)] sm:w-[calc(28vw-50px)] w-[calc(60vw-50px)] h-1  bg-green-100 "></p>
            <p className="lg:w-[calc(18vw-50px)] sm:w-[calc(28vw-50px)] w-[calc(60vw-50px)] h-1  bg-green-100 "></p>

          </div>
        </div>
      </div>

    </div>
    // </div>
  );
}
