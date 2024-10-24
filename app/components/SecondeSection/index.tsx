import React from "react";
import Image from "next/image";
import imgDark from "../images/image-about-light.jpg";
import imgLight from "../images/image-about-dark.jpg";

interface SecondeSectionProps {
  className?: string;
}

const SecondeSection: React.FC<SecondeSectionProps> = ({ className }) => {
  return (
    <div
      className={`flex md:flex-row flex-col justify-start items-start mt-8 md:mt-0 w-full h-full ${className}`}
    >
      <Image src={imgLight} alt="About section light" width={800} />

      <div className="flex flex-col   text-black p-8 md:w-[800px] ">
        <h1 className="text-xl font-bold tracking-widest border-b-1 border-black  mb-4">
          About our furniture
        </h1>
        <p className="text-gray-500 text-base font-thin">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <Image src={imgDark} alt="About section dark" width={800} />
    </div>
  );
};

export default SecondeSection;
