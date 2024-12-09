import React from "react";
import logo2 from "../assets/logo2.png"; // Logo used in the Hero Section
import sampleVideo from "../assets/sample-video.mp4"; // Sample Video

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background for both Mobile and Large Screens */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Logo and Text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        {/* Logo in Hero Section */}
        <div className="group">
          <img
            src={logo2}
            alt="RC Studios Logo"
            className="h-64 mb-4 transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold">RC STUDIOS</h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mt-4">CAPTURING MEMORABLE MOMENTS</p>
      </div>
    </div>
  );
};

export default HeroSection;
