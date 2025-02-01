"use client";

import Link from "next/link";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-24">
      <div className="container mx-auto px-4 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo Section */}
          <div>
            <Image
              src="/logo.png"
              alt="WebCraft Logo"
              width={48}
              height={48}
              className="mb-4"
            />
            <p className="text-sm text-zinc-600">
              © WebCraft 2025. All rights reserved.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl text-white mb-6">Contact</h3>
            <Link
              href="mailto:team@crackeddevs.com"
              className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              team@webcraft.com
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
                <Twitter className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
