import React from "react";
import build1 from "../../assets/build1.webp";
import build2 from "../../assets/build2.webp";

const BuildLegacySection = () => {
  return (
    <section className="w-full bg-[#798980] py-16 md:py-24 px-6 md:px-16 lg:px-28 ">

      {/* ================= SECTION 1 ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">

        {/* Left Text Block */}
        <div>
          <h2 className="text-[35px] md:text-[40px] font-medium text-[#FFFFFF] leading-tight mb-5">
            Are You Ready to <br />
            Build<span className="text-white">|</span> Your Legacy?
          </h2>

          <p className="text-white/90 text-[5px] md:text-[10px] font-medium leading-relaxed mb-6 max-w-md">
            As a global community of investors, we are dedicated to finding the best deals for your
            portfolio. But we go beyond just sourcing deals. <br /><br />
            We have put together a robust wealth-building program that helps you find the best deals,
            understands how to vet these opportunities, and make smart investment decisions that will
            build your wealth, and your legacy, for years to come. <br /><br />
            Additionally, our partners around the world bring a complete host of information and
            access that will not only help you make more money, but keep more of it, and grow it even faster!
          </p>

          <button className="bg-[#87BC25] text-[#FFFFFF] text-[10px] md:text-[12px] font-medium px-5 py-2 rounded">
            Join Investors Community Today
          </button>
        </div>
          <img src={build1} className="rounded-md w-full h-full object-cover" />
      </div>

     

      {/* ================= SECTION 2 ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Right Text Block (mirrored) */}
        <div className="md:order-2">
          <h2 className="text-[35px] md:text-[40px] font-medium text-white leading-tight mb-5">
            Are You Ready to <br />
            Build<span className="text-white">|</span> Your Legacy?
          </h2>

          <p className="text-white/90 text-[5px] md:text-[10px] font-medium leading-relaxed mb-6 max-w-md">
            As a global community of investors, we are dedicated to finding the best deals for your
            portfolio. But we go beyond just sourcing deals. <br /><br />
            We have put together a robust wealth-building program that helps you find the best deals,
            understands how to vet these opportunities, and make smart investment decisions that will
            build your wealth, and your legacy, for years to come. <br /><br />
            Additionally, our partners around the world bring a complete host of information and
            access that will not only help you make more money, but keep more of it, and grow it even faster!
          </p>

          <button className="bg-[#87BC25] text-[#FFFFFF] text-[10px] md:text-[12px] font-medium px-5 py-2 rounded">
            Join Investors Community Today
          </button>
        </div>

         <img src={build2} className="rounded-md w-full h-full object-cover" />

      </div>
    </section>
  );
};

export default BuildLegacySection;
