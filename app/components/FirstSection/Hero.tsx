import React from "react";
import img from "../images/desktop-image-hero-1.jpg";
import NavBar from "../NavBar";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={`${className} bg-image w-full h-96 flex justify-center items-center relative`}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "gray",
      }}
    >
      <NavBar />
    </div>
  );
};

export default Hero;
