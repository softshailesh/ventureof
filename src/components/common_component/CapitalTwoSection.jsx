import React from "react";
import imgTop from "../../assets/team_meetings.webp";
import imgBottom from "../../assets/business_discussions.webp";

const CapitalTwoSection = () => {
  return (
    <section className="container w-full bg-[#FFFFFF] pt-14 pb-4 px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
      {/* === ROW 1 === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        {/* LEFT TEXT */}
        <div className="text-center ">
          <h2 className="font-inter font-medium text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] leading-[120%] lg:leading-[48px] mt-3 mb-6">
              Investment structure and Expected Investment Horizon
            </h2>
          <p className="text-[#000000] text-[16px] leading-relaxed " style={{textAlign:"justify"}}>
           Our investment structure is designed to be flexible and investor-friendly, adapting to individual preferences and regulatory frameworks. Capital may be deployed through venture funds, special purpose vehicles (SPVs), or deal-by-deal syndication, with each structure built to ensure strong governance, transparency, and investor protection. We operate with a medium- to long-term investment horizon, focusing on capital appreciation driven by startup growth. Liquidity is typically achieved through acquisitions, secondary sales, or IPOs, with returns linked to overall portfolio performance and prevailing market conditions.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={imgTop}
            alt="Team Meeting"
            className="w-full max-w-[430px] rounded-lg object-cover shadow-md"
          />
        </div>
      </div>

      {/* === ROW 2 === */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={imgBottom}
            alt="Business Discussion"
            className="w-full max-w-[430px] rounded-lg object-cover shadow-md"
          />
        </div>

        <div className="flex items-center justify-center w-full px-4 ">
          <p className="text-[#000000] text-sm sm:text-base leading-relaxed font-medium max-w-[500px] text-left">
            Click below to learn our process and apply to work with Angel
            Investors Network to help you achieve your capital raising goals. We
            understand that raising capital can be a difficult and stressful
            process. That’s why we are here to help every step of the way. We
            will work closely with you to understand your business and goals and
            then create a customized plan to help meet your goals.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default CapitalTwoSection;
