"use client";
import { team } from "@/app/constants/data"; // Adjust the import path as necessary
import Link from "next/link";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="w-full bg-black py-16 md:py-32 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Gradient Background - Dark Top with Light Bottom (Lower) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #0A0A0A 0%, #0D0D0D 60%, #000000 100%)",
        }}
      />
      <div className="container mx-auto px-6 md:px-8 lg:px-40 relative z-10">
        {/* Section Header */}
        <div className="mb-3 md:mb-4">
          <span className="text-[#14B8A6] text-sm md:text-base">Team</span>
        </div>
        <h2
          className="font-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-8 md:mb-16"
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
          Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-700/40 hover:border-zinc-600/60 transition-all duration-300 group-hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4),0_4px_6px_-1px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Profile Image */}
                {member.image ? (
                  <div className="mb-4 md:mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 md:mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-3xl md:text-4xl text-zinc-600">
                        +
                      </span>
                    </div>
                  </div>
                )}

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold tracking-wider mb-2 relative">
                  <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                    {member.name}
                  </span>
                  <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                    {member.name}
                  </span>
                </h3>

                {/* Role & Achievements */}
                {member.role && (
                  <div className="text-sm md:text-base text-zinc-400 mb-4 md:mb-6">
                    {member.role}
                  </div>
                )}

                {/* Connect Button - Only for members with images */}
                {member.image && (
                  <button className="px-4 py-2 w-full rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-sm md:text-base transition-all mb-6 md:mb-8">
                    <Link
                      href={member.connect}
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      Connect <FaXTwitter className="w-4 h-4" />
                    </Link>
                  </button>
                )}

                {/* Achievements */}
                <div className="space-y-2">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="text-sm md:text-base text-zinc-500">
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
