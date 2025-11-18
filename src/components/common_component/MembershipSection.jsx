import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

// Card fade-up animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2, // stagger delay
    },
  }),
};

const memberships = [
  {
    title: "Inner Circle Membership",
    benefits: [
      "Access our deal rooms",
      "Get our monthly newsletters",
      "New deals every month!",
      "Join our live monthly webinars",
    ],
    button: "Learn More",
  },
  {
    title: "Mastermind Investment Club",
    benefits: [
      "Access to our Syndicate",
      "Join our Live Events",
      "Access to Deal Valuation Software",
      "Access to Deal Valuation Software",
      "Raise Capital for Your Deals",
      "Syndicate Your Opportunity",
      "Advertise to Our Database",
    ],
    button: "Join Today",
  },
  {
    title: "INNER CIRCLE MEMBERSHIP",
    benefits: [
      "Host Your Own AIN Events",
      "License Our Software",
      "Leverage Our Brand",
      "Advertise to Our Investors",
      "Build a Local Investor Network!",
    ],
    button: "Apply Today",
  },
];

const MembershipSection = () => {
  return (
    <section className="py-16 bg-[#e9f1ef]">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
        Select your membership
      </h2>

      {/* Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {memberships.map((plan, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            className="bg-white rounded-xl shadow-md p-8 text-center transition-all cursor-pointer"
          >
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              {plan.title}
            </h3>

            {/* Benefits */}
            <ul className="space-y-3 text-left mx-auto inline-block">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <Check size={18} className="text-green-600" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;
