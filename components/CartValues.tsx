import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import useUser from "@/app/hook/useUser";
import { deleteProductById } from "@/app/home/components/actions";

interface CartValuesProps {
  cartProduct: any;
}

function CartValues({ cartProduct }: CartValuesProps) {
  const { isFetching, data } = useUser();

  return (
    <div>
      {cartProduct.map((product: any, index: number) => {
        const deleteTodo = deleteProductById.bind(null, product.id);

        return (
          <div key={product.id}>
            {data?.id === product.user ? (
              <div className="flex justify-between pb-3">
                <h1>{product.name}</h1>
                <form action={deleteTodo}>
                  <Button>delete</Button>
                </form>
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CartValues;
