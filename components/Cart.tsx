"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TiShoppingCart } from "react-icons/ti";
import { readProduct } from "@/app/home/components/actions";
import CartValues from "./CartValues";
import { toast } from "sonner";

function Cart() {
  const [cartProduct, setCartProduct] = useState<any>(null);

  const fetchCartProduct = async () => {
    try {
      const { data: cartProduct } = await readProduct();
      console.log(cartProduct);
      setCartProduct(cartProduct);
    } catch (error) {
      console.error("Error fetching cart product:", error);
      toast("Error fetching cart product:", {
        description: `${error}`,
      });
    }
  };

  return (
    <Dialog onOpenChange={(isOpen) => isOpen && fetchCartProduct()}>
      <DialogTrigger asChild>
        <div className="bg-red-500 flex justify-center items-center w-[40px] h-[50px] rounded-full">
          <TiShoppingCart className="text-xl text-[--tertiaryHome]" />
        </div>
      </DialogTrigger>

      <DialogContent className="p-10 bg-[--backgroundTiara] text-[--primaryTiara]">
        <DialogHeader>
          <DialogTitle>Cart</DialogTitle>
          <DialogDescription>Here are the list of items</DialogDescription>
        </DialogHeader>
        {cartProduct ? (
          <CartValues cartProduct={cartProduct} />
        ) : (
          <div>Loading...</div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
