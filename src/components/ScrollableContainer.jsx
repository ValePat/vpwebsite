import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Section from "./Section.jsx";
import { ReactTyped } from "react-typed";

function ScrollableContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypedVisible, setIsTypedVisible] = useState(true);
  const [showTyped, setShowTyped] = useState(true); // controlla la presenza nel DOM

  const handleToggle = () => {
    if (!isOpen) {
      // Step 1: fade out
      setIsTypedVisible(false);

      // Step 2: dopo 1s (fine animazione), rimuovi dal DOM e apri il contenitore
      setTimeout(() => {
        setShowTyped(false);
        setIsOpen(true); // espandi dopo che ReactTyped è stato rimosso
      }, 1000);
    } else {
      // Chiusura: subito chiudi e poi fai fade-in del ReactTyped
      setIsOpen(false);

      // Step 3: riaggiungi al DOM dopo che il contenitore è chiuso (opzionale, ma migliora l’effetto)
      setTimeout(() => {
        setShowTyped(true);
        setTimeout(() => setIsTypedVisible(true), 10); // fade in
      }, 500); // tempo sufficiente per far collassare max-h
    }
  };

  return (
    <div className="items-center absolute z-50 w-full h-full flex-col flex justify-center mt-4">
      <h1 className="text-white text-6xl text-center w-full">
        Valerio Patricolo
      </h1>

      {/* ReactTyped con fade-in/out */}
      {showTyped && (
        <div
          className={`transition-opacity duration-1000 text-center ${
            isTypedVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ReactTyped
            className="text-white text-center text-4xl"
            strings={["Software Developer", "Digital Artist"]}
            typeSpeed={30}
            backSpeed={30}
            loop
          />
        </div>
      )}
      <div className={`flex flex-col items-center transition-all duration-500 ease-in-out w-full max-w-3xl mx-auto ${isOpen ? "pt-6" : "pt-0"}`}>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[800px]" : "max-h-0"} w-full`}
        >
          <div className="scrollable max-h-[600px] overflow-y-auto bg-transparent rounded p-20 pt-0 pb-0">
            <Section />
          </div>
        </div>

      </div>
      <button
        onClick={handleToggle}
        className="flex items-center justify-center bg-gray-800/20 hover:bg-gray-800/50 text-white font-bold py-2 px-4 rounded transition-colors mt-6 w-[120px]"
      >
        {isOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </button>
    </div>
  );
}

export default ScrollableContainer;
