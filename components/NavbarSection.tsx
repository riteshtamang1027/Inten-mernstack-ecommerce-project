import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

export default function NavbarSection() {
  return (
    <div className=" sticky top-0 z-40">
      <div className="relative">
        <div className="">
          <Image
            className="w-[100vw] h-18 object-cover "
            src={"/colors/color1.png"}
            alt=""
            width={1000}
            height={1000}
          />
        </div>

        <div className="flex absolute top-0 h-18 items-center justify-between px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24  py-4 gap-4 ">
          {/* left*/}
          <div className="lg:w-1/6 w-full   flex items-center justify-between gap-4 ">
           <Link href={"/"}> <Image
              className="w-12 h-12 object-cover"
              src={"/logo.png"}
              alt=""
              width={500}
              height={500}
            /></Link>
            <Image
              className="w-20  h-12  object-cover "
              src={"/logo2.png"}
              alt=""
              width={500}
              height={500}
            />
          </div>

          {/* center */}
          <div className="xl:w-1/2 hidden  lg:flex items-center justify-between text-white text-lg whitespace-nowrap gap-8">
            <Link
              href="/"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Home
            </Link>
            <Link
              href={"/category"}
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Categories
            </Link>
            <Link
              href={"/product"}
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Products
            </Link>
            <Link
              href={"/dealerLocator"}
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Dealer Locator
            </Link>
            <Link
              href={"/about"}
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Contact
            </Link>
          </div>

          {/* left */}
          <div className="xl:w-1/6 hidden lg:flex items-center justify-between gap-4 ">
            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={"/mediaIcons/facebook.png"}
              alt=""
              width={500}
              height={500}
            />

            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={"/mediaIcons/instagram.png"}
              alt=""
              width={500}
              height={500}
            />

            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={"/mediaIcons/messenger.png"}
              alt=""
              width={500}
              height={500}
            />

            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={"/mediaIcons/whatsapp.png"}
              alt=""
              width={500}
              height={500}
            />
            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={"/mediaIcons/map.png"}
              alt=""
              width={500}
              height={500}
            />
          </div>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
