import CalendarView from "../components/CalendarView";

const PostedPage = () => {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-5 rounded-lg text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Analyze and re-use your historical posts
        </h2>
        <p className="mb-4 text-base">
          To see <strong>top-performing posts,</strong> choose a time period and
          sort by Likes, shares, etc. You can{" "}
          <strong>re-add posts to your queue</strong>one at a time or in bulk.
        </p>
      </div>

      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">
          Calendar
        </button>
        <button className="bg-gray-200 px-3 py-1 text-sm rounded">List</button>
        <button className="bg-gray-200 px-3 py-1 text-sm rounded">Grid</button>
      </div>
      <CalendarView />
    </div>
  );
};

export default PostedPage;
