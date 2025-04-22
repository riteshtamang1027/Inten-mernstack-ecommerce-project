import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-8">
      {/* Header section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Get in touch with us
        </p>
        <p className="md:text-lg opacity-70 ">
          We are here to help you with any questions or concerns you may have.
        </p>
      </div>

      <div className=" rounded-2xl w-full  bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm   px-6 py-4">
        <div className="bg-white w-full px-6 py-4 rounded-2xl space-y-6">
          <p className="bg-gradient-to-t  from-purple-700 to-pink-700 text-transparent bg-clip-text font-semibold text-lg">
            Contact Us
          </p>

          <div className="space-y-2">
            <p className="md:text-2xl text-xl font-semibold opacity-90">
              Let us know how{" "}
              <span className="bg-gradient-to-r  from-purple-600 to-pink-500 text-transparent bg-clip-text">
                we can help
              </span>{" "}
            </p>
            <p className="opacity-60 max-md:text-sm tracking-wide">
              SOFTY HYGIENE PVT.LTD. is one of the largest private level
              manufacturing of disposable wet wipes, Baby wipes ,Baby Diaper,
              Sanitary Napkins and Tissue papers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-16">
            {items.map((item, index) => (
              <div key={index} className="space-y-4">
                <p className="text-xl font-semibold opacity-80">{item.title}</p>
                <div className="flex items-center gap-2 ">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-1">
                    <item.icon className="text-white cursor-pointer" size={18} />
                  </div>
                  <p className="opacity-70 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600 transition-all duration-300 hover:from-purple-600 hover:to-pink-700 cursor-pointer">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full border overflow-hidden h-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28257.82901472817!2d85.27873122074737!3d27.710226469918542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1745311324890!5m2!1sen!2snp"
              width="1280"
              height="300"
              loading="lazy"
            ></iframe>
          </div>

          
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Our office",
    icon: MapPin,
    text: "Nagaarjun, Kathmandu, Nepal (NP).",
  },
  {
    title: "Email",
    icon: Mail,
    text: "riteshlama@gmail.com",
  },
  {
    title: "Phone",
    icon: Phone,
    text: "+01-5191390",
  },
];
