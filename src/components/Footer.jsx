import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-4 text-xl">Contact Us</p>

        {/* Contact Information */}
        <div className="flex justify-between items-center space-x-4 md:space-x-8 text-lg mb-4">
          <a
            href="mailto:sainikt.12@gmail.com"
            className="hover:text-gray-400 transition duration-300 transform hover:scale-105"
          >
            Email: rcstudios54@gmail.com
          </a>
          
          <a
            href="tel:+12262126122"
            className="hover:text-gray-400 transition duration-300 transform hover:scale-105"
          >
            Phone: +1 (226) 201-1439
          </a>
          
          <a
            href="https://www.instagram.com/__rcstudios__/?igsh=MTJqMThnMGtweWFobg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 transform hover:scale-105"
          >
            Instagram: @__rcstudios__
          </a>
        </div>

        <p className="mt-6 text-sm">
          &copy; 2024 RC Studios. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
