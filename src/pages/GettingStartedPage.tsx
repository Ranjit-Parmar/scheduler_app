import { CirclePlay } from "lucide-react";
import schedule_book from "../assets/schedule_book.jpg";

const GettingStartedPage = () => {
  const videos = [
    { title: "1. Connect your Profiles", link: "#" },
    { title: "2. Set up your Posting Plan", link: "#" },
    { title: "3. Create your post Buckets", link: "#" },
    { title: "4. Add your Content Sources", link: "#" },
    { title: "5. Create your First Posts", link: "#" },
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="bg-blue-50 border border-blue-200 shadow-sm rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
            Watch our training videos<br />to get up to speed!
          </h1>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Josh from Scheduler
            </h3>
            <p className="text-gray-600">
              Hey Ranjit! 👋 This is where you learn our most powerful features. 💪
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src={schedule_book}
            alt="Schedule Book"
            className="w-48 h-48 object-contain rounded-lg"
          />
        </div>
      </header>

      {/* Video Cards Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Get Started: 5 steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              className="relative rounded-lg overflow-hidden group bg-gray-100 hover:bg-gray-200 transition duration-200 p-4 shadow-sm"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <CirclePlay className="text-white w-10 h-10" />
              </div>

              {/* Dummy thumbnail */}
              <div className="h-32 bg-gray-300 rounded mb-3 flex items-center justify-center text-gray-500">
                Thumbnail
              </div>

              {/* Video title */}
              <div className="relative z-10">
                <h3 className="text-sm font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GettingStartedPage;
