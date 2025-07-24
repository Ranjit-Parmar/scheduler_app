import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";
import schedule_book from "../assets/schedule_book.jpg"

const MostRecentQuotes = () => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Most Recent</h2>
        <div className="flex items-center gap-2">
          <a className="text-blue-600 hover:underline text-sm">Quotes</a>
          <button className="bg-gray-100 text-sm px-4 py-1 rounded-md hover:bg-gray-200">
            <span>Articles</span>
          </button>
        </div>
      </header>

      <div className="relative">
        {/* Carousel Controls */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
        >
          <MoveLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
        >
          <MoveRight />
        </button>

        {/* Carousel Content */}
        <ul
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-6"
        >
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className="min-w-[300px] bg-gray-100 rounded-lg p-4 flex-shrink-0"
            >
              <div className="space-y-2">
                <time className="text-xs text-gray-500">6 days ago</time>
                <a className="block text-sm font-medium text-blue-600 hover:underline">
                  Wisdom Quotes & Stories
                </a>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-500">❤️</button>
                  <button className="text-sm text-gray-500">💬</button>
                  <button className="text-sm text-gray-500">🔗</button>
                </div>
                <div className="mt-2">
                  <a className="block">
  <img
    src={schedule_book}
    alt="Preview"
    className="w-full h-40 object-cover rounded-md mb-2"
  />
</a>

                  <div className="text-sm text-gray-600">
                    <p>
                      <a className="hover:underline" href="#">
                        wisdomlovequotes.com
                      </a>
                    </p>
                    <h5 className="font-semibold mt-1">
                      <a className="hover:underline" href="#">
                        If something doesn’t make you happy, let it go
                      </a>
                    </h5>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <span>⭐ 5</span>
                      <span>SHARES: 203</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MostRecentQuotes;
