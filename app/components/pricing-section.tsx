"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description:
        "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Forms",
        "3 Revisions",
        "30 Days Support",
      ],
      category: "Basic Package",
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "one-time",
      description:
        "Ideal for growing businesses that need advanced functionality",
      features: [
        "Everything in Starter",
        "Advanced Animations",
        "CMS Integration",
        "E-commerce Ready",
        "Analytics Setup",
        "Unlimited Revisions",
        "90 Days Support",
        "Performance Optimization",
      ],
      category: "Most Popular",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description:
        "For large-scale projects requiring custom solutions and ongoing support",
      features: [
        "Everything in Professional",
        "Custom Backend Development",
        "Third-party Integrations",
        "Advanced Security",
        "Multi-language Support",
        "Dedicated Project Manager",
        "Priority Support",
        "6 Months Maintenance",
      ],
      category: "Premium Package",
      popular: false,
    },
  ];

  return (
    <section className="w-full bg-black py-32 relative">
      <div className="container mx-auto px-4 md:px-40">
        <div className="mb-4">
          <span className="text-[#5bc0be] text-sm md:text-base">Pricing</span>
        </div>
        <h2 className="text-4xl md:text-7xl sm:text-6xl font-bold tracking-wider mb-16 uppercase relative">
          <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text transform transition-transform duration-300 inline-block">
            PRICING
          </span>
          <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
            PRICING
          </span>
        </h2>

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
                className={`p-8 rounded-lg transition-all duration-300 h-full relative overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-b from-zinc-900 to-zinc-800 border border-[#5bc0be]/30"
                    : "bg-zinc-900/50 hover:bg-zinc-900"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#5bc0be] to-[#6fffe9] p-0.5 transition-all duration-300 group-hover:from-[#5bc0be] group-hover:to-[#6fffe9] group-hover:shadow-lg group-hover:shadow-[#5bc0be]/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5bc0be]/20 to-[#6fffe9]/20 animate-pulse group-hover:from-[#5bc0be]/40 group-hover:to-[#6fffe9]/40 transition-all duration-300" />
                  </div>
                )}

                <div className="flex flex-col justify-between h-full gap-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div
                        className={`text-sm ${
                          plan.popular ? "text-[#5bc0be]" : "text-gray-400"
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
                          {plan.price}
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
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              plan.popular ? "bg-[#5bc0be]/20" : "bg-zinc-800"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                plan.popular ? "text-[#5bc0be]" : "text-white"
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
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                        plan.popular
                          ? "text-white hover:shadow-lg hover:shadow-[#5bc0be]/25 hover:shadow-2xl"
                          : "bg-zinc-800 text-white hover:bg-zinc-700"
                      } ${
                        hoveredIndex === index
                          ? "transform scale-105"
                          : "scale-100"
                      }`}
                      style={
                        plan.popular
                          ? {
                              backgroundImage: `
                           linear-gradient(
                             to right,
                             #0a0a0a,   /* Deep black */
                             #1a1a1a,   /* Dark gray */
                             #2a2a2a,   /* Medium gray */
                             #3a3a3a,   /* Lighter gray */
                             #4a4a4a,   /* Even lighter gray */
                             #3a3a3a,   /* Back to lighter gray */
                             #2a2a2a,   /* Medium gray */
                             #0a0a0a    /* Deep black */
                           )
                         `,
                              backgroundSize: "200% 100%",
                              backgroundPosition: "0% 0",
                              animation: "gradientFlow 15s linear infinite",
                              transition: "all 0.3s ease",
                            }
                          : {}
                      }
                      onMouseEnter={(e) => {
                        if (plan.popular) {
                          const target = e.target as HTMLButtonElement;
                          target.style.backgroundImage = `
                            linear-gradient(
                              to right,
                              #0a0a0a,   /* Deep black */
                              #1a1a1a,   /* Dark gray */
                              #2a2a2a,   /* Medium gray */
                              #5bc0be,   /* Neon cyan accent */
                              #6fffe9,   /* Bright cyan highlight */
                              #5bc0be,   /* Neon cyan accent */
                              #2a2a2a,   /* Medium gray */
                              #0a0a0a    /* Deep black */
                            )
                          `;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (plan.popular) {
                          const target = e.target as HTMLButtonElement;
                          target.style.backgroundImage = `
                            linear-gradient(
                              to right,
                              #0a0a0a,   /* Deep black */
                              #1a1a1a,   /* Dark gray */
                              #2a2a2a,   /* Medium gray */
                              #3a3a3a,   /* Lighter gray */
                              #4a4a4a,   /* Even lighter gray */
                              #3a3a3a,   /* Back to lighter gray */
                              #2a2a2a,   /* Medium gray */
                              #0a0a0a    /* Deep black */
                            )
                          `;
                        }
                      }}
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
            href="/contact"
            className="group relative inline-flex items-center gap-2 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setIsHoveringContact(true)}
            onMouseLeave={() => setIsHoveringContact(false)}
          >
            {/* Liquid glass background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b]/10 via-[#5bc0be]/10 to-[#6fffe9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c2541]/5 via-[#3a506b]/5 to-[#5bc0be]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full animate-pulse" />

            {/* Animated thinking text effect */}
            <span className="relative text-lg md:text-2xl font-bold tracking-wider">
              <span className="inline-block">
                {"Need a custom quote?".split("").map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transform transition-all duration-500 text-white ${
                      isHoveringContact ? "scale-105" : "scale-100"
                    }`}
                    style={{
                      animation: `thinkingColors 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="absolute -z-10 left-0.5 top-0.5 text-zinc-800 w-full h-full">
                Need a custom quote?
              </span>
            </span>

            <style jsx>{`
              @keyframes thinkingColors {
                0% {
                  color: #71717a;
                }
                25% {
                  color: #a1a1aa;
                }
                50% {
                  color: #d4d4d8;
                }
                75% {
                  color: #a1a1aa;
                }
                100% {
                  color: #71717a;
                }
              }

              @keyframes gradientFlow {
                0% {
                  background-position: 0% 0;
                }
                100% {
                  background-position: 200% 0;
                }
              }
            `}</style>

            {/* Animated arrow */}
            <div
              className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 ${
                isHoveringContact ? "scale-110 rotate-12" : "scale-100 rotate-0"
              }`}
            >
              <ArrowUpRight
                className={`w-4 h-4 text-white transition-transform duration-300 ${
                  isHoveringContact ? "translate-x-0.5 -translate-y-0.5" : ""
                }`}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
