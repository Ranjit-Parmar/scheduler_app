import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import shuffle from "../assets/shuffle.png";
import facebook from "../assets/facebook.png";

// Tags Array
const tags = [
  "Quotes Images",
  "Digital Marketing",
  "Best of Reddit",
  "Popular",
  "Fitness & Health",
  "Nature & Wildlife",
  "Industries",
];

// Quotes Image Data
const quotes = [
  { title: "Quotes", icons: [facebook, facebook, facebook] },
  { title: "Inspiration", icons: [facebook, facebook, facebook] },
  { title: "Motivation", icons: [facebook, facebook, facebook] },
];

const PopularContentStreams = () => {
  const tagRef = useRef<HTMLUListElement>(null);
  const cardRef = useRef<HTMLUListElement>(null);
  const [selectedTag, setSelectedTag] = useState<string>("Quotes Images");

  const scroll = (
  ref: React.RefObject<HTMLUListElement | null>,
  direction: "left" | "right"
) => {
  if (ref.current) {
    ref.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }
};


  return (
    <section className="p-6 bg-white rounded-xl shadow-md space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Popular Content Streams</h2>
        <span className="flex items-center gap-2 text-sm text-gray-600">
          <img src={shuffle} alt="shuffle" className="w-5 h-5" />
          random
        </span>
      </div>

      {/* Tag Carousel */}
      <div className="relative">
        <button
          onClick={() => scroll(tagRef, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <MoveLeft size={18} />
        </button>
        <button
          onClick={() => scroll(tagRef, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <MoveRight size={18} />
        </button>
        <ul
          ref={tagRef}
          className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-8 py-2"
        >
          {tags.map((tag, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full whitespace-nowrap text-sm transition font-medium ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Quotes Images Carousel */}
      <div className="relative">
        <h3 className="text-base font-semibold text-gray-700 mb-2">
          See All Quotes Images
        </h3>
        <button
          onClick={() => scroll(cardRef, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <MoveLeft size={18} />
        </button>
        <button
          onClick={() => scroll(cardRef, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <MoveRight size={18} />
        </button>
        <ul
          ref={cardRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-8 py-2"
        >
          {quotes.map((item, index) => (
            <li
              key={index}
              className="min-w-[11rem] flex-shrink-0 flex flex-col items-center py-6 rounded-2xl transition-transform duration-300 hover:scale-110 shadow-md bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white"
            >
              <h5 className="font-semibold text-center mb-6 text-lg">{item.title}</h5>
              <div className="relative w-28 h-16 flex justify-center items-center">
                <div className="absolute left-0 z-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex justify-center items-center scale-90">
                  <img src={item.icons[0]} alt="left" className="w-6 h-6" />
                </div>
                <div className="z-10 w-14 h-14 rounded-full bg-white flex justify-center items-center shadow-lg">
                  <img src={item.icons[1]} alt="center" className="w-7 h-7" />
                </div>
                <div className="absolute right-0 z-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex justify-center items-center scale-90">
                  <img src={item.icons[2]} alt="right" className="w-6 h-6" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularContentStreams;
