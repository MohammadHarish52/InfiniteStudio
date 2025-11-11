"use client";

import { services } from "@/app/constants/data"; // Adjust the import path as necessary
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="w-full bg-black py-32 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Gradient Background - Light Top with Dark Bottom (Upper) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #0A0A0A 0%, #0D0D0D 60%, #000000 100%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-40 relative z-10">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[#14B8A6] text-sm md:text-base">Services</span>
        </div>
        <h2
          className="font-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-16"
          style={{
            lineHeight: "120%",
            letterSpacing: "-4%",
            background:
              "linear-gradient(88.56deg, rgba(255,255,255,1) 60.44%, rgba(255,255,255,0.5) 92.1%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          All-In-One Solution
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-700/40 hover:border-zinc-600/60 transition-all duration-300 h-full group-hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4),0_4px_6px_-1px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold tracking-wider mb-4 relative">
                      <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                        {service.title}
                      </span>
                      <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                        {service.title}
                      </span>
                    </h3>
                    <p className="text-zinc-400 mb-6">{service.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight
                        className={`w-5 h-5 text-white transition-transform duration-300 ${
                          hoveredIndex === index
                            ? "translate-x-0.5 -translate-y-0.5"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
