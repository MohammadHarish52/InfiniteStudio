"use client";
import { useEffect, useState } from "react";

export default function Component() {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check immediately on client-side mount
    checkMobile();
    // Add listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  // Get video URLs from environment variables or use the uploaded CDN URLs
  const desktopVideoUrl =
    process.env.NEXT_PUBLIC_DESKTOP_VIDEO_URL ||
    "https://8gmh6darn0sttkc3.public.blob.vercel-storage.com/infinity-desktop.mp4";
  const mobileVideoUrl =
    process.env.NEXT_PUBLIC_MOBILE_VIDEO_URL ||
    "https://8gmh6darn0sttkc3.public.blob.vercel-storage.com/infinity-mobile.mp4";

  // Fallback to local files during development
  const isDevelopment = process.env.NODE_ENV === "development";
  const videoSrc = isDevelopment
    ? isMobile
      ? "/infinity (1).mp4"
      : "/infinity.mp4"
    : isMobile
    ? mobileVideoUrl
    : desktopVideoUrl;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Video Version for Mobile and Desktop */}
      <video
        // Key change: Apply object-cover first, then scale on mobile
        className={`absolute inset-0 w-full h-full ${
          isMobile
            ? "object-contain transform scale-[1.6]" // Mobile: Cover, enable transform, then scale
            : "object-cover scale-[1.1]" // Desktop: Just cover
        }`}
        autoPlay
        loop
        muted
        playsInline // Important for inline playback on mobile (especially iOS)
        preload="metadata" // Only load metadata initially for faster loading
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Add overlay content here if needed */}
      {/* <div className="relative z-10 p-4"> */}
      {/* <h1>Your Content</h1> */}
      {/* </div> */}
    </div>
  );
}
