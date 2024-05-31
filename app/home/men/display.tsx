import React from "react";
import Image from "next/image";
import display1 from "../../../public/displaymen1.jpeg";
import display2 from "../../../public/displaymen2.jpeg";
import display3 from "../../../public/displaymen3.jpeg";

function Display() {
  return (
    <section className="flex justify-center gap-5 mb-[200px] mt-[50px]">
      <div className="relative overflow-hidden">
        <Image src={display1} width={400} content="fit" alt="Tiara" />
        <div>
          <div className="absolute inset-0 bg-black opacity-30 "></div>
          <p className="absolute z-10 inset-0 flex p-4 justify-end text-[--secondaryTiara] opacity-85 text-2xl">
            $169
          </p>
          <p className="absolute z-10 inset-0 flex p-4 items-end justify-start text-[--secondaryTiara] opacity-95 text-2xl">
            Silver Sophistication
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image
          className="h-[600px] w-[300px]"
          src={display2}
          width={400}
          alt="Tiara"
        />
        <div>
          <div className="absolute inset-0 bg-black opacity-30 "></div>
          <p className="absolute z-10 inset-0 flex p-4 justify-end text-[--secondaryTiara] opacity-85 text-2xl">
            $129
          </p>
          <p className="absolute z-10 inset-0 flex p-4 items-end justify-start text-[--secondaryTiara] opacity-95 text-2xl">
            Scarlet Elegance
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image
          className="h-[600px] w-[300px]"
          src={display3}
          width={400}
          alt="Tiara"
        />
        <div>
          <div className="absolute inset-0 bg-black opacity-30 "></div>
          <p className="absolute z-10 inset-0 flex p-4 justify-end text-[--secondaryTiara] opacity-85 text-2xl">
            $99
          </p>
          <p className="absolute z-10 inset-0 flex p-4 items-end justify-start text-[--secondaryTiara] opacity-95 text-2xl">
            Ashen Comfort
          </p>
        </div>
      </div>
    </section>
  );
}

export default Display;
