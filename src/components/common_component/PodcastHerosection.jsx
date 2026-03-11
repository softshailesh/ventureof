import React from "react";

import mobileImg from "../../assets/mobile.webp";
import bgImg from "../../assets/boardroom.webp";

const PodcastHerosection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="bg-black/60 w-full h-full">
        <div
          className="
            mx-auto px-6 lg:px-12 py-20 
            grid grid-cols-1 lg:grid-cols-2 items-center
            text-center lg:text-left      /* MOBILE CENTER, DESKTOP LEFT */
          "
        >
          {/* LEFT CONTENT */}
          <div className="text-white space-y-5 lg:pr-10 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Angels, Exits & <br /> Acquisitions
            </h1>

            <p className="text-sm md:text-base max-w-md opacity-90">
              Explore Engaging Conversations and Inspiring Stories.
              Dive Into Our Podcast Library for Thought-Provoking Content.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src={mobileImg}
              alt="Mobile App"
              className="
                w-48 sm:w-60 md:w-64 lg:w-72 xl:w-80 
                drop-shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHerosection;
