"use client";

import { useState } from "react";
import { ArrowUpRight, Code2, Laptop, Gauge, Search } from "lucide-react";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Custom Web Development",
      description:
        "We build tailored web solutions that perfectly align with your business needs and goals, using cutting-edge technologies.",
      icon: Code2,
    },
    {
      title: "Responsive Design",
      description:
        "Our designs adapt seamlessly to all devices, ensuring a consistent and engaging user experience across platforms.",
      icon: Laptop,
    },
    {
      title: "Performance Optimization",
      description:
        "We enhance your web applications for peak performance, ensuring fast load times and smooth user experiences.",
      icon: Gauge,
    },
    {
      title: "SEO & Analytics",
      description:
        "Improve your online visibility and track your success with our comprehensive SEO and analytics services.",
      icon: Search,
    },
  ];

  return (
    <section className="w-full bg-black py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-40">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[#5bc0be] text-sm md:text-base">Services</span>
        </div>
        <h2 className="text-6xl md:text-7xl font-medium text-white mb-16">
          All-in-one solution
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
                    <h3 className="text-2xl font-medium text-white mb-4">
                      {service.title}
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

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
