import React from "react";
import imgTop from "../../assets/team_meetings.webp";
import imgBottom from "../../assets/business_discussions.webp";

const CapitalTwoSection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-14 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">

      {/* === ROW 1 === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

        {/* LEFT TEXT */}
        <div className="text-left max-w-[500px]">
          <p className="text-[#000000] text-[16px] leading-relaxed font-medium">
            We understand that raising capital can be a difficult and stressful process. 
            That’s why we are here to help every step of the way. We will work 
            closely with you to understand your business and goals and then create 
            a customized plan to help meet your goals.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={imgBottom}
            alt="Business Discussion"
            className="w-full max-w-[430px] rounded-lg object-cover shadow-md"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-left max-w-[500px]">
          <p className="text-[#000000] text-[16px] leading-relaxed font-medium">
            Click below to learn our process and apply to work with Angel Investors 
            Network to help you achieve your capital raising goals. 
            We understand that raising capital can be a difficult and stressful process. 
            That’s why we are here to help every step of the way. We will work 
            closely with you to understand your business and goals and then create a 
            customized plan to help meet your goals.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CapitalTwoSection;
