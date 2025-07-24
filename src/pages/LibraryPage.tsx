import ContentSearchHeader from "../components/ContentSearchHeader";
import gallery_3 from "../assets/gallery_3.png";

const LibraryPage = () => {
  return (
    <div className="p-6 space-y-10">
      <ContentSearchHeader />

      <section className="p-6 bg-white rounded-xl shadow-md">
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-10">
          {/* Image */}
          <div className="w-48 h-48">
            <img
              src={gallery_3}
              alt="Library Empty"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text */}
          <h1 className="text-xl font-semibold text-gray-800">
            No content in your library
          </h1>

          {/* Upload Box */}
          <div className="flex flex-col items-center gap-3">
            <label className="cursor-pointer bg-blue-50 border border-blue-200 rounded-md px-5 py-3 text-blue-600 hover:bg-blue-100 transition">
              + Upload content
              <input
                type="file"
                className="hidden"
                accept=".jpeg,.pjpeg,.png,.x-png,.gif,.jpg,.3g2,.3gp,.3gpp,.asf,.avi,.dat,.flv,.x-flv,.m4v,.x-m4v,.mkv,.mod,.mov,.mp4,.mpe,.mpeg,.mpeg4,.mpg,.nsv,.ogm,.ogv,.qt,.tod,.vob,.wmv,.quicktime,.x-ms-wmv,.webm,.x-matroska"
              />
            </label>
            <p className="text-sm text-gray-500">
              Supported formats: images, videos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;
