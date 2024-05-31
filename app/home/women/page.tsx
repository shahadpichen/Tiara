import React from "react";
import NavBar from "../../../components/navbar";
import BodySection from "./bodysection";
import FooterSection from "../../../components/footersection";
import OurProducts from "../../../components/productsection";

function WomenCollection() {
  return (
    <section className="min-h-screen bg-[--primaryTiara]">
      <NavBar theme={"dark"} />
      <BodySection />
      <OurProducts theme={"dark"} category={"women"} />
      <FooterSection theme={"dark"} />
    </section>
  );
}

export default WomenCollection;
