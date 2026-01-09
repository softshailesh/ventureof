import React from "react";
import img from "../../assets/network_member.webp"; // replace with your image

const JoinInvestorSection = () => {
  return (
    <section className="bg-[#EAF6F2] py-16 px-4 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Investor working"
            className="w-full h-auto max-w-md md:max-w-full object-cover rounded-lg"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Join Angel Investors <br /> Network today
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Start enjoying the many benefits of membership. Our team of
            professionals will be there every step of the way to make sure you have
            the best possible experience. With us, you’ll get access
            to the{" "}
            <span className="text-[#FBB91D] font-medium">best deal flow  reliable</span>,
            and <span className="text-[#FBB91D] font-medium">trustworthy sources</span>, and the{" "}
            <span className="text-[#FBB91D] font-medium">privacy, exclusivity</span>,
            and prestige of being part of one of the most respected brands in
            alternative investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinInvestorSection;
