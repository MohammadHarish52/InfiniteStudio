"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Mohammad Harish",
      role: "Foundeer WebCraft ex crackeddevs",
      achievements: ["Building WebCraft", "Based in Kanpur, India"],
      image: "/harish.jpg",
    },
    {
      name: "Rohan Sharma",
      role: "Serial Entrepreneur",
      achievements: ["Won 20+ Hackathons", "Based in London, UK"],
      image: "/rohan.jpg",
    },
    {
      name: "Manan Arora",
      role: "Serial Entrepreneur",
      achievements: ["Won 20+ Hackathons", "Based in London, UK"],
      image: "/manan.jpg",
    },
  ];

  return (
    <section className="w-full bg-black py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-40">
        {/* Section Header */}
        <div className="mb-3 md:mb-4">
          <span className="text-[#D4A853] text-sm md:text-base">Team</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 md:mb-16">
          Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
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
                <h3 className="text-xl md:text-2xl font-medium mb-2">
                  <span className="text-white">{member.name}</span>
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
                    Connect
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

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
