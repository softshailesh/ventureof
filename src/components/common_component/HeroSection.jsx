import React from "react";
import herosection_bg from "../../assets/bg_herosection.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
  className="relative bg-center bg-cover h-[420px] sm:h-[460px] md:h-[500px] lg:h-[560px]"
  style={{ backgroundImage: `url(${herosection_bg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0F342D]/60" />

  {/* Content */}
  <div className="container mx-auto h-full flex items-center px-4 sm:px-6 md:px-8">
    <div
      className="
        w-full
        md:w-[60%]
        lg:w-[45%]
        text-white
        text-center md:text-left
        relative
      "
    >
      <h1
        className="
          font-semibold
          leading-[1.15]
          text-[26px]
          sm:text-[34px]
          md:text-[42px]
          lg:text-[56px]
        "
      >
        Fueling the Next <br className="hidden sm:block" />
        <span className="text-[#87BC25]">
          Generation of Breakthrough
        </span>
        <br className="hidden sm:block" />
        Startups
      </h1>

      <p
        className="
          mt-4
          text-[13px]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[16px]
          text-white/90
          leading-[1.6]
          max-w-[600px]
          mx-auto md:mx-0
        "
      >
        You invest in ambitious founders building scalable,
        technology-driven businesses. Our venture platform
        provides early-stage capital, strategic guidance,
        and access to a strong investor network to help
        startups grow faster and smarter.
      </p>

      <button
        onClick={() => {
          navigate("/contact-us");
          setMenuOpen(false);
        }}
        className="
          bg-[#42b87c]
          cursor-pointer
          duration-300
          font-medium
          hover:bg-[#76a81f]
          hover:shadow-xl
          mt-6
          px-6
          py-3
          rounded-md
          shadow-lg
          text-[14px]
          sm:text-[15px]
        "
      >
        Contact Us
      </button>
    </div>
  </div>
</section>
  );
};

export default HeroSection;
