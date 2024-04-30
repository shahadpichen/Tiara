import React from "react";
import NavBar from "../../../components/navbar";
import BodySection from "../components/kids/bodysection";
import FooterSection from "../../../components/footersection";
import OurProducts from "../../../components/productsection";

function KidsCollection() {
  return (
    <section className="min-h-screen bg-[--primaryTiara]">
      <NavBar theme={"dark"} />
      <BodySection />
      <OurProducts theme={"dark"} category={"kids"} />
      <FooterSection theme={"dark"} />
    </section>
  );
}

export default KidsCollection;
