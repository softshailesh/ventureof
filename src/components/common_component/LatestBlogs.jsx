import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";

const blogs = [
  { id: 1, image: "https://picsum.photos/600/350?random=201", title: "The Future Of Investing Sustainable Investing Unwrapped", desc: "In this episode of Angels Exits and Acquisitions host Heff Barnes Sitsdown with Brain Fitzpatrick.....", date: "January 9, 2025", comments: "No Comment", },
  { id: 2, image: "https://picsum.photos/600/350?random=202", title: "From Startup To Exit: The Playbook for Creating a Business That Sells", desc: "Heff Barnes interviews Brain Fitzpatrick about scaling a business.....", date: "January 10, 2025", comments: "No Comment", },
  { id: 3, image: "https://picsum.photos/600/350?random=203", title: "Don’t Let Taxes Eat Your Profits", desc: "Baby boomers will sell ₹200 trillion worth of business next decade.....", date: "January 11, 2025", comments: "No Comment", },
  { id: 4, image: "https://picsum.photos/600/350?random=204", title: "Why Most Founders Fail During Due Diligence", desc: "Learn how to prepare your documents for investors.....", date: "January 12, 2025", comments: "5 Comments", },
  { id: 5, image: "https://picsum.photos/600/350?random=205", title: "Why Most Founders Fail During Due Diligence", desc: "Learn how to prepare your documents for investors.....", date: "January 12, 2025", comments: "5 Comments", },
  { id: 6, image: "https://picsum.photos/600/350?random=206", title: "Why Most Founders Fail During Due Diligence", desc: "Learn how to prepare your documents for investors.....", date: "January 12, 2025", comments: "5 Comments", },
  { id: 7, image: "https://picsum.photos/600/350?random=207", title: "Why Most Founders Fail During Due Diligence", desc: "Learn how to prepare your documents for investors.....", date: "January 12, 2025", comments: "5 Comments", },
];

const cardFade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LatestBlogs = () => {
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const selectedBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (startIndex + ITEMS_PER_PAGE < blogs.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section className="w-full bg-[#798980] bg-opacity-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-10">
          Latest Blogs
        </h2>

        {/* ARROWS + BLOGS WRAPPER */}
        <div className="flex items-center justify-center gap-6">

          {/* LEFT BUTTON */}
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 w-10 h-10 flex items-center justify-center 
                        text-gray-800 disabled:opacity-40"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* BLOG CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <AnimatePresence mode="wait">
              {selectedBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={cardFade}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="bg-white rounded-lg shadow flex flex-col overflow-hidden h-[520px]"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[220px] object-cover"
                  />

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#0e3b32] leading-snug h-[60px] line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2 h-[70px] line-clamp-3">
                      {blog.desc}
                    </p>

                    <button className="bg-[#74c21f] text-white px-5 py-2 rounded-md shadow hover:scale-105 transition mt-auto w-fit">
                      Read More
                    </button>
                  </div>

                  <div className="border-t px-5 py-3 flex justify-between text-gray-600 text-sm">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {blog.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaCommentDots /> {blog.comments}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextPage}
            disabled={startIndex + ITEMS_PER_PAGE >= blogs.length}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 w-10 h-10 flex items-center justify-center 
                        text-gray-800 disabled:opacity-40"
          >
            <FaChevronRight className="text-xl" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
