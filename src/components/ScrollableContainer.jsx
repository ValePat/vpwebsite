import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Section from "./Section.jsx";
import { ReactTyped } from "react-typed";

function ScrollableContainer() {
  return (
    <div>
    <div className="items-center absolute z-50 w-full flex-col flex justify-center">
      <div className="h-[100vh] flex-col flex justify-center">
      <h1 className="text-white text-6xl text-center w-full">
        Valerio Patricolo
      </h1>
      <ReactTyped
        className="text-white text-center text-4xl"
        strings={["Software Developer", "Digital Artist"]}
        typeSpeed={30}
        backSpeed={30}
        loop
      />
      </div>
      <div className="flex z-50 flex-col m-10 max-w-4xl">
        <Section></Section>
      </div>
    </div>
    </div>
  );
}

export default ScrollableContainer;
