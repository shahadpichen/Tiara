import React from "react";
import Image from "next/image";
import homePic from "../../../../public/home.jpeg";
import { LuMouse } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Body() {
  return (
    <section className="relative h-[90vh] w-full flex items-center px-[100px]">
      <div className="w-[80%] text-[--primaryTiara] z-10">
        <h1 className="text-9xl font-semibold ubuntu-medium">
          Find the <br></br> best <span className="text-stroke">clothing.</span>
        </h1>
        <p className="text-[--textTiara] text-sm w-[60%] my-10">
          Elevate your style with our diverse collection of high-quality
          clothing, crafted to inspire confidence and accentuate your
          individuality. Explore now!
        </p>
        <button className="bg-[--primaryTiara] rounded-full px-4 py-3 text-[--secondaryTiara] hover:bg-[--primaryTiara]">
          Shop Now
        </button>
      </div>
      <div className="absolute left-[50%] z-0 top-[5%] flex">
        <Image
          className="rounded-full z-10 mt-[40px]"
          src={homePic}
          width={450}
          alt="Tiara"
        />
        <div className="absolute ml-[100px] flex items-center justify-end w-[500px] h-[650px] rounded-full bg-[--primaryHome] text-[--secondaryTiara]">
          <div className="transform -rotate-90 flex flex-col items-center gap-5">
            <div className="flex justify-between w-[200px] mt-[50px]">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[30%] flex flex-col items-center top-[85%] gap-1 text-[--textDarkTiara]">
        <LuMouse className="text-4xl" />
        <p className="text-xs">scroll down</p>
      </div>
    </section>
  );
}

export default Body;
