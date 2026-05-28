import React from "react";

import { Gem, Ruler, Building2, Truck } from "lucide-react";
import { Wrapper } from "../ui/wrapper";

const services = [
  {
    icon: <Gem size={22} className="text-white" />,
    title: "Custom Jewelry Design",
    description:
      "Work with our artisans to bring your dream piece to life, from sketch to stunning reality.",
  },
  {
    icon: <Ruler size={22} className="text-white" />,
    title: "Resizing & Engraving",
    description:
      "Perfect fit guaranteed. We resize rings and engrave personal messages on any piece.",
  },
  {
    icon: <Building2 size={22} className="text-white" />,
    title: "Bulk / Corporate Orders",
    description:
      "Special pricing for events, gifting campaigns, and corporate jewelry orders of 10+ pieces.",
  },
  {
    icon: <Truck size={22} className="text-white" />,
    title: "Delivery Anywhere",
    description:
      "Safe, insured delivery to your nearest bus stop or home across Nigeria.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="pt-20">
      <Wrapper>
        <div>
          <h2 className="font-tanpearl font-bold text-xl md:text-2xl text-[#76492E] mb-4">
            Tailored Just For You
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                boxShadow:
                  "inset 0 0.5px 0.5px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.2)",
              }}
              className="bg-[#76492E] rounded-2xl p-6 flex flex-col gap-4 transition-shadow duration-200 hover:brightness-110"
            >
              <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="font-nunito font-bold text-white md:text-base text-sm">
                {service.title}
              </h3>
              <p className="font-nunito text-white/70 text-[13px] leading-relaxed line-clamp-4 md:line-clamp-none">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhatWeDo;
