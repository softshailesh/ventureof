import React from "react";

const InvestorHero = () => {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
  <div className="max-w-6xl mx-auto">

    <div className="bg-[#42b87c] opacity-90 rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] 
    py-8 sm:py-10 md:py-12 px-6 sm:px-10 md:px-16 text-white text-center shadow-inner">

      {/* Heading */}
      <h2 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] font-semibold mb-4 leading-snug">
        Risk Disclosure
      </h2>

      {/* Text */}
      <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] 
      max-w-[850px] mx-auto leading-relaxed opacity-95">
        Startup investments involve risk, including loss of capital and illiquidity. 
        Returns are not guaranteed. Investors should evaluate opportunities carefully 
        and seek independent financial advice where appropriate.
      </p>

    </div>

  </div>
</section>
  );
};

export default InvestorHero;
