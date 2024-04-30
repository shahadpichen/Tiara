import React from "react";
import men2 from "../../../../public/men2.jpeg";
import men3 from "../../../../public/men3.jpeg";
import men5 from "../../../../public/men5.jpeg";
import men6 from "../../../../public/men6.jpeg";
import men8 from "../../../../public/men8.jpeg";
import ExploreCapsule from "./exploreCapsule";

function ExploreNewCollections() {
  const products = [
    { image: men2, name: "Premium Hoodie" },
    { image: men3, name: "Sporty Hoodie" },
    { image: men5, name: "Comfort Hoodie" },
    { image: men6, name: "Trendy Hoodie" },
    { image: men8, name: "Stylish Hoodie" },
  ];
  return (
    <section className="min-h-[90vh] w-full flex flex-col px-[100px] mt-[200px]">
      <div className="text-[--primaryTiara] text-center">
        <h1 className="text-5xl font-semibold ubuntu-medium">
          Explore New Collections
        </h1>
        <p className="text-[--textTiara] text-sm my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-5 mt-[60px]">
        {products.map((product, index) => (
          <ExploreCapsule
            key={index}
            image={product.image}
            name={product.name}
          />
        ))}
      </div>
    </section>
  );
}

export default ExploreNewCollections;
