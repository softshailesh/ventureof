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
    <section className="w-full bg-[#f3f7fa] py-16 px-4 sm:px-6 md:px-10 lg:px-16">
  <div className="max-w-[1200px] mx-auto">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-gray-800">
        Our Investment Focus
      </h2>

      <p className="text-gray-500 mt-3 text-[14px] sm:text-[15px] md:text-[16px] max-w-2xl mx-auto">
        You can rely on our amazing features list, and also our customer
        services will be great experience for you without doubt and no time.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

      {team.map((member, index) => (
        <div
          key={index}
          className="
          bg-white
          rounded-lg
          shadow-lg
          hover:shadow-xl
          transition
          p-5
          flex
          flex-col
          lg:flex-row
          gap-5
          "
        >

          {/* Image */}
          <img
            src={member.img}
            alt={member.name}
            className="
            w-full
            lg:w-[160px]
            h-[180px]
            lg:h-[120px]
            object-cover
            rounded-md
            flex-shrink-0
            "
          />

          {/* Text */}
          <div className="flex-1">
            <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-gray-800 mb-3">
              {member.name}
            </h4>

            <ul className="text-sm text-gray-500 list-disc pl-5 space-y-2 leading-relaxed">
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
