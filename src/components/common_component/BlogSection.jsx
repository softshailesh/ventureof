import React from "react";
import approach from "../../assets/approach.png"
import targeting from "../../assets/targeting.png"

export default function CardsSection() {
  const cards = [
    {
      title: "Our Approach",
      img: [approach],
      color: "bg-[#42b87c]",
      points: [
        "Identify promising founders and ideas",
        "Evaluate market potential, traction, and execution capability",
        "Invest capital aligned with growth milestones",
        "Support startups with hands-on involvement",
        "Scale through follow-on funding and strategic partnerships"
      ],
    },
    {
      title: "Our Vision",
      img: [targeting]  ,
      desc :"",
      color: "bg-[#42b87c]",
      points: ["To build a strong ecosystem where innovative startups thrive and investors participate in meaningful, long-term value creation."],
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-12 py-16 bg-white blogsection" >
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-white w-80 shadow-xl rounded-3xl pt-24 pb-10 px-8 text-center relative md:mt-0 sm:mt-40"
        >
          {/* Floating Color Image Box */}
          <div
            className={`absolute -top-14 left-1/2 -translate-x-1/2 ${c.color} w-32 h-32 rounded-xl flex justify-center items-center shadow-lg`}
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Heading */}
          <h3 className="font-bold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] relative z-10">{c.title}</h3>

          {/* Description */}
          {c.desc && (
            <p className="text-gray-500 mt-4 leading-relaxed text-sm">
              {c.desc}
            </p>
          )}

          {/* Bullet Points for Approach */}
          {c.points.length > 0 && (
            <ul className="mt-6 text-gray-600 space-y-2 text-left mx-auto w-fit">
              {c.points.map((pt, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

