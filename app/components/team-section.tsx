"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Mohammad Harish",
      role: "Founder InfiniteStudiosX |  Ex crackeddevs",
      achievements: ["Building InfiniteStudios", "Based in Kanpur, India"],
      image: "/harish.png",
      connect: "https://x.com/Harish_52",
    },

    {
      name: "Manan Arora",
      role: "Co-Founder InfiniteStudiosX",
      achievements: ["Building InfiniteStudiosX", "Based in India"],
      image: "/manan.jpg",
      connect: "https://x.com/Manancode",
    },
  ];

  return (
    <section className="w-full bg-black py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-40">
        {/* Section Header */}
        <div className="mb-3 md:mb-4">
          <span className="text-[#5bc0be] text-sm md:text-base">Team</span>
        </div>
        <h2 className="text-4xl md:text-7xl sm:text-6xl font-bold tracking-wider mb-8 md:mb-16 uppercase relative">
          <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
            OUR TEAM
          </span>
          <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
            OUR TEAM
          </span>
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
