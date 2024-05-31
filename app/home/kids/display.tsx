import React from "react";
import Image from "next/image";
import display1 from "../../../public/kids1.jpeg";
import display2 from "../../../public/kids2.jpeg";
import display3 from "../../../public/kids3.jpeg";
import display4 from "../../../public/kids4.jpeg";
import display5 from "../../../public/kids5.jpeg";

function Display() {
  return (
    <section className="flex justify-center gap-5  mt-[50px]">
      <div className="relative overflow-hidden -translate-y-10">
        <Image
          className="h-[300px] w-[200px] "
          src={display4}
          width={200}
          content="fit"
          alt="Tiara"
        />
      </div>

      <div className="relative overflow-hidden">
        <Image
          className="h-[300px] w-[200px]"
          src={display2}
          width={200}
          alt="Tiara"
        />
      </div>

      <div className="relative overflow-hidden translate-y-10">
        <Image
          className="h-[300px] w-[200px]"
          src={display3}
          width={200}
          alt="Tiara"
        />
      </div>

      <div className="relative overflow-hidden">
        <Image
          className="h-[300px] w-[200px]"
          src={display5}
          width={200}
          alt="Tiara"
        />
      </div>

      <div className="relative overflow-hidden -translate-y-10">
        <Image
          className="h-[300px] w-[200px]"
          src={display1}
          width={200}
          alt="Tiara"
        />
      </div>
    </section>
  );
}

export default Display;
