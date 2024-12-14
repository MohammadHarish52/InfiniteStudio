import { Code } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-40">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-500" />
            <span className="text-white font-medium">WebCraft</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
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
              href="/contact"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 hover:border-white/40"
            >
              Message Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
