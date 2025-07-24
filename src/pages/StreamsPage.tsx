import type { FC } from "react";
import ContentSearchHeader from "../components/ContentSearchHeader";
import { BookOpen, Globe, Users } from "lucide-react";

// Dummy data
const dummyStreams = [
  {
    id: 1,
    title: "Marketing Insights",
    description: "Latest trends and tips from top marketing blogs.",
    source: "RSS Feed",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
  },
  {
    id: 2,
    title: "Startup Discussions",
    description: "Tech and startup discussions from Reddit and LinkedIn.",
    source: "Reddit + LinkedIn",
    icon: <Users className="w-5 h-5 text-green-600" />,
  },
  {
    id: 3,
    title: "Inspiration Quotes",
    description: "Motivational quotes and ideas from popular pages.",
    source: "Facebook",
    icon: <BookOpen className="w-5 h-5 text-purple-600" />,
  },
];

const StreamsPage: FC = () => {
  return (
    <div className="p-6 space-y-10">
      <ContentSearchHeader />

      <section className="p-6 bg-white rounded-xl shadow-md">
        <header className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Streams</h2>
            <a
              href="#"
              className="text-[#03045E] font-semibold text-sm hover:underline"
            >
              See all
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Streams are collections of content feeds (from Facebook, LinkedIn,
            Reddit, and RSS) created by other Scheduler users.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyStreams.map((stream) => (
            <div
              key={stream.id}
              className="border rounded-xl p-4 bg-gray-50 hover:bg-white shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-gray-100">
                  {stream.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{stream.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{stream.description}</p>
              <p className="text-xs text-gray-400 mt-2">
                Source: {stream.source}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StreamsPage;
