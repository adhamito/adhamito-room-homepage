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
    <div
      className={`flex md:flex-row flex-col w-full   ${className}`}
      style={{ minHeight: "100vh" }}
    >
      <div className="w-full md:w-1/2 flex-grow md:flex-row flex:col justify-center items-center ">
        <Hero
          className="w-full md:h-3/4 h-96"
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="w-full md:w-1/2 md:h-3/4 flex flex-col flex-grow justify-center items-start h-full">
        <Section
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          className="w-full md:h-3/4 h-96"
        />
      </div>
    </div>
  );
};

export default FirstSection;
