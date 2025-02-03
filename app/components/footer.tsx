"use client";
import { ArrowUpRight, Infinity, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 md:py-24 relative overflow-hidden">
      {/* Bottom Gradient Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] after:absolute after:inset-0 after:bg-black after:blur-3xl after:-bottom-1/2"
        style={{
          transform: "scale(1.5)",
          backgroundImage: `
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
          backgroundPosition: "100% 0",
          animation: "gradientFlowReverse 15s linear infinite",
        }}
      />
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gradientFlowReverse {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
      <div className="container mx-auto px-6 md:px-8 lg:px-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <Infinity className="w-8 h-8 text-[#5bc0be]" />
            <p className="text-sm text-zinc-500">
              © InfiniteStudio 2025. All rights reserved.
            </p>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white">Contact</h3>
            <Link
              href="mailto:team@infinite.studio"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              team@infinite.studio
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Social Media Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white">Social Media</h3>
            <div className="flex gap-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://x.com/InfinityStudioX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
