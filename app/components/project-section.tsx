"use client";

import { projects } from "@/app/constants/data"; // Adjust the import path as necessary
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ArrowUpRightWhiteIcon from "./icons/ArrowUpRightWhiteIcon";

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="w-full bg-black py-32 relative overflow-hidden">
      {/* Gradient Background - Light Top with Dark Bottom (Upper) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(to bottom, #0F2420 0%, #0D1816 60%, #0B0F0E 100%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-40 relative z-10">
        <div className="mb-4">
          <span className="text-[#14B8A6] text-sm md:text-base">Projects</span>
        </div>
        <h2
          className="font-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-16"
          style={{
            lineHeight: "100%",
            letterSpacing: "-4%",
            background:
              "linear-gradient(88.56deg, rgba(255,255,255,1) 60.44%, rgba(255,255,255,0.5) 92.1%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-lg bg-[#0A0A0A] border border-zinc-700/40 hover:border-zinc-600/60 transition-all duration-300 h-full group-hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4),0_4px_6px_-1px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                style={{
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex flex-col justify-between h-full gap-6">
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold tracking-wider relative mb-2">
                      <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                        {project.title}
                      </span>
                      <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                        {project.title}
                      </span>
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-all duration-300">
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
              </a>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://exciting-durian-f97.notion.site/Agency-13c30606a59a80d884dfe98abd011b24?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full border-[1.5px] border-zinc-700/50 hover:border-zinc-600/70 hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
            style={{
              height: "48px",
              gap: "16px",
              paddingTop: "5px",
              paddingRight: "20px",
              paddingBottom: "5px",
              paddingLeft: "24px",
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
              color: "#FFFFFF",
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "-4%",
            }}
          >
            <span className="relative z-10 text-base sm:text-lg md:text-[20px]">
              Check all the projects
            </span>
            <div
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
              style={{
                backgroundColor: "rgba(20, 184, 166, 0.2)",
              }}
            >
              <ArrowUpRightWhiteIcon
                className="w-3 h-3 sm:w-[14px] sm:h-[14px]"
                color="#14B8A6"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
