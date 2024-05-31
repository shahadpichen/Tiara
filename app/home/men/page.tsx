import React from "react";
import NavBar from "../../../components/navbar";
import BodySection from "./menbodysection";
import FooterSection from "../../../components/footersection";
import OurProducts from "../../../components/productsection";
import Display from "./display";
import { useParams } from "next/navigation";

function MenCollection() {
  return (
    <section className="min-h-screen bg-[--backgroundTiara]">
      <NavBar theme={"light"} />
      <BodySection />
      <Display />
      <OurProducts theme={"light"} category={"men"} />
      <FooterSection theme={"light"} />
    </section>
  );
}

export default MenCollection;
