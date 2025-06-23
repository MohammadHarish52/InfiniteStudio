require("dotenv").config({ path: ".env.local" });
const { put } = require("@vercel/blob");
const fs = require("fs");
const path = require("path");

async function uploadVideos() {
  try {
    console.log("Starting video upload to Vercel Blob...");

    // Check if token exists
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error(
        "❌ BLOB_READ_WRITE_TOKEN not found in environment variables"
      );
      console.log("Please run: vercel env pull .env.local");
      return;
    }

    // Upload desktop video
    const desktopVideoPath = path.join(__dirname, "../public/infinity.mp4");
    const desktopVideoBuffer = fs.readFileSync(desktopVideoPath);

    const desktopBlob = await put("infinity-desktop.mp4", desktopVideoBuffer, {
      access: "public",
      contentType: "video/mp4",
    });

    console.log("Desktop video uploaded:", desktopBlob.url);

    // Upload mobile video
    const mobileVideoPath = path.join(__dirname, "../public/infinity (1).mp4");
    const mobileVideoBuffer = fs.readFileSync(mobileVideoPath);

    const mobileBlob = await put("infinity-mobile.mp4", mobileVideoBuffer, {
      access: "public",
      contentType: "video/mp4",
    });

    console.log("Mobile video uploaded:", mobileBlob.url);

    console.log(
      "\n✅ Upload complete! Update your landing-page.tsx with these URLs:"
    );
    console.log(`Desktop: ${desktopBlob.url}`);
    console.log(`Mobile: ${mobileBlob.url}`);
  } catch (error) {
    console.error("Error uploading videos:", error);
  }
}

uploadVideos();
