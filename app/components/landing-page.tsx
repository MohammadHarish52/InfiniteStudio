"use client";
import Link from "next/link";
import Particles from "@/components/ui/particles";
import { useState, useEffect } from "react";

export default function Component() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <main className="container flex flex-col items-start md:items-center justify-center px-4 text-left md:text-center relative z-10">
        {/* Label */}

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl sm:text-6xl font-medium tracking-tight mb-6">
          InfiniteStudio builds digital
          <br />
          products that make an impact
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-8">
          We're a team of passionate developers and designers, crafting
          exceptional digital experiences for forward-thinking businesses.
        </p>

        {/* CTA Button - Hidden on mobile as it's in navbar */}
        <Link
          href="/book-meeting"
          className="hidden md:block px-4 py-2 rounded-lg bg-[#0A0A0A] hover:bg-zinc-900 text-white transition-all border border-zinc-800 hover:border-zinc-700"
        >
          Book a Meeting
        </Link>
      </main>

      {/* About Section */}

      {/* Flowing Gradient Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] after:absolute after:inset-0 after:bg-black after:blur-3xl after:-bottom-1/2"
        style={{
          borderTopLeftRadius: isMobile ? "15% 100%" : "50% 100%",
          borderTopRightRadius: isMobile ? "15% 100%" : "50% 100%",
          transform: "scale(1.5)",
          background: `
            linear-gradient(
              to left,
              #0b132b,   /* Deep dark blue */
              #1c2541,   /* Darker blue */
              #3a506b,   /* Slightly lighter blue */
              #5bc0be,   /* Cyan for stars/nebulas */
              #6fffe9,   /* Bright cyan for highlights */
              #3a506b,   /* Transition back to darker blue */
              #1c2541,   /* Darker blue */
              #0b132b    /* Deep dark blue */
            )
          `,
          backgroundSize: "200% 100%",
          animation: "gradientFlow 15s linear infinite",
        }}
      />

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>

      {/* Particles Effect */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  );
}
