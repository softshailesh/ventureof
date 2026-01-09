import React from "react";
import in1 from "../../assets/in1.png";
import in2 from "../../assets/in2.png";

const team = [
  {
    name: "We invest in startups that demonstrate:",
    img: in1,
    points: [
      "A strong founding team with execution capability",
      "Scalable and defensible business models",
      "Clear problem-solution fit",
      "High growth potential in large or emerging markets",
    ],
  },
  {
    name: "Primary Focus Areas:",
    img: in2,
    points: [
      "Technology & SaaS",
      "Fintech & Digital Finance",
      "AI & Data-Driven Solutions",
      "Consumer & Marketplace Platforms",
      "Climate & Sustainable Innovation",
    ],
  },
];

const InvestorAbout = () => {
  return (
    <section className="w-full bg-[#f3f7fa] py-16 px-6 md:px-20">
      <div className="container mx-auto">

        {/* ---------- Section Header ---------- */}
        <div className="text-center mb-12">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-gray-800">
            Our Investment Focus
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            You can rely on our amazing features list, and also our customer
            services will be great experience for you without doubt and no time.
          </p>
        </div>

        {/* ---------- Cards Section ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-md shadow-lg p-4 items-center hover:shadow-xl transition min-h-[180px]"
            >
              {/* Image */}
              <div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full rounded-md object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h4 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-lg font-semibold text-gray-800 mb-3">
                  {member.name}
                </h4>
                <ul className="text-sm text-gray-500 list-disc pl-5 space-y-3">
                  {member.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorAbout;
