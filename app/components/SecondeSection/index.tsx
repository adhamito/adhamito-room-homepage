import React from "react";

// Define props for className
interface SecondeSectionProps {
  className?: string;
}

const SecondeSection: React.FC<SecondeSectionProps> = ({ className }) => {
  return (
    <div
      className={`flex justify-start items-start w-full h-full ${className}`}
    ></div>
  );
};

export default SecondeSection;
