import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { contentData, star_active, contentTags } from "../data";
import Button from "../components/Button/Button";

const Content = () => {
  return (
    <section className="px-4 lg:px-8 py-10 space-y-10 bg-white">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Content</h1>
        <Button className="bg-[#03045E] hover:bg-[#023e8a] text-white font-medium py-2 px-4 rounded-lg transition">
          Create Post
        </Button>
      </header>

      {/* Question Cards */}
      <div className="relative">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
            <ChevronLeft />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-8 scroll-smooth">
          {contentData.questions.map((q, idx) => (
            <div
              key={idx}
              className="min-w-[250px] sm:min-w-[300px] bg-gradient-to-tr from-indigo-50 to-blue-100 border border-blue-200 text-blue-900 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="font-semibold">{q}</p>
            </div>
          ))}
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Post Content Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Post Content</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentData.content.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
              <div className="flex-1">
                <h5 className="text-gray-800 font-bold">{item.title}</h5>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <ChevronDown className="text-gray-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Tags Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Tags</h2>
        <div className="relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
              <ChevronLeft />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto px-10 no-scrollbar scroll-smooth">
            {contentTags.map((tag, index) => (
              <span
                key={index}
                className="whitespace-nowrap px-4 py-2 text-sm bg-gray-100 border border-gray-200 rounded-full font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer transition"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Recent Quotes Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Recent Quotes</h2>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentData.quotes.map((quote, index) => (
            <div
              key={index}
              className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 text-sm mb-2">"{quote.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600">
                  #{quote.tag}
                </span>
                <div className="flex gap-1">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <img
                        key={i}
                        src={star_active}
                        alt="star"
                        className="w-4 h-4 transition hover:scale-110"
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Post Ideas Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Post Ideas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentData.ideas.map((idea, index) => (
            <Link
              to="#"
              key={index}
              className="block p-4 border bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="font-bold text-gray-800 mb-1">{idea.title}</h3>
              <p className="text-sm text-gray-600">{idea.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Content;
