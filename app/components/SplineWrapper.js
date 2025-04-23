"use client";
import React from "react";

const SplineWrapper = React.lazy(() => import("@splinetool/react-spline"));

export default function Spline(props) {
  return (
    <React.Suspense fallback={<div className="w-full h-full bg-black" />}>
      <SplineWrapper {...props} />
    </React.Suspense>
  );
}
