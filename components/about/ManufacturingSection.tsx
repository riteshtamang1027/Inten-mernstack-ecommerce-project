import { CircleCheckBig, Factory, Leaf } from 'lucide-react';
import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";

export default function ManufacturingSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-md  hover:shadow-lg duration-500 shadow-sm ${item.bgColor} border border-gray-100 flex items-center justify-center flex-col gap-4`}
          >
            <div
              className={`w-12 h-12 rounded-full bg-white flex items-center justify-center `}
            >
              <item.icon className={`w-6 h-6 ${item.iconColor}`} />
            </div >
            <div className='space-y-1 text-center '>
            <p className="text-xl hover:text-purple-700 font-semibold text-gray-800 mb-2">
              {item.title}
            </p>
            <p className="text-gray-600 ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
  )
}

const items = [
    {
      icon: Factory, 
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      title: "Advanced Facilities",
      description:
        "Our manufacturing plants use cutting-edge technology to ensure precision and efficiency.",
    },
    {
      icon: CircleCheckBig,
      iconbgColor: "bg-green-100",
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
      title: "Quality Control",
      description:
        "Rigorous testing at every stage ensures our products meet the highest safety standards.",
    },
    {
      icon: Leaf,
      
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      title: "Eco-Friendly",
      description:
        "We are committed to sustainable practices and environmentally responsible manufacturing.",
    },
    {
      icon: LiaCertificateSolid,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      title: "Certified",
      description:
        "Our products meet international quality and safety certifications for your peace of mind.",
    },
    
  ];
