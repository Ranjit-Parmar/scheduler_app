import { NavLink } from "react-router-dom";
import Button from "./Button/Button";
import calendar_icon from "../assets/calendar.png";
import bucket_icon from "../assets/bucket.png";
import camera_icon from "../assets/camera.png";

const trainingLinks = [
  { label: "Getting Started", to: "getting_started" },
  { label: "Posting Plans", to: "plans", icon: calendar_icon },
  { label: "Buckets", to: "buckets", icon: bucket_icon },
  { label: "Content Curation", to: "content", icon: camera_icon },
];

const TrainingSidebar = () => {
  return (
    <aside className="w-full max-w-xs h-full p-6">
      {/* Create Post Button */}
      <div className="mb-6">
        <Button className="w-full bg-[#03045E] hover:bg-[#023e8a] text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          Create Post
        </Button>
      </div>

      {/* Training Navigation Section */}
      <nav className="space-y-1">
        <h2 className="text-gray-800 text-2xl font-bold mb-3">Video Training</h2>

        {trainingLinks.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg font-bold transition duration-150 ${
                isActive
                  ? "bg-gray-100 text-blue-700"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon && (
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
            )}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default TrainingSidebar;
