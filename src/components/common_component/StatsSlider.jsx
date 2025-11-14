import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StatsCentered = () => {
  const dataList = [
    { value: "$1B+", text: "Invest Since 2019" },
    { value: "$1B+", text: "Accelerated Investments" },
    { value: "$1B+", text: "Capital Raised by Client" },
    { value: "$1B+", text: "Accelerated Investments" },
    { value: "$1B+", text: "Invest Since 2019" },
  ];

  const [dataIndices, setDataIndices] = useState([0, 1, 2, 3, 4]);

  // Slow rotation of data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndices((prev) => {
        const arr = [...prev];
        const last = arr.pop();
        arr.unshift(last);
        return arr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CircleComponents = [
    { Component: CircleSmall },
    { Component: CircleMedium },
    { Component: CircleBig },
    { Component: CircleMedium },
    { Component: CircleSmall },
  ];

  const rotatingCircles = dataIndices.map((dataIndex, posIndex) => {
    const { Component } = CircleComponents[posIndex];
    const data = dataList[dataIndex];

    let bottomMargin = "";
    if (posIndex === 2) bottomMargin = "-mb-10 md:-mb-14"; // center big
    else if (posIndex === 3) bottomMargin = "-mb-4 md:-mb-6";

    return (
      <motion.div
        key={dataIndex}
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={bottomMargin}
        style={{ borderRadius: "50%" }}
      >
        <CircleWrapper>
          <Component data={data} />
        </CircleWrapper>
      </motion.div>
    );
  });

  return (
    <section className="relative w-full py-12 md:py-20 text-center overflow-hidden">
      <h2 className="text-[#1B3D36] text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
        Angel Investors Network by the Numbers
      </h2>

      <div className="w-full flex justify-center">
        <div className="flex items-end justify-center gap-6 md:gap-10 lg:gap-16">
          {rotatingCircles}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------
   WRAPPER → Only Circle rotates, text does NOT rotate
-------------------------------------------------- */

const CircleWrapper = ({ children }) => (
  <motion.div
    className="relative flex items-center justify-center"
    
    transition={{
      duration: 8, // slower & smooth
      repeat: Infinity,
      ease: "linear",
    }}
    style={{ borderRadius: "50%" }}
  >
    {/* 🔵 Rotating circle background */}
    <div
      className="absolute inset-0 rounded-full bg-[#87BC25] shadow-xl"
      style={{ zIndex: 1 }}
    ></div>

    {/* 🔵 Static Text (does NOT rotate) */}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

/* -------------------------------------------------
   Circle Sizes — Now ONLY hold text (background removed)
-------------------------------------------------- */

const CircleSmall = ({ data }) => (
  <div
    className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]
               flex flex-col items-center justify-center text-white"
  >
    <p className="text-sm md:text-base font-semibold">{data.value}</p>
    <p className="text-[10px] md:text-xs mt-1">{data.text}</p>
  </div>
);

const CircleMedium = ({ data }) => (
  <div
    className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px]
               flex flex-col items-center justify-center text-white"
  >
    <p className="text-sm md:text-lg font-semibold">{data.value}</p>
    <p className="text-[10px] md:text-xs mt-1">{data.text}</p>
  </div>
);

const CircleBig = ({ data }) => (
  <div
    className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[374px] md:h-[374px]
               flex flex-col items-center justify-center text-white"
  >
    <p className="text-lg sm:text-2xl md:text-3xl font-semibold">{data.value}</p>
    <p className="text-xs sm:text-sm md:text-base mt-2 px-6">{data.text}</p>
  </div>
);

export default StatsCentered;
