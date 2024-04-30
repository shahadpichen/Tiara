"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AddToCart } from "@/app/home/components/actions";
import useUser from "@/app/hook/useUser";
import { toast } from "sonner";

interface ProductCapsuleProps {
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  theme: string;
  post_by: string;
}

function ProductCapsule(props: ProductCapsuleProps) {
  //   const [selectedStarCount, setSelectedStarCount] = useState(props.rating);
  //   const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0);
  const { isFetching, data } = useUser();
  console.log(data?.id);

  const userID = data?.id;

  const addToCart = async (
    name: string,
    des: string,
    price: number,
    rating: number,
    post_by: string,
    userID: string
  ) => {
    console.log(name, des, price, rating, post_by, userID);
    try {
      const result = await AddToCart(name, des, price, rating, post_by, userID);

      const { error } = JSON.parse(result);

      if (!error?.message) {
        // alert(`${name} has been created.`);
        toast(`${name} has been added to cart.`);
      } else {
        // alert(`Failed to create product: ${error.message}`);
        toast(`Failed to add product:`, {
          description: `${error.message}`,
        });
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div
      className={`h-[550px] p-[30px] w-[350px] bg-[${
        props.theme === "light" ? "--primaryHome" : "--tertiaryHome"
      }] rounded-full flex flex-col items-center justify-center`}
    >
      <Image
        className="rounded-full h-[300px]"
        src={`https://zuhswuoryabxgyutinbo.supabase.co/storage/v1/object/public/images/${props.image}`}
        width={300}
        height={300}
        alt="Tiara"
      />
      <div
        className={`flex items-center justify-center h-[70px] text-slate-200`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            className={`${index + 1 <= props.rating ? "selected" : ""}`}
            key={index}
          >
            &#9733;
          </span>
        ))}
      </div>
      <div className="flex justify-around w-full h-[100px] pb-[20px] items-center">
        <div className="roboto-regular">
          <h3
            className={`text-xl text-[${
              props.theme === "light" ? "--textdarkHome" : "--primaryHome"
            }]`}
          >
            {props.name}
          </h3>
          <p className="text-xs text-[--textDarkTiara]">{props.description}</p>
        </div>
        <p className="text-[--secondaryTiara] text-2xl wellfleet-regular text-center">
          ${props.price}
        </p>
      </div>
      <div className="h-[50px]">
        <button
          className={`flex gap-2 items-center bg-[${
            props.theme === "light" ? "--backgroundTiara" : "--primaryTiara"
          }] rounded-full px-3 py-2 text-[${
            props.theme === "light" ? "--primaryTiara" : "--backgroundTiara"
          }] text-sm `}
          onClick={() =>
            addToCart(
              props.name,
              props.description,
              props.price,
              props.rating,
              props.post_by,
              userID
            )
          }
        >
          <BsCart2 />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCapsule;
