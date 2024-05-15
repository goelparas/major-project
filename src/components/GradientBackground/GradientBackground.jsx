import React from "react";
import { useLocation } from "react-router-dom";

export function GridBackground() {
  const router = useLocation() && document.body.classList.add("bg-black");
  return (
    <div className="min-h-screen fixed  overflow-hidden w-full dark:bg-black bg-black   bg-grid-white/[0.2]   flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-5xl  font-bold absolute top-12 left-12  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#F8F3F2] py-8">
         Welcome to CodeChat
      </p>
    </div>
  );
}
