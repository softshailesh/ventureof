import React from "react";
import img1 from "../../assets/invest1.webp";

const InvestorSection = () => {
  return (
    <section className="w-full bg-[#F1F7F5] py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-14">
      <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold text-green-900">
        How It Works
      </h2>
    </div>

    {/* Content */}
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* LEFT TEXT */}
      <div className="w-full lg:w-1/2 text-left space-y-5">

        <div>
          <strong>1. Join as an Investor</strong>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Complete onboarding and compliance requirements
          </p>
        </div>

        <div>
          <strong>2. Review Opportunities</strong>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Access curated startup investment opportunities and detailed investor materials.
          </p>
        </div>

        <div>
          <strong>3. Invest</strong>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Choose individual deals or portfolio-based investment structures.
          </p>
        </div>

        <div>
          <strong>4. Track Performance</strong>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Receive regular updates, performance reports, and milestone tracking.
          </p>
        </div>

        <div>
          <strong>5. Exit & Returns</strong>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Participate in liquidity events such as acquisitions, secondary sales, or IPOs.
          </p>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img1}
          alt="Investors meeting"
          className="w-full max-w-[520px] h-auto rounded-md shadow-md"
        />
      </div>

    </div>

  </div>
</section>
  );
};

export default InvestorSection;
