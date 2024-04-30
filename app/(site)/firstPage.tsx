import React from "react";
import Image from "next/image";
import logo from "../../public/Tiara.png";
import homePic from "../../public/homepage2.jpeg";
import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowUpLeft,
  FiArrowUpRight,
} from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

async function FirstPage() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/home");
  }
  return (
    <section className="flex min-h-screen flex items-center justify-between ">
      <section className="w-1/3 h-screen bg-[--primaryHome] text-[--textdarkHome] overflow-hidden">
        <div className="h-1/6  flex justify-between p-10 ">
          <h3 className="text-sm underline underline-offset-8">TIARA.</h3>
          <h3 className="text-sm opacity-85">2024</h3>
        </div>
        <div className="h-3/6 p-10 flex justify-between">
          <div className="w-1/2">
            <Image src={logo} width={120} height={80} alt="Tiara" />
            <h3 className="text-lg underline underline-offset-8 pl-2">
              tiara.shop
            </h3>
          </div>
          <div className="absolute top-[15%] bottom-0 left-[29%] h-[120px] w-[120px] rounded-full bg-[--secondaryHome]"></div>

          {/* <div className="absolute top-[55%] bottom-0 left-[-2%] h-[120px] w-[120px] rounded-custom2 bg-[--secondaryHome]"></div> */}
        </div>
        <div className="h-2/6 flex justify-between p-10">
          <div className="mt-auto w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl">Tiara.</h2>
            <p className="text-xs">
              Highlight any ongoing promotions, discounts, or seasonal sales to
              encourage visitors to make a purchase.
            </p>
          </div>
          <div className="mt-auto w-1/2 flex justify-end">
            <p className="text-xs opacity-85 underline underline-offset-8">
              pichenshahad@gmail.com
            </p>
          </div>
        </div>
      </section>
      <section className="w-1/3 h-screen bg-[--tertiaryHome] flex justify-center items-center overflow-hidden z-10">
        <Image
          src={homePic}
          layout="responsive"
          objectFit="cover"
          alt="Tiara"
        />

        <div className="top-[80%] bottom-0 absolute top-[60%] bottom-0 absolute z-10 text-2xl">
          {/* <p className="border text-center border-[--primaryHome] bg-[--primaryHome] text-[--textdarkHome] px-4 py-1 rounded-full text-sm mb-2 cursor-pointer">
          <Link href="/auth-server-action">Login</Link>
        </p> */}
          <div className="flex text-[--secondaryHome] justify-between">
            <FiArrowDownRight />
            {/* <FiArrowDown /> */}
            <FiArrowDownLeft />
          </div>
          <div className="flex items-center">
            {/* <FiArrowRight /> */}
            <p className="border text-center border-[--secondaryHome] bg-[--secondaryHome] text-[--primaryHome]  px-4 py-1 rounded-full text-sm cursor-pointer my-2 mx-3">
              <Link href="/auth-server-action">Explore Now</Link>
            </p>
            {/* <FiArrowLeft /> */}
          </div>
          <div className="flex text-[--secondaryHome] justify-between">
            <FiArrowUpRight />
            {/* <FiArrowUp /> */}
            <FiArrowUpLeft />
          </div>
        </div>
        <div
          className="bottom-0
        top-[0%]
       bg-[--tertiaryHome]
       opacity-15
        left-[33.333%]
        right-[33.333%]
        absolute
        z-5"
        ></div>
        <div
          className="bottom-0
          top-[50%]
          bg-gradient-to-t
          dark:from-background
          left-[33.333%]
        right-[33.333%]
          absolute
          z-5
        "
        ></div>
      </section>
      <section className="w-1/3 h-screen bg-[--secondaryHome] text-[--primaryHome]">
        <div className="h-1/6  flex justify-between p-10 ">
          <h3 className="text-sm flex items-start gap-1">
            <HiOutlineShoppingBag className="mt-[2px]" />
            Order Shop.
          </h3>
          <h3 className="text-sm opacity-85 underline underline-offset-8">
            MENU
          </h3>
        </div>
        <div className="h-3/6 p-10">
          <h3 className="text-7xl underline underline-offset-8">
            all the clothing
            <span className="flex">
              you need
              <FiArrowDownRight />
            </span>
          </h3>
          <div className="absolute top-[60%] bottom-0 right-[30%] h-[120px] w-[120px] rounded-full bg-[--primaryHome]"></div>
        </div>
        <div className="h-2/6 flex p-10">
          <div className="mt-auto w-full flex justify-around">
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
      </section>
    </section>
  );
}

export default FirstPage;
