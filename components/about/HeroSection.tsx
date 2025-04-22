import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full bg-pink-50 rounded-2xl flex flex-col lg:flex-row items-center sm:gap-16 gap-4 p-4 ">
      {/* left side */}
      <div className=" bg-gradient-to-t w-full  from-pink-100 h-full to-sky-100 p-8  rounded-2xl flex items-center justify-center">
        <div className=" lg:w-90 rounded-2xl max-sm:h-90 overflow-hidden cursor-pointer">
          <Image
            className=" w-full h-140 object-cover rounded-2xl hover:scale-110 duration-300"
            src={"/heroImage/CR7.jpg"}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="space-y-8 p-8 relative  ">
      <Quote strokeWidth={1.5} className="absolute text-pink-200 top-0 -lg:left-4 left-1  bg-transparent " size={58} />
       
       <p className="font-semibold tracking-wide  bg-gradient-to-br from-purple-700 to-pink-700 text-transparent bg-clip-text text-lg  ">
          Hear from our chairperson
        </p>
       


            {/* paragraph section */}
        <div >
          <p className="border-b pb-12 max-sm:text-sm">
            At Softy Hygiene, our purpose goes beyond producing hygiene
            products—we strive to enrich lives through care, comfort, and trust.
            For over a decade, our journey has been driven by one simple vision:
            to make hygiene a reliable companion in every individual&#39;s life.
            Hygiene, to us, is not just about cleanliness; it is about dignity,
            well-being, and empowerment. From supporting women during their most
            sensitive days to caring for the needs of infants, we are proud to
            deliver products that meet real needs with compassion and quality.
            <br />
            <br />
            As we continue to grow, we remain deeply grateful for the faith
            placed in us by our customers, partners, and communities. Their
            support inspires us to innovate responsibly and act with integrity.
            Our commitment extends beyond business—we actively invest in
            improving hygiene awareness and contributing to healthier, more
            resilient societies.
            <br />
            <br />
            Looking forward, Softy is preparing to explore new
            frontiers—expanding our product offerings while staying rooted in
            what matters most: care, reliability, and a human touch. We are
            excited about the future, and we invite you to be a part of our
            journey.
          </p>
        </div>

        <div className="flex items-center gap-4">
            <div className="bg-gradient-to-t to-blue-700 from-pink-600 w-18 h-18 rounded-full flex items-center justify-center p-2">
                <p className="text-3xl font-bold text-white">
                    RT
                </p>

            </div>

            <div>
                <p className="text-xl font-bold bg-gradient-to-r  from-purple-600 to-pink-500 text-transparent bg-clip-text">Ritesh Tamang</p>
                <p className="opacity-60 tracking-wide">Chairman & CEO</p>
            </div>
        </div>


      </div>
    </div>
  );
}
