import Marquee from "@/components/Marquee";
import React from "react";

function SecondPage() {
  return (
    <section className="flex min-h-[100vh] w-full flex items-center justify-center bg-[--secondaryHome]">
      <div className="w1/2">
        <h1>Service that we provide</h1>
      </div>
      <div className="w1/2">
        <h2>Custome Product</h2>
        <h2>Fast Delivery</h2>
        <h2>Payment Method</h2>
      </div>
    </section>
  );
}

export default SecondPage;
