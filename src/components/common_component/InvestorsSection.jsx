import React from "react";
import img1 from "../../assets/invest1.webp";

const InvestorSection = () => {
  return (
    <section className="w-full bg-[#F1F7F5]  py-10 md:py-16 lg:py-20 px-4">
      <div className="container  mx-auto text-center">
        {/* Small Heading */}
        {/* <p className="text-xs md:text-sm tracking-widest text-gray-700 mb-2 md:mb-3">
          ANGEL INVESTORS NETWORK
        </p> */}

        {/* Main Heading */}
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-green-900 leading-snug md:leading-tight mb-4 md:mb-6">
          How It Works
        </h2>

        {/* Description Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div style={{textAlign:"left",margin:"auto"}}>
            <div>
              <strong>1. Join as an Investor</strong>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-3 md:mb-4">
                Complete onboarding and compliance requirements
              </p>
            </div>

            <div>
              <strong>2. Review Opportunities</strong>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-3 md:mb-4">
                Access curated startup investment opportunities and detailed
                investor materials.
              </p>
            </div>
            <div>
              <strong>3. Invest</strong>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-3 md:mb-4">
                Choose individual deals or portfolio-based investment
                structures.
              </p>
            </div>
            <div>
              <strong>4. Track Performance</strong>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-3 md:mb-4">
                Receive regular updates, performance reports, and milestone
                tracking.
              </p>
            </div>
            <div>
              <strong>5. Exit & Returns</strong>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed mb-3 md:mb-4">
                Participate in liquidity events such as acquisitions, secondary
                sales, or IPOs.
              </p>
            </div>
          </div>
          <div className="">
            <img
                             src={img1}
                            alt="Investors meeting"
                            className="w-full h-auto rounded-md shadow-md"
                            style={{opacity:"1 !important"}}
                          />
          </div>
        </div>

        {/* Button */}
        {/* <button className="bg-green-600 text-white text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:bg-green-700 transition-all duration-200">
          Generate Double Digit Return With AIN
        </button> */}
      </div>
    </section>
  );
};

export default InvestorSection;
