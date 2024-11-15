import { Code } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10 bg-black text-white w-full">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8">
          <Code className="w-full h-full" />
        </div>
        <Link href="/" className="text-xl font-bold">
          WebCraft
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm font-medium hover:text-gray-300">
          Services
        </Link>

        <Link
          href="/contact"
          className="text-sm font-medium hover:text-gray-300"
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <RainbowButton>Get a quote</RainbowButton>
      </div>
    </nav>
  );
}
