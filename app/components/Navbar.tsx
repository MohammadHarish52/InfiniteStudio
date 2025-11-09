"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ArrowUpRightIcon from "./icons/ArrowUpRightIcon";
import ArrowUpRightWhiteIcon from "./icons/ArrowUpRightWhiteIcon";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      closeMenu();
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/20 backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 justify-start">
            <Image
              src="/logo.png"
              alt="Infinite Studio"
              width={117}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered between logo and button */}
          <nav className="hidden md:flex items-center justify-center gap-12">
            <Link
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className="text-white text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
              style={{ letterSpacing: "-0.80px" }}
            >
              Services
            </Link>
            <Link
              href="#team"
              onClick={(e) => handleSmoothScroll(e, "#team")}
              className="text-white text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
              style={{ letterSpacing: "-0.80px" }}
            >
              Team
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-white text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
              style={{ letterSpacing: "-0.80px" }}
            >
              About
            </Link>
          </nav>

          {/* Desktop Book a Call Button */}
          <div className="hidden md:flex justify-end">
            <Link
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
                background:
                  "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                color: "#FFFFFF",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "-4%",
              }}
            >
              <span className="relative z-10 text-base font-medium tracking-tight">
                Book a Call
              </span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                style={{
                  backgroundColor: "rgba(20, 184, 166, 0.2)",
                }}
              >
                <ArrowUpRightWhiteIcon
                  className="w-3 h-3"
                  color="#14B8A6"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end col-start-3">
            <button
              onClick={toggleMenu}
              className="text-white hover:opacity-80 transition-opacity z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <Link
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className="text-white text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity"
              style={{ letterSpacing: "-0.80px" }}
            >
              Services
            </Link>
            <Link
              href="#team"
              onClick={(e) => handleSmoothScroll(e, "#team")}
              className="text-white text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity"
              style={{ letterSpacing: "-0.80px" }}
            >
              Team
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-white text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity"
              style={{ letterSpacing: "-0.80px" }}
            >
              About
            </Link>
            <Link
              href="https://calendly.com/xharish52/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-full border-[1.5px] border-zinc-700/50 hover:border-zinc-600/70 hover:opacity-90 transition-all duration-300 relative overflow-hidden group mt-4"
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
              <span className="relative z-10 text-base font-medium tracking-tight">
                Book a Call
              </span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                style={{
                  backgroundColor: "rgba(20, 184, 166, 0.2)",
                }}
              >
                <ArrowUpRightWhiteIcon
                  className="w-3 h-3"
                  color="#14B8A6"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
