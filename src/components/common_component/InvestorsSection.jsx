import React from "react";
import { motion } from "framer-motion";

const investors = [
  {
    name: "Lakhan Sharma",
    location: "Delhi, India",
    range: "₹ 1,00,000 – ₹ 5,00,000",
    role: "I’m an Investor",
    expertise: "Business And Investment",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Karan Sharma",
    location: "Delhi, India",
    range: "₹ 1,00,000 – ₹ 5,00,000",
    role: "I’m an Investor",
    expertise: "Business And Investment",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Lakhan Sharma",
    location: "Delhi, India",
    range: "₹ 1,00,000 – ₹ 5,00,000",
    role: "I’m an Investor",
    expertise: "Business And Investment",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const InvestorsSection = () => {
  return (
    <section className="w-full bg-[#F1F7F5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900 leading-snug">
            Join our Growing Community of Entrepreneurs <br /> and Investors
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            We help investors and entrepreneurs build lasting and profitable
            relationships to build better businesses and brighter futures.
          </p>

          {/* Yellow Line */}
          <div className="w-20 h-[3px] bg-yellow-500 mt-4 mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((inv, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.12)",
                transition: { duration: 0.25 },
              }}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
            >
              {/* Profile */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={inv.image}
                  alt="Investor"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{inv.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    📍 {inv.location}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <p className="font-semibold text-gray-700">Investment Range</p>
                <p className="text-gray-800">{inv.range}</p>

                <p className="font-semibold text-gray-700">Area Of Expertise</p>
                <p className="text-gray-800">{inv.expertise}</p>
              </div>

              {/* Button */}
              <button className="mt-3 bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 transition w-fit">
                More Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
