import React from "react";
import imgTop from "../../assets/team_meetings.webp";
import imgBottom from "../../assets/business_discussions.webp";

const CapitalTwoSection = () => {
  return (
  <section className="w-full bg-[#FFFFFF] py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* LEFT TEXT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h2 className="font-inter font-medium text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[120%] mb-6">
          Investment Structure and Expected Investment Horizon
        </h2>

        <p className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-justify">
          Our investment structure is designed to be flexible and investor-friendly,
          adapting to individual preferences and regulatory frameworks. Capital may
          be deployed through venture funds, special purpose vehicles (SPVs), or
          deal-by-deal syndication, with each structure built to ensure strong
          governance, transparency, and investor protection.

          <br /><br />

          We operate with a medium- to long-term investment horizon, focusing on
          capital appreciation driven by startup growth. Liquidity is typically
          achieved through acquisitions, secondary sales, or IPOs, with returns
          linked to overall portfolio performance and prevailing market conditions.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={imgTop}
          alt="Team Meeting"
          className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[430px] rounded-lg object-cover shadow-md"
        />
      </div>

    </div>

  </div>
</section>
  );
};

export default CapitalTwoSection;
