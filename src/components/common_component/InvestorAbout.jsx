// // import React from "react";
// // import investor_bg from "../../assets/investor_bg.webp";
// // import investor_1 from "../../assets/investor_img_1.webp";
// // import investor_2 from "../../assets/investor_img_2.webp";

// // const InvestorAbout = () => {
// //   return (
// //     <div
// //       className="w-full h-[1430px] bg-center bg-cover relative"
// //       style={{ backgroundImage: `url(${investor_bg})` }}
// //     >
// //       <div
// //         className="absolute inset-0"
// //         style={{ backgroundColor: "#e6efeea8" }}
// //       >
// //         <div className="w-[1006px] h-[598] mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 mt-[49px]">
// //           {/* Left Section - Raising Capital */}
// //           <div
// //             className="relative h-[400px] md:h-[550px] bg-cover bg-center flex items-end"
// //             style={{ backgroundImage: `url(${investor_1})` }}
// //           >
// //             {/* Overlay */}
// //             <div className="absolute inset-0 bg-black/40"></div>

// //             {/* Content */}
// //             <div className="relative z-10 text-white p-6 md:p-10">
// //               <h2 className="text-[22px] sm:text-[26px] font-semibold mb-2">
// //                 Raising Capital?
// //               </h2>
// //               <p className="text-[14px] sm:text-[15px] leading-relaxed mb-4 max-w-[300px]">
// //                 Find out if you're ready to raise capital! <br />
// //                 Learn how AIN helps.
// //               </p>
// //               <button className="bg-[#87BC25] hover:bg-[#76a81f] text-white text-[13px] px-5 py-2 rounded-md transition">
// //                 Learning How We Help
// //               </button>
// //             </div>
// //           </div>

// //           {/* Right Section - Looking for Great Investments */}
// //           <div
// //             className="relative h-[400px] md:h-[550px] bg-cover bg-center flex items-end"
// //             style={{ backgroundImage: `url(${investor_2})` }}
// //           >
// //             {/* Overlay */}
// //             <div className="absolute inset-0 bg-black/40"></div>

// //             {/* Content */}
// //             <div className="relative z-10 text-white p-6 md:p-10">
// //               <h2 className="text-[22px] sm:text-[26px] font-semibold mb-2">
// //                 Looking for Great Investments?
// //               </h2>
// //               <p className="text-[14px] sm:text-[15px] leading-relaxed mb-4 max-w-[300px]">
// //                 Join our investor community and get <br />
// //                 access to our deals.
// //               </p>
// //               <button className="bg-[#87BC25] hover:bg-[#76a81f] text-white text-[13px] px-5 py-2 rounded-md transition">
// //                 Join Our Investor Community
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default InvestorAbout;

// import React from "react";
// import { motion } from "framer-motion";
// import investor_bg from "../../assets/investor_bg.webp";
// import investor_1 from "../../assets/investor_img_1.webp";
// import investor_2 from "../../assets/investor_img_2.webp";

// const InvestorAbout = () => {
//   return (
//     <div
//       className="w-full min-h-[100vh] bg-center bg-cover relative"
//       style={{ backgroundImage: `url(${investor_bg})` }}
//     >
//       <div
//         className="absolute inset-0"
//         style={{ backgroundColor: "#e6efeea8" }}
//       >
//         <div className="max-w-[1006px] mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 mt-[49px] px-4 md:px-0">
//           {/* Left Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 250 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="relative h-[400px] md:h-[550px] bg-cover bg-center flex items-end rounded-lg overflow-hidden shadow-lg"
//             style={{ backgroundImage: `url(${investor_1})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>

//             <div className="relative z-10 text-white p-6 md:p-10">
//               <h2 className="text-[22px] sm:text-[26px] font-semibold mb-2">
//                 Raising Capital?
//               </h2>
//               <p className="text-[14px] sm:text-[15px] leading-relaxed mb-4 max-w-[300px]">
//                 Find out if you're ready to raise capital! <br />
//                 Learn how AIN helps.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#87BC25] hover:bg-[#76a81f] text-white text-[13px] px-5 py-2 rounded-md transition"
//               >
//                 Learning How We Help
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Right Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 250 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//             viewport={{ once: true }}
//             className="relative h-[400px] md:h-[550px] bg-cover bg-center flex items-end rounded-lg overflow-hidden shadow-lg"
//             style={{ backgroundImage: `url(${investor_2})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>

//             <div className="relative z-10 text-white p-6 md:p-10">
//               <h2 className="text-[22px] sm:text-[26px] font-semibold mb-2">
//                 Looking for Great Investments?
//               </h2>
//               <p className="text-[14px] sm:text-[15px] leading-relaxed mb-4 max-w-[300px]">
//                 Join our investor community and get <br />
//                 access to our deals.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#87BC25] hover:bg-[#76a81f] text-white text-[13px] px-5 py-2 rounded-md transition"
//               >
//                 Join Our Investor Community
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//         <section
//           className="relative w-full bg-cover bg-center py-16 md:py-24"
//         >
//           {/* Light overlay for better contrast */}
//           <div className="absolute inset-0 bg-white/70"></div>

//           <div className="relative z-10 text-center">
//             {/* Title */}
//             <h2 className="text-[#1B3D36] text-2xl md:text-3xl font-semibold mb-12">
//               Angel investors network by the numbers
//             </h2>

//             {/* Circles Section */}
//             <div className="flex flex-wrap justify-center items-end gap-4 md:gap-8">
//               {/* Left Circle */}
//               <div className="flex flex-col items-center">
//                 <div className="w-28 h-28 md:w-36 md:h-36 bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-lg">
//                   <p className="text-lg font-semibold">$ 1B+</p>
//                   <p className="text-xs md:text-sm mt-1">
//                     Accredited Investors
//                   </p>
//                 </div>
//               </div>

//               {/* Left-Mid Circle */}
//               <div className="flex flex-col items-center">
//                 <div className="w-32 h-32 md:w-44 md:h-44 bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-lg">
//                   <p className="text-lg font-semibold">$ 1B+</p>
//                   <p className="text-xs md:text-sm mt-1">Invest Since 2019</p>
//                 </div>
//               </div>

//               {/* Center Large Circle */}
//               <div className="flex flex-col items-center">
//                 <div className="w-52 h-52 md:w-72 md:h-72 bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-2xl scale-110">
//                   <p className="text-2xl md:text-3xl font-semibold">$ 1B+</p>
//                   <p className="text-sm md:text-base mt-2 px-3">
//                     Capital Raised by Client
//                   </p>
//                 </div>
//               </div>

//               {/* Right-Mid Circle */}
//               <div className="flex flex-col items-center">
//                 <div className="w-32 h-32 md:w-44 md:h-44 bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-lg">
//                   <p className="text-lg font-semibold">$ 1B+</p>
//                   <p className="text-xs md:text-sm mt-1">
//                     Accredited Investors
//                   </p>
//                 </div>
//               </div>

//               {/* Right Circle */}
//               <div className="flex flex-col items-center">
//                 <div className="w-28 h-28 md:w-36 md:h-36 bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-lg">
//                   <p className="text-lg font-semibold">$ 1B+</p>
//                   <p className="text-xs md:text-sm mt-1">Invest Since 2019</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default InvestorAbout;

import React from "react";
import { motion } from "framer-motion";
import investor_bg from "../../assets/investor_bg.webp";
import investor_1 from "../../assets/investor_img_1.webp";
import investor_2 from "../../assets/investor_img_2.webp";

const InvestorAbout = () => {
  return (
    <div
      className="w-full bg-center bg-cover relative overflow-hidden"
      style={{ backgroundImage: `url(${investor_bg})` }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#e6efee]"
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* ===== Cards Section ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Card Variants */}
          {[investor_1, investor_2].map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[380px] sm:h-[420px] md:h-[520px] bg-cover bg-center flex items-end rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-white p-6 sm:p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-[22px] sm:text-[26px] font-semibold mb-2"
                >
                  {i === 0
                    ? "Raising Capital?"
                    : "Looking for Great Investments?"}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-[13px] sm:text-[15px] leading-relaxed mb-4 max-w-[320px]"
                >
                  {i === 0 ? (
                    <>
                      Find out if you're ready to raise capital! <br /> Learn
                      how AIN helps.
                    </>
                  ) : (
                    <>
                      Join our investor community and get <br /> access to our
                      deals.
                    </>
                  )}
                </motion.p>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#9fd63b",
                    boxShadow: "0px 0px 12px rgba(135,188,37,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#87BC25] text-white text-[13px] sm:text-[14px] px-5 py-2 rounded-md shadow-md transition-all duration-300"
                >
                  {i === 0
                    ? "Learn How We Help"
                    : "Join Our Investor Community"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Statistics Section ===== */}
        <section className="relative w-full py-14 md:py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#1B3D36] text-2xl sm:text-3xl md:text-4xl font-semibold mb-12"
          >
            Angel Investors Network by the Numbers
          </motion.h2>

          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-10">
            {[
              { text: "Accredited Investors" },
              { text: "Invest Since 2019" },
              { text: "Capital Raised by Client", large: true },
              { text: "Accredited Investors" },
              { text: "Invest Since 2019" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  rotate: Math.random() > 0.5 ? 1.5 : -1.5,
                  transition: { duration: 0.3 },
                }}
                animate={{
                  y: [0, -6, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                }}
                className="flex flex-col items-center"
              >
                <div
                  className={`${
                    item.large
                      ? "w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
                      : "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                  } bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-lg`}
                >
                  <p
                    className={`${
                      item.large
                        ? "text-2xl sm:text-3xl font-semibold"
                        : "text-lg sm:text-xl font-semibold"
                    }`}
                  >
                    $ 1B+
                  </p>
                  <p
                    className={`${
                      item.large
                        ? "text-sm sm:text-base mt-2 px-3"
                        : "text-xs sm:text-sm mt-1"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestorAbout;
