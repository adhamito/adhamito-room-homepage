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
    <div className={`flex flex-col relative  bg-white  w-full ${className}`}>
      <div className="   ">
        {currentData ? (
          <>
            <div className="md:w-full py-4 ">
              {" "}
              <h1 className="text-xl md:text-4xl font-bold text-black">
                {currentData.title}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl  max-w-lg  ">
                {currentData.description}
              </p>
              <div
                className="flex items-start justify-start space-x-2 text-lg tracking-[2rem]
               font-bold  text-black cursor-pointer "
              >
                <span>SHOP NOW</span>
                <span>&rarr;</span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-red-500">No content available.</p>
        )}
      </div>
      <div
        className="absolute hidden md:flex flex-row justify-start  gap-6
              space-x-2 bg-black p-2 w-44 top-72 right-96"
      >
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
