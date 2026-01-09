import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "https://picsum.photos/600/350?random=21",
    title: "Maximizing Business Success Through Strategic Planning and Innovation",
    desc: "In today’s rapidly evolving business landscape, strategic planning serves as the backbone of sustainable growth and competitive prowess. An effective business strategy not only streamlines operational efficiencies but also enhances … Maximizing Business Success Through Strategic Planning and Innovation Read More »",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/350?random=22",
    title: "Maximizing Business Success Through Strategic Planning and Innovation",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/350?random=23",
    title: "Maximizing Business Success Through Strategic Planning and Innovation",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TopBlogs = () => {
  return (
    <section className="w-full bg-[#eaf3f2] py-14">
      <div className="mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[36px] md:text-[42px] font-bold text-[#0e3b32] mb-10"
        >
          Top Blogs
        </motion.h2>

        {/* MAIN GRID  */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">

          {/* LEFT MAIN BLOG */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden p-1"
          >
            <img
              src={blogs[0].image}
              alt="Main Blog"
              className="w-full h-64 object-cover rounded-md"
            />

            <div className="mt-4 px-2">
              <h3 className="text-[32px] lg:text-[36px] font-semibold text-[#0e3b32] leading-snug">
                {blogs[0].title}
              </h3>

              <p className="text-gray-700 text-[18px] mt-3 leading-relaxed line-clamp-4">
                {blogs[0].desc}
              </p>

              <button className="bg-[#74c21f] text-white px-7 py-3 rounded-md shadow hover:scale-105 transition mt-4 text-lg font-semibold">
                Read More
              </button>
            </div>
          </motion.div>

          {/* RIGHT BLOG LIST */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 bg-white rounded-lg shadow-sm p-10"
          >
            {/* SEARCH BAR */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for events"
                className="w-full bg-white px-10 py-3 rounded-full shadow outline-none text-lg"
              />
              <FaSearch className="absolute left-4 top-3.5 text-gray-500 text-lg" />
            </div>

            {/* SMALL BLOG CARDS */}
            {blogs.slice(1).map((blog) => (
              <motion.div
                key={blog.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h4 className="text-2xl font-bold text-[#0e3b32] line-clamp-2">
                    {blog.title}
                  </h4>

                  <button className="bg-[#74c21f] text-white px-5 py-2 rounded-md shadow hover:scale-105 transition mt-3 text-lg font-semibold">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopBlogs;
