"use client";
import React, { useState } from "react";
import NavBar from "../NavBar";
import img1 from "../images/desktop-image-hero-1.jpg";
import img2 from "../images/desktop-image-hero-2.jpg";
import img3 from "../images/desktop-image-hero-3.jpg";

interface HeroProps {
  className?: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Hero: React.FC<HeroProps> = ({
  className,
  currentIndex,
  setCurrentIndex,
}) => {
  const images = [img1, img2, img3];
  const [isMobile, setIsMobile] = useState(false);

  const handlePrecedent = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const imgSrc = images[currentIndex].src;

  return (
    <div
      className={`${className} w-full h-full flex justify-center items-center relative`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "gray",
      }}
    >
      <NavBar isMobile={isMobile} setIsMobile={setIsMobile} />

      {/* Navigation buttons */}
      <div className="absolute bottom-0 right-0 space-x-4 bg-black md:hidden block">
        <button
          onClick={handlePrecedent}
          disabled={currentIndex === 0}
          className="p-6 text-white rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className="p-6 text-white rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
