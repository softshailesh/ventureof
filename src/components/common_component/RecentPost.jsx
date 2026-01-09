import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/600/350?random=301",
    title: "Don’t Let Taxes EAT Your Profits!",
    desc: "Did you know that baby boomers are predicted to sell massive businesses...",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/350?random=302",
    title:
      "Don’t Get Burned by Equity! Non-Qualified Deferred Compensation Plans",
    desc: "Tired of hearing that equity is the only way to reward employees?",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/350?random=303",
    title: "From Broke to Billions: The REAL Founder Mindset Formula",
    desc: "Have you ever hit rock bottom, feeling lost and overwhelmed?",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/350?random=304",
    title: "How To Prepare Your Startup For Investors",
    desc: "Here’s everything your startup must have before pitching...",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RecentPost = () => {
  const ITEMS = 3;
  const [page, setPage] = useState(0);

  const start = page * ITEMS;
  const selected = posts.slice(start, start + ITEMS);

  const next = () => start + ITEMS < posts.length && setPage(page + 1);
  const prev = () => page > 0 && setPage(page - 1);

  return (
    <section className="w-full bg-[#eaf3f2] py-16">
      <div className="mx-auto px-6">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-semibold text-[#093a30] mb-10"
        >
          Recent Post
        </motion.h2>

        <AnimatePresence mode="wait">
          {selected.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white rounded-lg shadow flex flex-col md:flex-row overflow-hidden mb-6"
            >
              {/* Left Side Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-[35%] h-52 object-cover"
              />

              {/* Right Side Text */}
              <div className="p-6 flex flex-col justify-center md:w-[65%]">
                <h3 className="text-xl md:text-[22px] font-bold text-[#093a30] leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">{post.desc}</p>

                <button className="bg-[#74c21f] text-white  rounded-md  mt-4 shadow hover:scale-105 transition w-[113px] h-12">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Pagination Buttons */}
        <div className="flex mt-8">
          <button
            onClick={prev}
            className="bg-white shadow w-16 h-12 flex items-center justify-center  hover:bg-gray-100"
            disabled={page === 0}
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <button
            onClick={next}
            className="bg-white shadow w-16 h-12 flex items-center justify-center  hover:bg-gray-100"
            disabled={start + ITEMS >= posts.length}
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
