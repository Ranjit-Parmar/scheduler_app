
import CalendarView from "../components/CalendarView";
import { Link } from "react-router-dom";
import { CircleQuestionMark } from "lucide-react";

const PlannedDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Manage your planned posts
        </h2>
        <p className="mb-4 text-base">
        You can <strong>edit, delete, re-order, shuffle</strong> or <strong>copy</strong> your posts.
        You can also <strong>search and filter</strong> posts via the search box. Click any post to see a <strong>post preview</strong>.
      </p>

        {/* Help Links */}
        <div className="space-y-2">
          <Link
            to="#"
            className="flex text-base font-medium items-center space-x-2 text-blue-700 hover:underline hover:text-blue-900 transition"
          >
            <CircleQuestionMark className="w-5 h-5" />
            <span> 5 ways to add posts quickly</span>
          </Link>
        </div>
      </div>


      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">Calendar</button>
        <button className="bg-gray-200 px-3 py-1 text-sm rounded">List</button>
        <button className="bg-gray-200 px-3 py-1 text-sm rounded">Grid</button>
      </div>
      <CalendarView />
    </div>
  );
};

export default PlannedDashboard;
