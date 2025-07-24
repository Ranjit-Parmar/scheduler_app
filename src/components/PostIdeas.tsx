import { MoveLeft, MoveRight, Quote, Tag } from "lucide-react";
import { useRef, useState } from "react";
import shuffle from "../assets/shuffle.png";

// Tags Array
const tags = [
  "questions", "fill in the blank", "contents", "social media", "weekends | work", "music | culture | food | sports", "family | pets",
  "follower love", "trivia", "call to action", "insert brand", "promotional",
];

// Quotes Array
const quotes = [
  {
    id: 1,
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    tag: "motivation",
  },
  {
    id: 2,
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    tag: "philosophy",
  },
  {
    id: 3,
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    tag: "action",
  },
  {
    id: 4,
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
    tag: "happiness",
  },
  {
    id: 5,
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    tag: "resilience",
  },
];


const PostIdeas = () => {
    const tagRef = useRef<HTMLUListElement>(null);
      const cardRef = useRef<HTMLUListElement>(null);
      const [selectedTag, setSelectedTag] = useState<string>("all");
      const [search, setSearch] = useState<string>("");
    
      const scroll = (
        ref: React.RefObject<HTMLUListElement | null>,
        dir: "left" | "right"
      ) => {
        if (ref.current) {
          ref.current.scrollBy({
            left: dir === "left" ? -300 : 300,
            behavior: "smooth",
          });
        }
      };
    
      const filteredQuotes = quotes.filter((q) => {
        const matchesTag = selectedTag === "all" || q.tag === selectedTag;
        const matchesSearch =
          search.trim() === "" ||
          q.quote.toLowerCase().includes(search.toLowerCase()) ||
          q.author.toLowerCase().includes(search.toLowerCase());
        return matchesTag && matchesSearch;
      });
    
  return (
    <section className="p-6 bg-white rounded-xl shadow-md space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Post Ideas</h2>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="bg-gray-100 p-2 rounded-md flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search quotes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Tag Carousel */}
      <div className="relative">
        <button
          onClick={() => scroll(tagRef, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          aria-label="Scroll tags left"
        >
          <MoveLeft size={18} />
        </button>
        <button
          onClick={() => scroll(tagRef, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          aria-label="Scroll tags right"
        >
          <MoveRight size={18} />
        </button>
        <ul
          ref={tagRef}
          className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-8 py-2"
        >
          {tags.map((tag, idx) => (
            <li key={idx}>
              <button
                onClick={() => setSelectedTag(tag)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full whitespace-nowrap transition text-sm ${
                  selectedTag === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Quotes Carousel */}
      <div className="relative">
        <h3 className="text-base font-semibold text-gray-700 mb-2">See All Promotional</h3>
        <button
          onClick={() => scroll(cardRef, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          aria-label="Scroll quotes left"
        >
          <MoveLeft size={18} />
        </button>
        <button
          onClick={() => scroll(cardRef, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          aria-label="Scroll quotes right"
        >
          <MoveRight size={18} />
        </button>
        {filteredQuotes.length > 0 ? (
          <ul
            ref={cardRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-8 py-2"
          >
            {filteredQuotes.map((item) => (
              <li
                key={item.id}
                className="min-w-[250px] bg-gray-50 border border-gray-200 p-4 rounded-xl shadow hover:scale-105 transition-transform duration-200 ease-in-out flex-shrink-0"
              >
                <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">
                  <Quote size={16} />
                  <span>{item.tag}</span>
                </div>
                <p className="text-gray-800 text-base font-medium mb-2">“{item.quote}”</p>
                <p className="text-sm text-gray-500 italic text-right">– {item.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No quotes found.</p>
        )}
      </div>
    </section>
  )
}

export default PostIdeas