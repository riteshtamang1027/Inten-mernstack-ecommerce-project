import React from "react";
import { Award, Droplet, Flag, Phone, Target, Truck } from "lucide-react";

export default function DiscoverSection() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-12 bg-slate-100 border-t border-purple-600 ">
     
      {/* header section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Discover the Softy Hygiene Advantage
        </p>
        <p className="md:text-lg opacity-60 ">
          Delivering innovative and high-quality hygiene solutions for every
          home and business.
        </p>
      </div>

      {/* body section with a map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-md  hover:shadow-lg duration-500 shadow-sm ${item.bgColor} border border-gray-100`}
          >
            <div
              className={`w-12 h-12 rounded-lg ${item.iconbgColor} flex items-center justify-center mb-4`}
            >
              <item.icon className={`w-6 h-6 ${item.iconColor}`} />
            </div>
            <h3 className="text-xl hover:text-purple-700 font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    icon: Droplet,
    iconbgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    title: "Innovative Hygiene Solutions",
    description:
      "Providing a diverse range of premium hygiene products, including wet wipes, tissues, and personal care items.",
  },
  {
    icon: Award,
    iconbgColor: "bg-green-100",
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
    title: "Uncompromising Quality",
    description:
      "Ensuring the highest standards in product quality to meet the hygiene needs of families and businesses.",
  },
  {
    icon: Truck,
    iconbgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    title: "Nationwide Distribution",
    description:
      "Efficient and reliable delivery services that ensure timely availability of hygiene products across Nepal.",
  },
  {
    icon: Flag,
    iconbgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    title: "Proudly Made in Nepal",
    description:
      "Softy Hygiene is a locally established brand, offering innovative and accessible hygiene products to every household.",
  },
  {
    icon: Phone,
    iconbgColor: "bg-pink-100",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
    title: "Dedicated Customer Support",
    description:
      "Reach us at +01-5191390 or softy.corporate@gmail.com for queries and feedback. Located in Maitighar, Kathmandu.",
  },
  {
    icon: Target,
    iconbgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
    title: "Committed to Growth",
    description:
      "Focused on enhancing customer satisfaction while expanding into new markets and setting industry benchmarks.",
  },
];
