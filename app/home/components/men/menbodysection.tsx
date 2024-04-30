import React from "react";

function BodySection() {
  return (
    <section className="h-[50vh] w-full flex items-center px-[100px]">
      <div className="text-[--primaryTiara] z-10">
        <div className="text-9xl flex font-semibold ubuntu-medium ">
          <h1 className="underline underline-offset-8">Uncover top</h1>
          <span className="text-stroke">&nbsp;men's</span>
        </div>
        <div className="flex justify-around">
          <h1 className="text-9xl flex flex-col font-semibold ubuntu-medium underline underline-offset-8">
            form.
          </h1>
          <p className="text-[--textDarkTiara] font-medium text-base w-[60%] my-10 text-end ">
            Elevate your wardrobe with our diverse range of premium men's
            attire, <br></br> designed to exude confidence and highlight your
            unique style. Browse now!
          </p>
        </div>
      </div>
    </section>
  );
}

export default BodySection;
