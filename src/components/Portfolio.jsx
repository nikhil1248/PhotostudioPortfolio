import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const Portfolio = () => {
  const images = [photo1, photo2, photo3];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {images.map((image, idx) => (
        <div key={idx} className="relative">
          {/* Image with consistent size and aspect ratio */}
          <img
            src={image}
            alt={`Portfolio ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
