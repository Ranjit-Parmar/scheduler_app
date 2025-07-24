import facebook from "../assets/facebook.png";

const RecentlyViewedQuotes = () => {
  const recentQuotes = [
    { title: "Quotes", icons: [facebook, facebook, facebook] },
    { title: "Inspiration", icons: [facebook, facebook, facebook] },
    { title: "Motivation", icons: [facebook, facebook, facebook] },
    { title: "Success", icons: [facebook, facebook, facebook] },
    { title: "Wisdom", icons: [facebook, facebook, facebook] },
  ];

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recently Viewed</h2>
        <a
          href="#"
          className="text-[#03045E] font-semibold text-md hover:underline"
        >
          See all
        </a>
      </header>

      {/* Horizontal Scrollable Cards */}
      <ul className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2">
        {recentQuotes.map((quote, index) => (
          <li
            key={index}
            className="min-w-[11rem] flex-shrink-0 flex flex-col items-center py-6 px-4 rounded-2xl transition-transform duration-300 hover:scale-110 shadow-md bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white"
          >
            <h5 className="font-semibold text-center mb-6 text-lg">
              {quote.title}
            </h5>
            <div className="relative w-28 h-16 flex justify-center items-center">
              <div className="absolute left-0 z-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex justify-center items-center scale-90">
                <img src={quote.icons[0]} alt="left" className="w-6 h-6" />
              </div>
              <div className="z-10 w-14 h-14 rounded-full bg-white flex justify-center items-center shadow-lg">
                <img src={quote.icons[1]} alt="center" className="w-7 h-7" />
              </div>
              <div className="absolute right-0 z-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex justify-center items-center scale-90">
                <img src={quote.icons[2]} alt="right" className="w-6 h-6" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentlyViewedQuotes;
