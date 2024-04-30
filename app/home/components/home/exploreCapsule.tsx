"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ExploreCapsuleProps {
  image: StaticImageData;
  name: string;
}

function ExploreCapsule(props: ExploreCapsuleProps) {
  //   const [selectedStarCount, setSelectedStarCount] = useState(props.rating);
  //   const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0);

  return (
    <div className="h-[550px] w-[350px] rounded-full flex flex-col items-center justify-center">
      <Image
        className="rounded-full z-10 mt-[40px]"
        src={props.image}
        width={450}
        alt="Tiara"
      />

      <div className="-m-[30px] bg-[--backgroundTiara] p-2 rounded-full z-10">
        <button className=" flex gap-2 items-center bg-[--primaryTiara] rounded-full px-6 py-3 text-[--secondaryTiara] text-sm hover:bg-[--primaryTiara]">
          <h3 className="text-md font-semibold wellfleet-regular">Details</h3>
        </button>
      </div>
    </div>
  );
}

export default ExploreCapsule;
