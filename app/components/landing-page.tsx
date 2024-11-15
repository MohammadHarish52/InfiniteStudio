"use client";
import { useState, useEffect } from "react";

import { Code, Sparkles, Star } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Navbar } from "./Navbar";
export default function Component() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientPosition((prevPosition) => (prevPosition - 0.5) % 200);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <main className="container flex flex-col items-center justify-center px-4 pt-20 pb-32 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
          Crafting digital experiences that inspire and innovate
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          We're a college peers of passionate about developing , designing and
          building cutting-edge web solutions for forward-thinking businesses.
        </p>

        <RainbowButton className="mt-10 px-8 py-4 bg-white text-black">
          View our work
        </RainbowButton>
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
    </div>
  );
}
