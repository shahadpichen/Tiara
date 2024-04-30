import React from "react";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import NavBar from "../../components/navbar";
import Body from "./components/home/bodysection";
import OurProducts from "../../components/productsection";
import FooterSection from "../../components/footersection";
import ExploreNewCollections from "./components/home/explore";

export default async function Page() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/");
  }

  return (
    <div className="min-h-screen bg-[--backgroundTiara]">
      <NavBar theme={"light"} />
      <Body />
      {/* <OurProducts theme={"light"} /> */}
      <ExploreNewCollections />
      <FooterSection theme={"light"} />
    </div>
  );
}
