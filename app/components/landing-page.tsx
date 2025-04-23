"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import the wrapper component
const Spline = dynamic(() => import("./SplineWrapper"), {
  ssr: false,
});

export default function Component() {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Mobile Text Version */}
      {isMobile && (
        <div className="container text-center px-4">
          <h1 className="font-space-grotesk text-4xl font-bold tracking-tight uppercase">
            INFINITE
          </h1>

          <h1 className="font-space-grotesk text-4xl font-bold tracking-tight uppercase">
            STUDIOX
          </h1>
        </div>
      )}

      {/* Desktop Spline Version */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 z-0">
            <Spline
              scene="https://prod.spline.design/kpGylr3Hb3uwfiaU/scene.splinecode"
              className="w-full h-full"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="w-12 h-12 border-2 border-t-[#5bc0be] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
