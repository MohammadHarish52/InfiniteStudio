"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Particles from "@/components/ui/particles";
import WordPullUp from "@/components/ui/word-pull-up";
export default function Component() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientPosition((prevPosition) => (prevPosition - 0.5) % 200);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <main className="container flex flex-col items-center justify-center px-4 pt-20 pb-32 text-center relative z-10">
        <WordPullUp
          className="text-4xl md:text-7xl font-bold tracking-[-0.02em]  bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text md:leading-[5rem]"
          words="Crafting digital experiences "
        />
        <WordPullUp
          className="text-4xl md:text-7xl font-bold tracking-[-0.02em] bg-gradient-to-r from-cyan-400 via-pink-400 to-emerald-400 text-transparent bg-clip-text  md:leading-[5rem]"
          words=" that inspire and innovate"
        />

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          We're a college peers of passionate about developing , designing and
          building cutting-edge web solutions for forward-thinking businesses.
        </p>

        <Link
          href="/"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 hover:border-white/40 mt-10"
        >
          View our work
        </Link>
      </main>

      {/* Decorative Elements */}
      <Star className="absolute top-32 left-32 w-8 h-8 text-white opacity-50" />
      <Sparkles className="absolute bottom-32 right-32 w-8 h-8 text-white opacity-50" />

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
              #4338ca,
              #3b82f6,
              #10b981,
              #3b82f6,
              #4338ca
            )
          `,
          backgroundSize: "200% 100%",
          backgroundPosition: `${gradientPosition}% 0`,
          animation: "gradientFlow 15s linear infinite",
        }}
      />

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
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  );
}
