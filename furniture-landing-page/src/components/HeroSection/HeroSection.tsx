import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-dark text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Make Your Interior More Minimalistic & Modern
        </h2>
        <p className="text-lg mb-6">
          Turn your room with panto into a lot more minimalist and modern with ease and speed.
        </p>
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full py-3 px-4 rounded-l-md focus:outline-none"
          />
          <button className="bg-orange text-white px-6 py-3 rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
