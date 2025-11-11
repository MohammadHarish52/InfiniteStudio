"use client";

import Link from "next/link";
import {
  SiFigma,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import ArrowUpRightWhiteIcon from "./icons/ArrowUpRightWhiteIcon";

export default function Component() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 100; // Offset for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Gradient Background with Angled Reflection Effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Upper section - 45deg gradient (left to right) above horizon */}
        <div
          className="absolute inset-0 w-full"
          style={{
            height: "100%",
            top: "0",
            // Subtle monochrome sweep
            background:
              "linear-gradient(425deg, #000000 0%, #0A0A0A 35%, #111111 65%, #1A1A1A 100%)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center z-10 px-6 md:px-12 lg:px-20 py-20 w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Main Heading */}
            <div className="flex flex-col gap-6">
              <h1
                className="font-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
                style={{
                  lineHeight: "120%",
                  letterSpacing: "-4%",
                  background:
                    "linear-gradient(88.56deg, rgba(255,255,255,1) 60.44%, rgba(255,255,255,0.5) 92.1%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Full-Stack MVPs, Delivered Fast.
              </h1>
              <p
                className="text-white text-xs md:text-base font-normal tracking-tight opacity-70 text-center"
                style={{ letterSpacing: "-0.12px" }}
              >
                We build web applications from concept to launch. Full-stack
                development, MVP-first approach.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 w-full px-4 sm:px-0">
              {/* Book a Call Button - Primary */}
              <Link
                href="https://calendly.com/xharish52/30min"
                className="flex items-center justify-center rounded-full border-[1.5px] border-transparent hover:opacity-90 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto min-w-[160px] sm:min-w-[205px]"
                style={{
                  height: "48px",
                  gap: "16px",
                  paddingTop: "5px",
                  paddingRight: "20px",
                  paddingBottom: "5px",
                  paddingLeft: "24px",
                  background:
                    "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "-4%",
                }}
              >
                <span className="relative z-10 text-base sm:text-lg md:text-[20px]">
                  Book a Call
                </span>
                <div
                  className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <ArrowUpRightWhiteIcon
                    className="w-3 h-3 sm:w-[14px] sm:h-[14px]"
                    color="#FFFFFF"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] via-[#0D9488] to-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Services Button - Secondary */}
              <Link
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="flex items-center justify-center rounded-full border-[1.5px] border-zinc-700/50 hover:border-zinc-600/70 hover:opacity-90 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto min-w-[160px] sm:min-w-[205px]"
                style={{
                  height: "48px",
                  gap: "16px",
                  paddingTop: "5px",
                  paddingRight: "20px",
                  paddingBottom: "5px",
                  paddingLeft: "24px",
                  background:
                    "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "-4%",
                }}
              >
                <span className="relative z-10 text-base sm:text-lg md:text-[20px]">
                  Services
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Tech stack icons pinned to bottom */}
            <div className="absolute bottom-12 md:bottom-16 left-0 right-0 flex items-center justify-center gap-5 sm:gap-6 opacity-90">
              <span className="hidden sm:inline text-[11px] sm:text-xs uppercase tracking-wider text-zinc-500">
                Built with
              </span>
              <SiTypescript
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="TypeScript"
                aria-label="TypeScript"
              />
              <SiNextdotjs
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="Next.js"
                aria-label="Next.js"
              />
              <SiReact
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="React"
                aria-label="React"
              />
              <SiTailwindcss
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="Tailwind CSS"
                aria-label="Tailwind CSS"
              />
              <SiFramer
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="Framer Motion"
                aria-label="Framer Motion"
              />
              <SiFigma
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="Figma"
                aria-label="Figma"
              />
              <SiVercel
                className="text-zinc-400 hover:text-white transition-colors w-[22px] h-[22px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                title="Vercel"
                aria-label="Vercel"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
