import React from "react";
import Hero from "./Hero";
import Section from "./Section";

// Define props for className
interface FirstSectionProps {
  className?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ className }) => {
  return (
    <div
      className={`flex md:flex-row flex-col justify-start items-start w-full h-full ${className}`}
    >
      <div className="w-1/2 h-full">
        <Hero className="w-full h-full" />
      </div>
      <div className="w-1/2">
        <Section />
      </div>
    </div>
  );
};

export default FirstSection;
