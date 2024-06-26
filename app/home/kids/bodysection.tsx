import React from "react";
import { Sacramento } from "next/font/google";
import Image from "next/image";
import circle from "../../../public/circle.png";
import Display from "./display";

const sacramento = Sacramento({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

function BodySection() {
  return (
    <section className="min-h-[90vh] w-full flex flex-col justify-around items-center px-[100px] mb-[150px] mt-[100px]">
      <div className="top-[20vh] text-[--tertiaryTiara] flex flex-col gap-10">
        <h1
          className={`text-9xl font-semibold text-center relative ${sacramento.className}`}
        >
          <span className="relative z-20">
            Top Notch Collection <br></br> Only for{" "}
          </span>
          <span className="relative ml-[5%] z-10 text-[--secondaryTiara]">
            kids
          </span>
          <Image
            className="absolute left-[44%] top-[20%] z-0"
            src={circle}
            width={500}
            alt="Tiara"
          />
        </h1>
      </div>
      <Display />
    </section>
  );
}

export default BodySection;
