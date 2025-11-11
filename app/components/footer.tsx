"use client";
import { ArrowUpRight, Infinity, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-black py-16 md:py-24 relative overflow-hidden min-h-[300px]"
    >
      {/* Bottom Gradient Wave (monochrome) */}
      <div
        className="absolute inset-0 w-full h-full after:absolute after:inset-0 after:bg-black after:blur-3xl after:-bottom-1/2"
        style={{
          transform: "scale(1.5)",
          backgroundImage: `
            linear-gradient(
              to right,
              #0A0A0A,
              #111111,
              #1A1A1A,
              #111111,
              #0A0A0A
            )
          `,
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0",
          animation: "gradientFlowReverse 15s linear infinite",
          opacity: "0.7",
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <Infinity className="w-8 h-8 text-zinc-400" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-wider uppercase relative">
                <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                  INFINITESTUDIO
                </span>
                <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                  INFINITESTUDIO
                </span>
              </h2>
            </div>
            <p className="text-sm text-zinc-500">
              © InfiniteStudio 2025. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            {/* Contact Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold tracking-wider uppercase relative">
                <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                  CONTACT
                </span>
                <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                  CONTACT
                </span>
              </h3>
              <Link
                href="mailto:xharish52@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                xharish52@gmail.com
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold tracking-wider uppercase relative">
                <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                  SOCIAL MEDIA
                </span>
                <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                  SOCIAL MEDIA
                </span>
              </h3>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/company/infinitestudiox/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://x.com/InfiniteStudioX"
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
      </div>
    </footer>
  );
}
