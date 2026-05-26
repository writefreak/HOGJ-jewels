import React from "react";
import { Wrapper } from "./ui/wrapper";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/flourish.png"
        className="w-full h-150 md:h-screen object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Wrapper className="flex justify-center">
          <div className="flex flex-col gap-7 pt-16 md:pt-18">
            {" "}
            <h1 className="text-white md:text-left text-center font-playfair text-6xl md:text-8xl">
              Luxury You Can
              <br className="hidden md:block" /> Treasure Forever
            </h1>
            {/* <p className="text-white/80">Every ordered piece is curated and delivered with precision <br /> and passion that reflects its lasting beauty.</p> */}
            <div className="flex md:justify-start justify-center gap-3 pt-4">
              <button className="hover:scale-105 hover:bg-[#76492E] active:scale-95 transition-all duration-150 md:text-sm text-xs md:px-6 md:py-3 px-5 py-3 rounded-3xl bg-[#76492E] text-white font-medium">
                Place an Order
              </button>
              <button className="hover:scale-105 hover:bg-[#76492E] active:scale-95 transition-all duration-150 md:text-sm text-xs md:px-6 md:py-3 px-5 py-3 rounded-3xl bg-transparent border-2 border-[#76492E] text-white font-medium">
                Our Brand Story
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
