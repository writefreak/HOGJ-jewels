"use client";

import React, { useRef } from "react";
import { Wrapper } from "../ui/wrapper";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    img: `/image.jpg`,
    title: "Rings",
    slug: "From delicate stackables to bold statement pieces, find the ring that was made for your hand.",
    href: "/shop/rings",
  },
  {
    id: 2,
    img: `/image.jpg`,
    title: "Necklaces",
    slug: "Layered chains, pendants, and chokers that sit beautifully against every neckline.",
    href: "/shop/necklaces",
  },
  {
    id: 3,
    img: `/image.jpg`,
    title: "Wristwatches",
    slug: "Luxury timepieces that do more than tell time — they tell your story.",
    href: "/shop/wristwatches",
  },
  {
    id: 4,
    img: `/image.jpg`,
    title: "Custom",
    slug: "Work with our artisans to design a piece as unique as the moment you're marking.",
    href: "/shop/custom",
  },
];

const ExploreCat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 220 : -220,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <Wrapper>
        {/* Header */}
        <div className="flex items-end justify-between pb-6">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#76492E]">
              Explore By Category
            </h2>
          </div>

          {/* Desktop: view all / Mobile: arrow controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-[#76492E]/30 flex items-center justify-center text-[#76492E] hover:bg-[#76492E]/5 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-[#76492E]/30 flex items-center justify-center text-[#76492E] hover:bg-[#76492E]/5 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-1.5 font-nunito text-sm text-[#76492E] hover:opacity-70 transition-opacity"
            >
              View all <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((c) => (
            <Link
              href={c.href}
              key={c.id}
              className="group block shrink-0 w-50"
            >
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "2/3" }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-playfair text-lg font-semibold text-white mb-1">
                    {c.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link href={c.href} key={c.id} className="group block">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "2/3" }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-white mb-1">
                        {c.title}
                      </h3>
                      <p className="font-nunito text-[11px] text-white/70 leading-relaxed line-clamp-2 max-w-40">
                        {c.slug}
                      </p>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={14} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: view all */}
        <div className="md:hidden flex justify-center mt-8">
          <Link
            href="/shop"
            className="flex items-center gap-1.5 font-nunito text-sm text-[#76492E] border border-[#76492E]/30 rounded-full px-6 py-2.5 hover:bg-[#76492E]/5 transition-colors"
          >
            View all categories <ArrowUpRight size={14} />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default ExploreCat;
