"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Section from "./Section";

interface FirstSectionProps {
  className?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className={`flex md:flex-row flex-col w-full ${className}`}>
      <div
        className="w-full md:w-[760px] flex-grow md:flex-row flex-col justify-center 
      items-center"
      >
        <Hero
          className="w-full md:h-96 h-56"
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="w-full md:w-[600px] flex flex-col justify-start items-center px-10 py-2 h-full">
        <Section
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FirstSection;
