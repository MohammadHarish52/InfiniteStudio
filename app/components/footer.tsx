"use client";
import { ArrowUpRight, Infinity, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-24 relative overflow-hidden">
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
      <div className="container mx-auto px-4 md:px-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo Section */}
          <div>
            <Infinity className="w-8 h-8 text-[#5bc0be]" />
            <p className="text-sm text-zinc-600">
              © InfiniteStudio 2025. All rights reserved.
            </p>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-xl text-white mb-6">Contact</h3>
            <Link
              href="mailto:team@infinite.studio"
              className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              team@infinite.studio
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Social Media Section */}
          <div>
            <h3 className="text-xl text-white mb-6">Social Media</h3>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
