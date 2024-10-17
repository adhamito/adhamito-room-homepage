import React from "react";
import Hero from "./Hero";
import Section from "./Section";

const FirstSection = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center p-10">
      <div>
        <Hero />
      </div>
      <div>
        <Section />
      </div>
    </div>
  );
};

export default FirstSection;
