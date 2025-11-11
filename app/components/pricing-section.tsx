"use client";

import { pricingPlans } from "@/app/constants/data";
import { Check } from "lucide-react";
import { useState } from "react";
import ArrowUpRightWhiteIcon from "./icons/ArrowUpRightWhiteIcon";

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesignIncluded, setIsDesignIncluded] = useState(true);

  return (
    <section className="w-full bg-black py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Gradient Background - Dark Top with Light Bottom (Lower) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #0A0A0A 0%, #0D0D0D 60%, #000000 100%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-40 relative z-10">
        <div className="mb-4">
          <span className="text-[#14B8A6] text-sm md:text-base">Pricing</span>
        </div>
        <h2
          className="font-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-16"
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
          Pricing
        </h2>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-zinc-900 p-1 rounded-lg border border-zinc-700">
            <div className="flex relative">
              <button
                onClick={() => setIsDesignIncluded(false)}
                className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 relative z-10 ${
                  !isDesignIncluded
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-300"
                }`}
              >
                Development Only
              </button>
              <button
                onClick={() => setIsDesignIncluded(true)}
                className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 relative z-10 ${
                  isDesignIncluded
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-300"
                }`}
              >
                Design + Development
              </button>
              {/* Sliding Background */}
              <div
                className={`absolute top-1 bottom-1 bg-zinc-700 rounded-md transition-all duration-300 ease-in-out ${
                  isDesignIncluded ? "left-1/2 right-1" : "left-1 right-1/2"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative ${
                plan.popular ? "md:-mt-4 md:mb-4" : ""
              } transition-transform duration-300 ${
                hoveredIndex === null
                  ? "hover:scale-105"
                  : hoveredIndex === index
                  ? "scale-105"
                  : "scale-95 opacity-75"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`p-8 rounded-lg transition-all duration-300 h-full relative overflow-hidden group-hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4),0_4px_6px_-1px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)] ${
                  plan.popular
                    ? "bg-gradient-to-b from-zinc-900 to-zinc-800 border border-[#14B8A6]/30"
                    : "bg-[#0A0A0A] border border-zinc-700/40 hover:border-zinc-600/60"
                }`}
                style={{
                  boxShadow: plan.popular
                    ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(20, 184, 166, 0.1)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] p-0.5 transition-all duration-300 group-hover:from-[#14B8A6] group-hover:to-[#0D9488] group-hover:shadow-2xl group-hover:shadow-[#14B8A6]/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/20 to-[#0D9488]/20 animate-pulse group-hover:from-[#14B8A6]/40 group-hover:to-[#0D9488]/40 transition-all duration-300" />
                  </div>
                )}

                <div className="flex flex-col justify-between h-full gap-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div
                        className={`text-sm ${
                          plan.popular ? "text-[#14B8A6]" : "text-gray-400"
                        }`}
                      >
                        {plan.category}
                      </div>
                      <h3 className="text-2xl font-bold tracking-wider relative mb-2">
                        <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
                          {plan.name}
                        </span>
                        <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                          {plan.name}
                        </span>
                      </h3>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">
                          {isDesignIncluded
                            ? plan.priceDesignDev
                            : plan.priceDevOnly}
                        </span>
                        <span className="text-gray-400 text-sm">
                          /{plan.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {(isDesignIncluded
                        ? plan.featuresDesignDev
                        : plan.featuresDevOnly
                      ).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              plan.popular ? "bg-[#14B8A6]/20" : "bg-zinc-800"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                plan.popular ? "text-[#14B8A6]" : "text-white"
                              }`}
                            />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                        plan.popular
                          ? "text-white hover:shadow-2xl hover:shadow-[#14B8A6]/25"
                          : "bg-zinc-800 text-white hover:bg-zinc-700"
                      } ${
                        hoveredIndex === index
                          ? "transform scale-105"
                          : "scale-100"
                      }`}
                      style={
                        plan.popular
                          ? {
                              background:
                                "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
                            }
                          : {}
                      }
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Custom Quote */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full border-[1.5px] border-zinc-700/50 hover:border-zinc-600/70 hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
            style={{
              height: "48px",
              gap: "16px",
              paddingTop: "5px",
              paddingRight: "20px",
              paddingBottom: "5px",
              paddingLeft: "24px",
              background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
              color: "#FFFFFF",
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "-4%",
            }}
          >
            <span className="relative z-10 text-base sm:text-lg md:text-[20px]">
              Need a custom quote?
            </span>
            <div
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
              style={{
                backgroundColor: "rgba(20, 184, 166, 0.2)",
              }}
            >
              <ArrowUpRightWhiteIcon
                className="w-3 h-3 sm:w-[14px] sm:h-[14px]"
                color="#14B8A6"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
