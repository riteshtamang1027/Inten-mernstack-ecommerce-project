import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function DealerLocatorPage() {
  return (
    <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-10">
      {/* Header section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Find Our Nearest Dealers
        </p>
        <p className="md:text-lg opacity-70 ">
          Find our nearest dealer locations and get in touch with them for any
          queries
        </p>
      </div>

      <div className="bg-pink-100 w-full gap-8 border rounded-2xl border-purple-600 ">
        <div className="flex items-center gap-4 p-4">
          <Select>
            <SelectTrigger className="w-[180px] bg-white border-3 border-purple-300">
              <SelectValue placeholder="Sort by Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sort by Name</SelectItem>
              <SelectItem value="dark">Sort by Address</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant={"secondary"}
            className=" cursor-pointer hover:bg-orange-100 duration-300"
          >
            Reset
          </Button>
        </div>
        <div className="flex flex-col md:flex-row  w-full gap-6 p-4">
          <div className="md:w-1/3 w-full">
          <div className="space-y-4">
          {items.map((item , index )=>(
             <div key={index} className=" w-full  bg-white border rounded-lg px-4 py-2 ">
             <p className=" text-sm font-semibold">{item.address} </p>
             <p className="text-xs">{item.suraddress} </p>
           </div>
           ))}
          </div>
          </div>
          <div className="md:w-2/3 w-full border overflow-hidden h-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28257.82901472817!2d85.27873122074737!3d27.710226469918542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1745311324890!5m2!1sen!2snp"
              width="1000"
              height="340"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


const items =[
  {
    address:"Shifa Suppliers",
    suraddress:"Aabukhaireni",
  },
  {
    address:"Shifa Suppliers",
    suraddress:"Aabukhaireni",
  },
  {
    address:"Shifa Suppliers",
    suraddress:"Aabukhaireni",
  },
  {
    address:"Shifa Suppliers",
    suraddress:"Aabukhaireni",
  },
  {
    address:"Shifa Suppliers",
    suraddress:"Aabukhaireni",
  },
 

]
