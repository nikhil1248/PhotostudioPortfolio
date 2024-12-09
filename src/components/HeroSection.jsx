import React from "react";
import logo2 from "../assets/logo2.png"; // Using logo2.png for HeroSection
import sampleVideo from "../assets/sample-video.mp4"; // Sample Video

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background (Hidden on Mobile) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
        autoPlay
        loop
        muted
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Background Image for Mobile */}
      <div className="sm:hidden absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('path_to_your_image.jpg')" }}>
        {/* You can use an image URL here */}
      </div>

      {/* Overlay with Logo and Text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        {/* Logo in Hero Section (Increased Size) */}
        <div className="group">
          <img
            src={logo2}
            alt="RC Studios Logo"
            className="h-64 mb-4 transition-transform duration-500 group-hover:scale-110"
          /> {/* Hover effect: Scale the logo on hover */}
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
