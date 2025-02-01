import { Code } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-40">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-[#D4A853]" />
            <span className="text-white font-medium">WebCraft</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>

            {/* Message Button */}
            <Link
              href="/book-meeting"
              className="px-4 py-2 rounded-lg bg-[#0A0A0A] hover:bg-zinc-900 text-white transition-all border border-zinc-800 hover:border-zinc-700"
            >
              Message Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
