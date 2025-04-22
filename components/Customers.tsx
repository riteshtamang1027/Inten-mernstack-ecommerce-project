import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Customers() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 bg-pink-100 border-t border-purple-600 space-y-12">
      {/* Header section */}
      <div className="text-center space-y-1  ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Our Happy Customers
        </p>
        <div className="flex items-center  justify-between gap-4">
          <Sparkles className="text-pink-600 w-18" />{" "}
          <p className="md:text-lg opacity-60 ">
            Don't just take our word for it. Here's what our customers have to
            say about us.
          </p>{" "}
          <Sparkles className="text-purple-600 w-18" />
        </div>
      </div>


{/* body section. map customeres  */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
      {customers.map((item, index) => (
        <div
          key={index}
          className="bg-pink-50  p-6 rounded-xl shadow-lg relative"
        >
          <div className="flex items-center mb-4 gap-3">
            <Image
              className="w-12 h-12 object-cover rounded-full"
              src={item.img}
              alt=""
              width={500}
              height={500}
            />
            <div>
              <h3 className="font-semibold text-gray-800">{item.fullName}</h3>
              <p className="text-sm text-pink-500">{item.surname}</p>
            </div>
          </div>
          <p className="text-gray-600">{item.text}</p>
          <div className="absolute text-pink-300 text-4xl font-serif bottom-2 right-4">
            "
          </div>
        </div>
      ))}

      </div>

    </div>
  );
}

const customers = [
  {
    img: "/colors/color1.png",
    fullName: "Rita Bhandari",
    surname: "@rita",
    text: "Great service and fast delivery! I will definitely buy again.",
  },
  {
    img: "/colors/color2.png",
    fullName: "Sarita Sharma",
    surname: "@sarita",
    text: "Despite being in a new distribution line, it has been a rewarding experience working with you",
  },
  {
    img: "/colors/color3.png",
    fullName: "Suman Adhikari",
    surname: "@suman",
    text: "The product quality is amazing! I am very happy with my purchase.",
  },
  {
    img: "/colors/color4.png",
    fullName: "Pooja Thapa",
    surname: "@puja",
    text: "Good quality and reasonable price. Highly recommend!",
  },
  {
    img: "/colors/color5.png",
    fullName: "Bikash Gurung",
    surname: "@bikash",
    text: "I love the product! Thank you for the great customer service.",
  },
  {
    img: "/colors/color6.png",
    fullName: "Anil Karki",
    surname: "@anil",
    text: "Very satisfied with my order. The product is exactly as described.",
  },

];
