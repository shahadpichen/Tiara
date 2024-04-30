import React from "react";
import ProductCapsule from "./productCapsule";
import { useParams } from "next/navigation";
import createSupabaServerClient from "@/lib/supabase/server";
import useUser from "@/app/hook/useUser";

interface PropsProducts {
  theme: string;
  category: string;
}

async function OurProducts(props: PropsProducts) {
  const supabase = await createSupabaServerClient();

  const { data } = await supabase
    .from("posts")
    .select("*,profiles(display_name)")
    .eq("category", `${props.category}`)
    .order("created_at", { ascending: false });

  const imageUrlHost =
    "https://zuhswuoryabxgyutinbo.supabase.co/storage/v1/object/public/images/";
  const posts = data?.map((post) => {
    return {
      image: `${post.post_by}/${post.id}/${post.name}`,
      ...post,
    };
  });

  // ("use client");
  // const params = useParams<{ tag: string; item: string }>();
  // console.log(params);

  return (
    <section className="min-h-[90vh] w-full flex flex-col px-[100px] mt-10">
      <div
        className={`text-[${
          props.theme === "light" ? "--primaryTiara" : "--secondaryTiara"
        }] `}
      >
        <h1 className="text-5xl font-semibold ubuntu-medium">Our Products.</h1>
        <p
          className={`text-[${
            props.theme === "light" ? "--textTiara" : "--textDarkTiara"
          }] text-sm my-5`}
        >
          Explore our diverse range of high-quality products, tailored to meet
          your needs.<br></br> Find the perfect solution for you today
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-5 mt-[60px]">
        {posts?.map((product, index) => (
          <ProductCapsule
            key={index}
            image={product.image}
            name={product.product_name}
            description={product.description}
            rating={product.rating}
            price={product.price}
            theme={props.theme}
            post_by={product.post_by}
          />
        ))}
      </div>
    </section>
  );
}

export default OurProducts;
