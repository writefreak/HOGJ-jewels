import React from "react";
import Hero from "./components/home/hero";
import Navbar from "./components/ui/navbar";
import About from "./components/home/CTA";
import Featured from "./components/home/featured";
import Category from "./components/home/CTA";
import WhatWeDo from "./components/home/about";
import CTA from "./components/home/CTA";
import ExploreCat from "./components/home/explore-cat";
import Reviews from "./components/home/reviews";
import Footer from "./components/home/footer";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <WhatWeDo />
        <Featured />
        <ExploreCat />
        <Reviews />
        <CTA />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default page;
