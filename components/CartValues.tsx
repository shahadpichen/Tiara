import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import useUser from "@/app/hook/useUser";
import { deleteProductById } from "@/app/home/components/actions";
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartValuesProps {
  cartProduct: any;
}

function CartValues({ cartProduct }: CartValuesProps) {
  const { isFetching, data } = useUser();
  const [totalPrice, setTotalPrice] = useState(0);
  const [countNumber, setCountNumber] = useState(0);

  useEffect(() => {
    let count = 0;
    let total = 0;
    cartProduct.forEach((product: any) => {
      if (data?.id === product.user) {
        total += product.price;
        count += 1;
      }
    });
    setTotalPrice(total);
    setCountNumber(count);
  }, [cartProduct, data]);

  return (
    <>
      {countNumber != 0 ? (
        <div>
          <div className="flex justify-between p-3 items-center">
            <h1 className="flex w-2/4">Name</h1>
            <h1 className="w-1/4">Price</h1>
            <h1 className="w-1/4 flex justify-end">Delete</h1>
          </div>
          <ScrollArea className="max-h-[32vh] w-full ">
            {cartProduct.map((product: any, index: number) => {
              const deleteTodo = deleteProductById.bind(null, product.id);

              return (
                <div key={product.id}>
                  {data?.id === product.user ? (
                    <Card className="bg-[--backgroundTiara] text-[--primaryTiara] mb-2 border-neutral-100">
                      <CardContent className="flex flex-col justify-center p-4">
                        <div className="flex justify-between items-center">
                          <h1 className="flex w-2/4">{product.name}</h1>
                          <h1 className="w-1/4">${product.price}</h1>
                          <form
                            action={deleteTodo}
                            className="w-1/4 flex justify-end"
                          >
                            <Button
                              variant="ghost"
                              className="hover:bg-transparent"
                            >
                              <MdDeleteForever className="text-red-500 text-lg" />
                            </Button>
                          </form>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </ScrollArea>
          <div className="flex justify-between pt-5 text-xl font-semibold">
            <h2>Total Price:</h2>
            <h2 className="text-xl">${totalPrice}</h2>
          </div>
          <div className="flex flex-col items-end">
            <button className="flex items-center gap-2 text-sm mt-5 bg-[--primaryTiara] rounded-full px-4 py-3 text-[--secondaryTiara] hover:opacity-95">
              Check Out
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      ) : (
        <>Empty</>
      )}
    </>
  );
}

export default CartValues;
