import React from "react";
import { FaItunesNote } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SubscribeSection = () => {
  return (
    <section className="w-full bg-[#eaf3f2] py-14">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* HEADING */}
        <h2 className="text-3xl font-semibold text-[#0e3b32] mb-8">
          Subscribe On
        </h2>

        {/* BUTTONS LIST */}
        <div className="flex flex-wrap justify-center gap-4">
          
          {/* iTunes */}
          <button className="flex items-center gap-2 bg-[#74c21f] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition">
            <FaItunesNote className="text-4xl bg-[#FBB91D] rounded-full px-2" />
            ITUNES
          </button>

          {/* Heart Radio */}
          <button className="flex items-center gap-2 bg-[#74c21f] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition">
            <FaRadio className="text-4xl bg-[#FBB91D] rounded-full px-2" />
            HEART RADIO
          </button>

          {/* YouTube */}
          <button className="flex items-center gap-2 bg-[#74c21f] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition">
            <FaYoutube className="text-4xl bg-[#FBB91D] rounded-full px-2" />
            YOUTUBE
          </button>

          {/* Spotify */}
          <button className="flex items-center gap-2 bg-[#74c21f] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition">
            <FaSpotify className="text-4xl bg-[#FBB91D] rounded-full px-2" />
            SPOTIFY
          </button>

          {/* Google */}
          <button className="flex items-center gap-2 bg-[#74c21f] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition">
            <FcGoogle className="text-4xl bg-[#FBB91D] rounded-full px-2" />
            GOOGLE
          </button>

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
