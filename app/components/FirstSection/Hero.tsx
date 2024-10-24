"use client";
import React, { useState } from "react";
import NavBar from "../NavBar";
import Image from "next/image"; // Import Image from next/image
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

  return (
    <div
      className={`${className} md:max-w-full md:h-96 h-56 w-full md:flex md:justify-center 
      md:items-center relative`}
    >
      <NavBar isMobile={isMobile} setIsMobile={setIsMobile} />

      <div className="absolute inset-0">
        <Image
          src={images[currentIndex]}
          alt={`Hero Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute bottom-0 right-0 space-x-4 bg-black block md:hidden">
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
