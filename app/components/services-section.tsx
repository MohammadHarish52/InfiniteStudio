"use client";

import { services } from "@/app/constants/data"; // Adjust the import path as necessary
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-40">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[#5bc0be] text-sm md:text-base">Services</span>
        </div>
        <h2 className="text-4xl md:text-7xl sm:text-6xl font-bold tracking-wider mb-16 uppercase relative">
          <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
            ALL-IN-ONE SOLUTION
          </span>
          <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
            ALL-IN-ONE SOLUTION
          </span>
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
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#5bc0be]" />
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
