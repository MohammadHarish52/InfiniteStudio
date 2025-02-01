"use client";

import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourusername",
      icon: Instagram,
    },
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: Github,
    },
  ];

  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-40 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800  transition-colors flex items-center justify-center group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Brand
          </p>
        </div>
      </div>
    </footer>
  );
}
