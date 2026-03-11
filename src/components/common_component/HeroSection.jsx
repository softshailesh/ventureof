import React from "react";
import herosection_bg from "../../assets/bg_herosection.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-center bg-cover h-[420px] md:h-[500px]"
      style={{ backgroundImage: `url(${herosection_bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F342D]/60" />

      {/* Content */}
      <div className="container h-full flex items-center px-6">
        <div
          className="
            w-full
            md:w-[40%]
            text-white
            text-center md:text-left
            relative
          "
        >
          <h1
            className="
              font-semibold
              leading-[1.15]
              // text-[26px]
              text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]
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
              text-white/90
              leading-[1.6]
            "
          >
            You invest in ambitious founders building scalable,
            technology-driven businesses. Our venture platform
            provides early-stage capital, strategic guidance,
            and access to a strong investor network to help
            startups grow faster and smarter.
          </p>

          <button
              onClick={() => { navigate("/contact-us"); setMenuOpen(false); }}
              className="bg-[#42b87c] cursor-pointer duration-300 font-medium hover:bg-[#76a81f] hover:shadow-xl mt-6 px-6 py-3 rounded-md shadow-lg"
            >
               Contact Us
            </button>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
