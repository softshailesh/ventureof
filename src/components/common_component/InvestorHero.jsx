import React from "react";

const InvestorHero = () => {
  return (
    <section className=" container pt-6 pb-10 px-4">
     <div className="mt-6 bg-[#42b87c] opacity-80 rounded-[100px] py-10 px-6 sm:px-12 md:px-20 text-white text-center shadow-inner">
          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold mb-4 leading-snug">
            Risk Disclosure
          </h2>

          <p className="text-xs sm:text-sm md:text-base max-w-[850px] mx-auto leading-relaxed opacity-95">
           Startup investments involve risk, including loss of capital and illiquidity. Returns are not guaranteed. Investors should evaluate opportunities carefully and seek independent financial advice where appropriate.

          </p>
        </div>
    </section>
  );
};

export default InvestorHero;
