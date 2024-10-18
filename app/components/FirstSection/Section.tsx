"use client";
import React from "react";
import data from "../../data.json";

interface SectionProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  className?: string; // Add className prop here
}

const Section: React.FC<SectionProps> = ({
  currentIndex,
  setCurrentIndex,
  className,
}) => {
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrecedent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentData = data[currentIndex];

  return (
    <div
      className={`flex flex-col items-start justify-start relative bg-white h-full  w-full ${className}`}
    >
      <div className="md:m-8  text-left ">
        {currentData ? (
          <>
            <div className="p-4 w-full h-80">
              {" "}
              <h1 className="text-2xl md:text-6xl font-bold text-black">
                {currentData.title}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl max-w-lg  ">
                {currentData.description}
              </p>
            </div>
          </>
        ) : (
          <p className="text-red-500">No content available.</p>
        )}

        <div className="flex items-start justify-start space-x-2 text-lg tracking-[2rem] font-semibold  text-black cursor-pointer">
          <span>SHOP NOW</span>
          <span>&rarr;</span>
        </div>
      </div>

      <div className=" flex-row flex justify-start  items-start text-left space-x-4 bg-black p-4">
        <button
          onClick={handlePrecedent}
          disabled={currentIndex === 0}
          className="p-6 text-white rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === data.length - 1}
          className="p-6 text-white rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Section;
