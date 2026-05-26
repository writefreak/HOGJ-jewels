"use client";
import React from "react";
import { Wrapper } from "./ui/wrapper";
import { Gem, Ruler, Building2, Truck } from "lucide-react";

const Category = () => {
  return (
    <section className="md:pt-20 pt-16 pb-8 bg-white">
      <Wrapper>
        <div className="flex flex-col gap-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-10">
            <div>
              <div className="flex flex-col gap-6">
                {/* Mobile: text above image */}
                {/* <div className="md:hidden">
                  <h2 className="font-playfair text-2xl font-bold text-[#76492E] mb-4">
                    Elegance That Speaks
                  </h2>
                  <p className="text-[#555] font-nunito text-xs leading-relaxed">
                    Heart of Gold Jewelry is more than a store. We source the
                    finest luxury jewelry and bring it directly to you, with
                    care and honesty at every step.
                  </p>
                </div> */}

                {/* Image with desktop overlay */}
                <div className="relative h-65">
                  <img
                    src="/lapimg.jpg"
                    alt=""
                    className="h-full w-full object-cover rounded-xl brightness-75"
                  />
                  {/* Desktop: text on top of image */}
                  <div className="absolute inset-0 flex flex-col justify-center p-8 bg-linear-to-r from-black/90 md:from-black/85 via-black/25 to-transparent rounded-xl">
                    <div className="flex flex-col gap-7">
                      <div>
                        <h2 className="font-playfair md:text-3xl text-2xl text-white mb-3">
                          Elegance That Speaks
                        </h2>
                        <p className="text-white/75 font-nunito text-xs md:text-sm w-75 md:w-95 leading-relaxed">
                          Heart of Gold Jewelry is more than a store. We source
                          the finest luxury jewelry and bring it directly to
                          you, with care and honesty at every step.
                        </p>
                      </div>
                      <button className="w-fit px-8 py-2 block rounded-3xl bg-[#76492E]/50 hover:bg-[#8a7868] active:scale-95 transition-all duration-150 text-white font-nunito font-medium text-[15px]">
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Service Cards */}
        </div>
      </Wrapper>
    </section>
  );
};

export default Category;
