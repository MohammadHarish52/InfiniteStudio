"use client";

export default function Component() {
  return (
    <section className="w-full bg-black py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full after:absolute after:inset-0 after:bg-black after:blur-3xl after:-bottom-1/2"
        style={{
          transform: "scale(1.5)",
          backgroundImage: `
            linear-gradient(
              to right,
              #0b132b,   /* Deep dark blue */
              #1c2541,   /* Darker blue */
              #3a506b,   /* Slightly lighter blue */
              #5bc0be,   /* Cyan for stars/nebulas */
              #6fffe9,   /* Bright cyan for highlights */
              #3a506b,   /* Transition back to darker blue */
              #1c2541,   /* Darker blue */
              #0b132b    /* Deep dark blue */
            )
          `,
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0",
          animation: "gradientFlow 15s linear infinite",
          opacity: "0.7",
        }}
      />

      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-40 relative z-[1000]">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="text-center">
            <h1 className="bg-gradient-to-b from-zinc-600 via-white  to-zinc-600 text-transparent bg-clip-text transform transition-transform duration-300 inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight uppercase">
              InfiniteStudioX
            </h1>
            <p className="mt-4 text-zinc-400 text-xl">we build cool shit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
