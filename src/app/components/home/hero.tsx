"use client";
import React from "react";
import { Wrapper } from "../ui/wrapper";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  // const handleScroll = () => {
  //   window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  // };

  return (
    <div className="relative">
      <img
        src="/flourish.png"
        className="w-full h-180 md:h-screen object-cover brightness-75 md:rounded-b-none rounded-b-2xl"
      />
      <div className="absolute rounded-b-2xl inset-0 bg-linear-to-r from-black/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Wrapper className="flex justify-center">
          <div className="flex flex-col gap-7 pt-16 md:pt-18">
            <h1 className="text-white md:text-left text-center font-tanpearl text-[39px] md:text-7xl leading-normal">
              Luxury You <br className="md:hidden" /> Can
              <br className="hidden md:block" /> Treasure Forever
            </h1>
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

      {/* Scroll indicator */}
      {/* <button
        onClick={handleScroll}
        style={{ animation: "gentleBounce 2.4s ease-in-out infinite" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:border-white/80 hover:text-white active:scale-95 transition-colors duration-200"
      >
        <ChevronDown size={18} strokeWidth={1.8} />
        <style>{`
          @keyframes gentleBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
          }
        `}</style>
      </button> */}
    </div>
  );
};

export default Hero;
