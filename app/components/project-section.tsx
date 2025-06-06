"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "SpeakClearlyAI",
      description:
        "Trying to make your voice clean so you can focus on the efforts of the part",
      link: "https://www.speakclearly.xyz/",
      category: "AI agents",
    },
    {
      title: "Eth signals",
      description:
        "Get latest signals on crypto on what to buy and what to sell",
      link: "https://crypto-analysis-phi.vercel.app/",
      category: "Crypto",
    },
    {
      title: "Sibling Space",
      description:
        "Sibling is a mental health support platform fostering community, connection, and shared experiences to empower individuals on their wellness journey.",
      link: "https://www.sibling.space/",
      category: "Mental Health",
    },
    {
      title: "LetsGrowEsports",
      description: "A blogging for latest news in the esports industry",
      link: "https://letsgrowesports.vercel.app/",
      category: "Esports",
    },
  ];

  return (
    <section className="w-full bg-black py-32 relative">
      <div className="container mx-auto px-4 md:px-40">
        <div className="mb-4">
          <span className="text-[#5bc0be] text-sm md:text-base">Projects</span>
        </div>
        <h2 className="text-4xl md:text-7xl sm:text-6xl font-bold tracking-wider mb-16 uppercase relative">
          <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
            PROJECTS
          </span>
          <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
            PROJECTS
          </span>
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
                className="block p-8 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-300 h-full"
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
      </div>
    </section>
  );
}
