import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/ui/navbar";
import About from "./components/CTA";
import Featured from "./components/featured";
import Category from "./components/CTA";
import WhatWeDo from "./components/about";
import CTA from "./components/CTA";
import ExploreCat from "./components/home/explore-cat";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <Featured />
        <WhatWeDo />
        <ExploreCat />
        <CTA />
      </div>
    </div>
  );
};

export default page;
