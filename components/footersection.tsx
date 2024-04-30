import Link from "next/link";
import React from "react";

interface Props {
  theme: string;
}

function FooterSection(props: Props) {
  return (
    <section className="max-h-screen w-full flex flex-col items-center mt-[200px] pb-[50px]">
      <div
        className={`w-[60%] h-[40vh] flex flex-col justify-evenly items-center rounded-full bg-[${
          props.theme === "light" ? "--primaryTiara" : "--tertiaryHome"
        }] text-[${
          props.theme === "light" ? "--tertiaryHome" : "--primaryTiara"
        }]`}
      >
        <div className="flex flex-col justify-evenly items-center gap-5">
          <h1 className="wellfleet-regular text-4xl font-semibold ">
            Let's Contact Us
          </h1>
          <p className="w-[60%] text-sm text-center text-[--textDarkTiara] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button
          className={`flex gap-2 items-center bg-[${
            props.theme === "light" ? "--backgroundTiara" : "--primaryTiara"
          }] rounded-full px-6 py-3 text-[--secondaryTiara] text-sm `}
        >
          <h3 className="text-md font-semibold">Contact Us</h3>
        </button>
      </div>
      <div className="flex flex-col items-center mt-10 w-[50%] ">
        <h2
          className={`text-[${
            props.theme === "light" ? "--primaryTiara" : "--tertiaryHome"
          }] text-xl font-semibold mb-2`}
        >
          Tiara.
        </h2>
        <ul
          className={`flex justify-around text-[${
            props.theme === "light" ? "--textTiara" : "--textDarkTiara"
          }] items-center text-sm gap-10 mt-2`}
        >
          <li className="cursor-pointer">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/home/men">Men</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/home/women">Women</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/home/kids">Kids</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterSection;
