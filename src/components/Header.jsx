import React from "react";
import logo2 from "../assets/logo2.png"; // Logo used in the header

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black bg-opacity-50 text-white fixed top-0 left-0 w-full z-10">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo2} alt="RC Studios Logo" className="h-12" />
        <h1 className="text-white text-2xl font-bold ml-2">RC STUDIOS</h1>
      </div>
    </header>
  );
};

export default Header;
