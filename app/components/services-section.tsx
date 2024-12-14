"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Particles from "@/components/ui/particles";

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Custom Web Development",
      description:
        "We build tailored web solutions that perfectly align with your business needs and goals, using cutting-edge technologies.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Responsive Design",
      description:
        "Our designs adapt seamlessly to all devices, ensuring a consistent and engaging user experience across platforms.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Performance Optimization",
      description:
        "We enhance your web applications for peak performance, ensuring fast load times and smooth user experiences.",
      gradient: "from-indigo-500 via-purple-500 to-slate-500",
    },
    {
      title: "SEO & Analytics",
      description:
        "Improve your online visibility and track your success with our comprehensive SEO and analytics services.",
      gradient: "from-yellow-500 to-green-400",
    },
  ];

  return (
    <section className="w-full bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All-in-one solution
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Elevate your digital presence with our comprehensive web services
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:px-40">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative rounded-2xl overflow-hidden bg-gray-900 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 ease-in-out ${
                  hoveredIndex === index ? "animate-aurora" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(to right, #4338ca, #3b82f6, #10b981, #3b82f6, #4338ca)",
                  backgroundSize: "200% 100%",
                }}
              />

              <div className="relative p-6">
                <div
                  className={`aspect-video mb-6 rounded-lg overflow-hidden bg-gradient-to-br ${service.gradient}`}
                >
                  {/* Placeholder for potential icon or illustration */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-4xl opacity-50">●</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6">{service.description}</p>

                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 group">
                  <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>{" "}
        <Particles
          className="absolute inset-0"
          quantity={200}
          ease={80}
          color={"#fff"}
          refresh
        />
      </div>

      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
        .animate-aurora {
          animation: aurora 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
