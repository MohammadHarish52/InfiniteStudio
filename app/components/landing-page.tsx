"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Sparkles, Star } from "lucide-react";

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
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <Code className="w-full h-full" />
          </div>
          <span className="text-xl font-bold">WebCraft</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium hover:text-gray-300">
            Services
          </Link>

          <Link href="#" className="text-sm font-medium hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
            Get a quote <span className="ml-2">→</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
          Crafting digital experiences that inspire and innovate
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          We're a passionate team of developers, designers, and strategists
          building cutting-edge web solutions for forward-thinking businesses.
        </p>
        <button className="mt-10 px-8 py-6 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-lg">
          View our work <span className="ml-2">→</span>
        </button>
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
