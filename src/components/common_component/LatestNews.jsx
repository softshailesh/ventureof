import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title: "From Startup To Exit: The Playbook for Creating a Business That Sells",
    date: "Jan 12, 2025",
  },
  {
    id: 2,
    title: "From Startup To Exit: The Playbook for Creating a Business That Sells",
    date: "Jan 12, 2025",
  },
  {
    id: 3,
    title: "From Startup To Exit: The Playbook for Creating a Business That Sells",
    date: "Jan 12, 2025",
  },
  {
    id: 4,
    title: "From Startup To Exit: The Playbook for Creating a Business That Sells",
    date: "Jan 12, 2025",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LatestNews = () => {
  const ITEMS = 3;
  const [page, setPage] = useState(0);

  const start = page * ITEMS;
  const selected = newsData.slice(start, start + ITEMS);

  const next = () => {
    if (start + ITEMS < newsData.length) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section className="w-full py-16 bg-[#eff5f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl text-center font-semibold text-[#093a30] mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Latest News
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <AnimatePresence mode="wait">
            {selected.map((news) => (
              <motion.div
                key={news.id}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="bg-white rounded-xl shadow p-6 flex flex-col justify-between h-[220px]"
              >
                <h3 className="text-xl font-semibold text-[#093a30] leading-snug">
                  {news.title}
                </h3>

                <div className="mt-5 flex flex-col justify-center items-center ">
                  <button className="bg-[#74c21f] px-5 py-2 text-white text-sm rounded shadow hover:scale-105 transition">
                    Read More
                  </button>

                  <p className="text-gray-600 text-xs mt-3">{news.date}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-400 transition"
            disabled={page === 0}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-400 transition"
            disabled={start + ITEMS >= newsData.length}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
