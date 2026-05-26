import React from "react";

import { Gem, Ruler, Building2, Truck } from "lucide-react";
import { Wrapper } from "./ui/wrapper";

const services = [
  {
    icon: <Gem size={22} className="text-[#76492E]" />,
    title: "Custom Jewelry Design",
    description:
      "Work with our artisans to bring your dream piece to life, from sketch to stunning reality.",
  },
  {
    icon: <Ruler size={22} className="text-[#76492E]" />,
    title: "Resizing & Engraving",
    description:
      "Perfect fit guaranteed. We resize rings and engrave personal messages on any piece.",
  },
  {
    icon: <Building2 size={22} className="text-[#76492E]" />,
    title: "Bulk / Corporate Orders",
    description:
      "Special pricing for events, gifting campaigns, and corporate jewelry orders of 10+ pieces.",
  },
  {
    icon: <Truck size={22} className="text-[#76492E]" />,
    title: "Delivery Anywhere",
    description:
      "Safe, insured delivery to your nearest bus stop or home across Nigeria.",
  },
];

const WhatWeDo = () => {
  return (
    <div className=" bg-white pt-20">
      <Wrapper>
        <div>
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-[#76492E] mb-4">
            Tailored Just For You
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#76492E]/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 rounded-full bg-[#76492E]/15 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="font-nunito font-bold text-[#1a1a1a] md:text-base text-sm">
                {service.title}
              </h3>
              <p className="font-nunito text-[#777] text-[13px] leading-relaxed line-clamp-4 md:line-clamp-none">
                {service.description}
              </p>
            </div>
          ))}
          {/* <button className="w-fit px-8 py-3 md:hidden rounded-3xl bg-[#76492E] hover:bg-[#8a7868] active:scale-95 transition-all duration-150 text-white font-nunito font-medium text-[15px]">
            Place an Order
          </button> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhatWeDo;
