"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Particles from "@/components/ui/particles";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <main className="container flex flex-col items-center justify-center px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-7xl sm:text-6xl font-medium tracking-tight mb-6">
          WebCraft Development
          <br />
          products people love!
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          MagicApps is the fastest growing product studio, focused on building
          consumer facing apps and websites
        </p>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-[#0A0A0A] hover:bg-zinc-900 text-white transition-all border border-zinc-800 hover:border-zinc-700"
        >
          Contact Us
        </Link>
      </main>

      {/* About Section */}

      {/* Flowing Gradient Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] after:absolute after:inset-0 after:bg-black after:blur-3xl after:-bottom-1/2"
        style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
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
