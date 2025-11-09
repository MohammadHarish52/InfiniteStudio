"use client";

import { InlineWidget } from "react-calendly";
import { Navbar } from "../components/Navbar";

const Book = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-4 md:px-40 py-32">
        {/* Header */}
        <div className="mb-4">
          <span className="text-[#14B8A6] text-sm md:text-base">Schedule</span>
        </div>
        <div className="mb-16">
          <h1
            className="font-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-6"
            style={{
              lineHeight: "100%",
              letterSpacing: "-4%",
              background:
                "linear-gradient(88.56deg, rgba(255,255,255,1) 60.44%, rgba(255,255,255,0.5) 92.1%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Book a Meeting
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Schedule a time to discuss your project and explore how we can help.
          </p>
        </div>

        {/* Calendar Widget */}
        <div className="rounded-2xl bg-[#0A0A0A] border border-zinc-800 p-4 md:p-8">
          <InlineWidget
            url="https://calendly.com/mananarorawork/project-discussion"
            styles={{
              height: "700px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
