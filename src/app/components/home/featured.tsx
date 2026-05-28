"use client";
import React, { useRef } from "react";
import { Wrapper } from "../ui/wrapper";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const pieces = [
  { name: "Golden Necklace", price: "₦45,000", tag: "Bestseller" },
  { name: "Pearl Drop Earrings", price: "₦28,000", tag: "New Arrival" },
  { name: "Celestial Bangle Set", price: "₦62,000", tag: "Limited" },
  { name: "Charm Bracelet", price: "₦33,500", tag: "Trending" },
  { name: "Charm Bracelet", price: "₦33,500", tag: "Trending" },
  { name: "Charm Bracelet", price: "₦33,500", tag: "Trending" },
  { name: "Charm Bracelet", price: "₦33,500", tag: "Trending" },
  { name: "Charm Bracelet", price: "₦33,500", tag: "Trending" },
  { name: "Charm Bracelet", price: "₦33,500", tag: "Trending" },
];

const Featured = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-20 md:pt-20">
      <Wrapper>
        <div className="pb-3 md:pb-5 flex flex-col gap-2">
          <h2 className="font-tanpearl pb-4 font-semibold flex text-xl md:text-2xl text-[#76492E]">
            Featured Pieces
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {pieces.map((piece, i) => (
            <div
              key={i}
              className="group relative shrink-0 w-56 md:w-68 snap-start"
            >
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "2/3" }}
              >
                <img
                  src="/girl.png"
                  alt={piece.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-nunito bg-[#76492E]/40 p-1 px-4 rounded-full  text-[8px] uppercase tracking-[0.18em] text-white/70">
                    {piece.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-tanpearl text-sm font-semibold text-white mb-0.5 leading-snug">
                        {piece.name}
                      </h3>
                      <span className="font-nunito text-[12px] text-white/70">
                        {piece.price}
                      </span>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={14} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 justify-end mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full border bg-[#76492E] text-white hover:bg-[#76492E] hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full border bg-[#76492E] text-white hover:bg-[#76492E] hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Featured;
