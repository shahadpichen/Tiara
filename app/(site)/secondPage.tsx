import React from "react";
import Marquee from "@/components/Marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { IoShirtOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";

function SecondPage() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex items-center justify-center bg-[--secondaryHome] text-[--primaryHome]">
      <div className="w-1/4 flex flex-col gap-2">
        <h1 className="text-7xl underline underline-offset-8">
          service that we provide
        </h1>
      </div>
      <div className="w-2/4">
        {/* <div className="absolute top-[20%] bottom-0 left-[25%] h-[100px] w-[100px] rounded-full bg-[--primaryHome]"></div>
        <div className="absolute top-[15%] bottom-0 border border-4 left-[20%] h-[100px] w-[100px] rounded-full bg-[--secondaryHome]"></div> */}

        <div className="flex gap-11">
          <IoShirtOutline className="mt-1 text-2xl" />
          <div>
            <h2 className="text-2xl mb-1">Custome Product</h2>
            <p className="text-sm opacity-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
              animi magni. Voluptatibus et saepe impedit id officia voluptate
            </p>
          </div>
        </div>
        <Separator className="my-7 opacity-20" />
        <div className="flex gap-10">
          <CiDeliveryTruck className="mt-1 text-3xl" />
          <div>
            <h2 className="text-2xl mb-1">Fast Delivery</h2>
            <p className="text-sm opacity-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
              animi magni. Voluptatibus et saepe impedit id officia voluptate
            </p>
          </div>
        </div>
        <Separator className="my-7 opacity-20" />
        <div className="flex gap-10">
          <MdOutlinePayments className="mt-1 text-2xl" />
          <div>
            <h2 className="text-2xl mb-1">Payment Method</h2>
            <p className="text-sm opacity-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
              animi magni. Voluptatibus et saepe impedit id officia voluptate
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[10%]  left-[48%] h-[30px] w-[10px] rounded-full bg-[--primaryHome]"></div>
      <div className="absolute bottom-[10%]  left-[50%] h-[30px] w-[10px] rounded-full bg-[--primaryHome]"></div>
      <div className="absolute bottom-[5%]  border border-2 left-[49%] h-[40px] w-[10px] rounded-full bg-[--secondaryHome]"></div>
      <div className="absolute bottom-[10%]  left-[52%] h-[40px] w-[10px] rounded-full bg-[--primaryHome]"></div>
      <div className="absolute bottom-[7%]  border border-2 left-[51%] h-[30px] w-[10px] rounded-full bg-[--secondaryHome]"></div>

      <div className="absolute bottom-0 right-5 h-2/6 flex p-10">
        <div className="mt-auto w-full flex gap-10">
          <p className="border border-[--parimaryHome] px-3 rounded-full text-sm">
            Men
          </p>
          <p className="border border-[--parimaryHome] px-3 rounded-full text-sm">
            Women
          </p>
          <p className="border border-[--parimaryHome] px-3 rounded-full text-sm">
            Kids
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-20 h-2/6 flex p-10">
        <div className="mt-auto w-1/2 flex justify-end">
          <p className="text-xs opacity-85 underline underline-offset-8">
            pichenshahad@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondPage;
