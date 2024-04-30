import React from "react";
import SignOut from "./signout";
import Link from "next/link";
import Cart from "./Cart";
import Profile from "./Profile";

interface PropsNavBar {
  theme: string;
}

function NavBar(props: PropsNavBar) {
  return (
    <header className="flex justify-between w-full pt-5 items-center px-10 h-[10vh]">
      <div
        className={`text-[${
          props.theme === "light" ? "--primaryTiara" : "--secondaryTiara"
        }] text-lg font-semibold w-7/12`}
      >
        Tiara.
      </div>
      <ul
        className={`flex justify-around text-[${
          props.theme === "light" ? "--primaryTiara" : "--secondaryTiara"
        }] items-center text-sm w-5/12`}
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
        <li className="cursor-pointer">
          <Cart />
        </li>
        {/* <li>
          <SignOut />
        </li> */}
        <li>
          <Profile />
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
