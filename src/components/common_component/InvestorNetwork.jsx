import React from "react";
import { motion } from "framer-motion";
import investor_network_bg from "../../assets/investor_network_bg.webp";
import investorImg from "../../assets/investor_network.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const InvestorNetwork = () => {
  return (
    <div
      className="w-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${investor_network_bg})` }}
    >
      {/* White Transparent Overlay */}
      <div className="w-full h-full bg-white/90 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[110px] py-12 md:py-20 xl:py-[80px]">

        {/* CONTENT WRAPPER */}
        <motion.div
          className="w-full max-w-[1500px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* LEFT SIDE */}
          <motion.div className="w-full md:w-1/2" variants={fadeLeft}>
            <p className="text-[14px] text-gray-600">
              Unlock the power of high return investments!
            </p>

            <h2 className="font-inter font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[120%] lg:leading-[48px] mt-3">
              Investors Network, we help <br /> investors find strong
              <br /> investment opportunities
            </h2>

            <p className="font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-4">
              At Angel Investors Network, we help investors find strong
              investment opportunities throughout our network. It's completely
              free to get involved, and we will present you with a variety of
              investment opportunities to support your goals.
            </p>

            <p className="font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-4">
              Whether you want to invest in startups, funds, real estate,
              private equity, venture capital, generate monthly cash flow or
              long term appreciation, we have an option for you!
            </p>

            {/* Responsive Image */}
            <motion.div className="w-full mt-6" variants={scaleIn}>
              <img
                src={investorImg}
                alt="Investors meeting"
                className="w-full h-auto rounded-md shadow-md"
              />
            </motion.div>

            <p className="font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-4">
              Plus get access to upside potential with many of our investment
              deals!
            </p>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="w-full md:w-1/2 border border-gray-300 rounded-[12px] p-6 sm:p-8 lg:p-10 shadow-sm bg-white"
            variants={fadeRight}
          >
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[100%] text-gray-800 text-center mb-6">
              Fill out this form and find out how you can
              <span className="text-[#FBB91D] font-semibold">
                {" "}
                earn a fixed return each year
              </span>{" "}
              through AIN's Investments
            </h3>

            <div className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label className="text-gray-700 font-medium">Full Name:</label>
                <input
                  type="text"
                  placeholder="Type Your Name..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-700 font-medium">Phone:</label>
                <input
                  type="text"
                  placeholder="Type Your Phone..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 font-medium">Email:</label>
                <input
                  type="email"
                  placeholder="Type Your Email..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                />
              </div>

              {/* Investment Capability */}
              <div>
                <label className="text-gray-700 font-medium">
                  What is your minimum investment capability at this time? *
                </label>
                <input
                  type="text"
                  placeholder="Type Your Amount..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                />
              </div>

              {/* Radio Options */}
              <div>
                <label className="text-gray-700 font-medium">
                  Are you an accredited or qualified investor under SEC regulations? *
                </label>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="investor" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="investor" /> No
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="investor" /> Not Sure
                  </label>
                </div>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 mt-1">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700 text-[14px] leading-[140%]">
                  I confirm that I want to receive content from this company
                  using any contact information I provide.
                </span>
              </label>

              {/* Button */}
              <button className="mt-4 w-full bg-[#87BC25] hover:bg-[#76a81f] text-white font-medium py-3 rounded-md transition">
                Get More Information
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default InvestorNetwork;
