"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Particles from "@/components/ui/particles";

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern, high-performance online store built with Next.js and Stripe integration.",
      gradient: "from-blue-400 to-emerald-500",
      category: "Web Development",
    },
    {
      title: "AI Dashboard",
      description:
        "Analytics dashboard featuring real-time data visualization and machine learning insights.",
      gradient: "from-purple-500 to-pink-500",
      category: "Data Analytics",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication.",
      gradient: "from-indigo-500 via-purple-500 to-slate-500",
      category: "FinTech",
    },
    {
      title: "Social Platform",
      description:
        "Community-driven platform with real-time messaging and content sharing capabilities.",
      gradient: "from-orange-500 to-yellow-400",
      category: "Social Media",
    },
  ];

  return (
    <section className="w-full bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest work and see how we transform ideas into reality
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:px-40">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Aurora Gradient Effect */}
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
                {/* Project Preview Area */}
                <div
                  className={`aspect-video mb-6 rounded-lg overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {/* You can replace this with actual project preview images */}
                    <div className="w-full h-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-4xl opacity-50">
                        {project.title[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Category */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* View Project Button */}
                <div className="flex items-center justify-between">
                  <button className="text-white hover:text-gray-300 transition-colors duration-200">
                    View Project
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 group">
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
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

      {/* Aurora Animation */}
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
