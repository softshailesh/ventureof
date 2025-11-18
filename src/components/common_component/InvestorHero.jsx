import React from "react";

const InvestorHero = () => {
  return (
    <section className="w-full bg-[#eaf3ef] py-10 md:py-16 lg:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Small Heading */}
        <p className="text-xs md:text-sm tracking-widest text-gray-700 mb-2 md:mb-3">
          ANGEL INVESTORS NETWORK
        </p>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-green-900 leading-snug md:leading-tight mb-4 md:mb-6">
          Invest in Scalable Opportunities
        </h1>

        {/* Description Lines */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-3 md:mb-4">
          At Angel Investors Network, we believe that investing in alternative
          assets is one of the smartest ways to build wealth for yourself and
          your family.
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-8 md:mb-10">
          We are committed to helping our members find the best possible
          investments for their individual needs so they can achieve lasting
          financial success.
        </p>

        {/* Button */}
        <button className="bg-green-600 text-white text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:bg-green-700 transition-all duration-200">
          Generate Double Digit Return With AIN
        </button>
      </div>
    </section>
  );
};

export default InvestorHero;
