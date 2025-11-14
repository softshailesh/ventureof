import React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import investor_bg from "../../assets/investor_bg.webp";
import investor_1 from "../../assets/investor_img_1.webp";
import investor_2 from "../../assets/investor_img_2.webp";

const InvestorAbout = () => {
  const items = [
    { text: "Accredited Investors", value: "1,000+" },
    { text: "Invest Since 2019", value: "2019" },
    { text: "Capital Raised by Client", value: "$1B+" },
    { text: "Angel Investors Joined", value: "500+" },
    { text: "Startups Funded", value: "250+" },
  ];

  const [offset, setOffset] = React.useState(0);
  const speed = 0.4; // adjust for slower/smoother movement

  useAnimationFrame(() => {
    setOffset((prev) => (prev - speed <= -items.length * 250 ? 0 : prev - speed));
  });

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
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* ===== Image Cards ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-[1100px] mx-auto"
        >
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
                      Find out if you're ready to raise capital! <br /> Learn how AIN helps.
                    </>
                  ) : (
                    <>
                      Join our investor community and get <br /> access to our deals.
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
                  {i === 0 ? "Learn How We Help" : "Join Our Investor Community"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Statistics Moving Section ===== */}
        <section className="relative w-full py-14 md:py-20 text-center overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#1B3D36] text-2xl sm:text-3xl md:text-4xl font-semibold mb-12"
          >
            Angel Investors Network by the Numbers
          </motion.h2>

          <div className="relative w-full overflow-hidden flex justify-center">
            <motion.div
              style={{ x: `${offset}px` }}
              className="flex gap-16 sm:gap-20 md:gap-28 w-max"
            >
              {[...items, ...items].map((item, index) => {
                // Determine position in loop (simulate scale around center)
                const totalWidth = items.length * 250;
                const relative = (offset + index * 250) % totalWidth;
                const distanceFromCenter = Math.abs(relative - totalWidth / 2);
                const normalized = Math.min(distanceFromCenter / 400, 1);
                const scale = 1.6 - normalized * 0.8; // bigger at center
                const opacity = 1 - normalized * 0.5;

                return (
                  <motion.div
                    key={index}
                    style={{ scale, opacity }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-[#87BC25] rounded-full flex flex-col justify-center items-center text-white text-center shadow-lg">
                      <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {item.value}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base mt-1">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestorAbout;
