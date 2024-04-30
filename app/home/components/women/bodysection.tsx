import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import display1 from "../../../../public/women3.jpeg";
import display2 from "../../../../public/women4.jpeg";
import display3 from "../../../../public/women6.jpeg";

function BodySection() {
  return (
    <section className="h-[90vh] w-full flex justify-around items-center px-[100px] mb-[150px]">
      <div className="w-1/2 text-[--tertiaryTiara] flex flex-col gap-10">
        <h1 className=" text-8xl font-semibold ubuntu-medium ">
          We picked up some{" "}
          <span className="text-[--secondaryTiara]">bright cool</span> things
          <span className="flex items-end">
            for you
            <FiArrowDownRight className="text-6xl text-[--secondaryTiara]" />
          </span>
        </h1>
        <p className="text-[--textDarkTiara] text-md w-3/4 leading-loose">
          We have picked up absolutely cool things in briant colors so that you
          can tully enjoy the juicy colors of this summer. Just explore our
          designers's selection!
        </p>

        <div className="flex items-center justify-between w-3/4">
          <p>View all Collections</p>
          <MdArrowRightAlt className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-col justify-center  gap-4">
        <div className="flex gap-4">
          <Image src={display1} width={220} content="fit" alt="Tiara" />
          <Image src={display2} width={220} content="fit" alt="Tiara" />
        </div>
        <div className="flex gap-4">
          <Image src={display3} width={220} content="fit" alt="Tiara" />
          <div className="w-[220px] flex flex-col justify-center items-center text-7xl text-[--secondaryTiara]">
            <MdOutlineKeyboardArrowDown />
            <MdOutlineKeyboardArrowDown />
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySection;
