import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-8">
      {/* Header section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Explore Products
        </p>
        <p className="md:text-lg opacity-70 ">
          Explore our wide range of products and find the perfect one for your
          needs
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {products.map((item, index) => (
          <Card
            key={index}
            className=" rounded-2xl overflow-hidden group bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm cursor-pointer group px-6"
          >
            <CardHeader></CardHeader>
            <CardContent className=" border  overflow-hidden bg-white rounded-xl ">
              <Image
                className="rounded-xl px-6 object-cover group-hover:scale-110 duration-400"
                src={item.img}
                alt=""
                width={500}
                height={500}
              />
            </CardContent>
            <CardFooter>
              <div className="space-y-2">
                <p className="text-sm text-purple-700 ">
                  {item.productType.toLocaleUpperCase()}
                </p>
                <p className="font-semibold tracking-wide text-lg opacity-80 group-hover:translate-x-2 duration-400">
                  {item.productName}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    img: "/productImage/img1.png",
    productType: "Diaper",
    productName: "Diaper",
  },
  {
    img: "/productImage/img7.png",
    productType: "Diaper",
    productName: "XL size",
  },
  {
    img: "/productImage/img3.png",
    productType: "Diaper",
    productName: "Large size",
  },
  {
    img: "/productImage/img18.png",
    productType: "Diaper",
    productName: "Small size",
  },
  {
    img: "/productImage/img4.png",
    productType: "WIPES",
    productName: "Classic Baby Wipes",
  },

  {
    img: "/productImage/img6.png",
    productType: "WIPES",
    productName: "Travel Wipes",
  },
  {
    img: "/productImage/img14.png",
    productType: "WIPES",
    productName: "Anti-Bacterial Wipes",
  },
  {
    img: "/productImage/img12.png",
    productType: "sanitary napkins",
    productName: "Premium Maxi (290mm)",
  },
  {
    img: "/productImage/img8.png",
    productType: "sanitary napkins",
    productName: "Panty Liners (155mm)",
  },
  {
    img: "/productImage/img9.png",
    productType: "sanitary napkins",
    productName: "Panty Liners (180mm)",
  },
  {
    img: "/productImage/img10.png",
    productType: "tissue papers",
    productName: "Party Napkin",
  },
  {
    img: "/productImage/img13.png",
    productType: "tissue papers",
    productName: "Silver Foil",
  },
];
