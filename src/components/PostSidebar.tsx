import {
  ArrowDownWideNarrow,
  ChevronDown,
  CirclePlus,
  Grip,
  Menu,
  Pencil,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "./Button/Button";
import CreateBucketModel from "./CreateBucketModel";
import { useState } from "react";

const postsLinks = [
  { label: "Planned", to: "planned" },
  {
    label: "Buckets",
    to: "buckets",
    subContent: [{ label: "+ Create new bucket" }],
  },
  { label: "Drafts", to: "drafts" },
];

const PostSidebar = () => {
  const [activeSection, setActiveSection] = useState("Planned");
  const [activeIcon, setActiveIcon] = useState("Grid");
  const [isProfilesOpen, setIsProfilesOpen] = useState(true);
  const [isBucketsOpen, setIsBucketsOpen] = useState(false);
  const [showCreateBucketModal, setShowCreateBucketModal] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside className="w-full max-w-xs h-full p-6 space-y-6 z-10">
        {/* Create Post Button */}
        <div>
          <Button className="w-full bg-[#03045E] hover:bg-[#023e8a] text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Create Post
          </Button>
        </div>

        {/* Posts Nav */}
        <nav className="space-y-1">
          <h2 className="text-gray-800 text-2xl font-bold mb-3">Posts</h2>
          {postsLinks.map((link) => (
            <div key={link.label} className="space-y-1">
              <div className="flex items-center justify-between">
                <NavLink
                  onClick={() => setActiveSection(link.label)}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg font-bold transition duration-150 w-full ${
                      isActive
                        ? "bg-gray-100 text-blue-700"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>

                {link.label === "Buckets" && (
                  <button
                    onClick={() => setIsBucketsOpen((prev) => !prev)}
                    className="p-1"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-gray-600 transform transition-transform duration-300 ${
                        isBucketsOpen ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Buckets Sub Items */}
              {link.label === "Buckets" && (
                <div
                  className={`transition-all duration-300 overflow-hidden ml-4 pl-2 text-sm text-gray-600 border-l border-gray-200 ${
                    isBucketsOpen
                      ? "max-h-24 opacity-100 mt-1"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.subContent?.map((item, index) => (
                    <div
                      key={index}
                      className="py-1 cursor-pointer hover:text-blue-700"
                      onClick={() => setShowCreateBucketModal(true)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Conditionally Hidden Sections */}
        {activeSection !== "Buckets" && (
          <>
            {/* Profile Section */}
            <section className="border-t border-gray-300 pt-3">
              <div
                className="flex items-center justify-between text-sm font-bold text-gray-700 mb-2 cursor-pointer select-none"
                onClick={() => setIsProfilesOpen((prev) => !prev)}
              >
                <span>PROFILES</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isProfilesOpen ? "" : "-rotate-90"
                  }`}
                />
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isProfilesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex items-center justify-evenly mb-4 mt-2">
                  <button
                    className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] ${
                      activeIcon === "Grid"
                        ? "text-[#03045E]"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveIcon("Grid")}
                  >
                    <Grip className="w-4 h-4" strokeWidth="3px" />
                  </button>
                  <button
                    className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] ${
                      activeIcon === "List"
                        ? "text-[#03045E]"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveIcon("List")}
                  >
                    <Menu className="w-4 h-4" strokeWidth="3px" />
                  </button>
                  <button
                    className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] ${
                      activeIcon === "Network"
                        ? "text-[#03045E]"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveIcon("Network")}
                  >
                    <ArrowDownWideNarrow className="w-4 h-4" strokeWidth="3px" />
                  </button>
                </div>

                <div className="h-24 border border-gray-400 flex flex-col justify-center items-center">
                  <button className="p-2 rounded hover:bg-blue-50 border border-blue-100">
                    <CirclePlus className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>
            </section>

            {/* Lists Section */}
            <section className="border-t border-gray-300 py-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-700 mb-2">
                <span>Lists</span>
                <button className="p-1 rounded hover:bg-gray-100">
                  <Pencil className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="radio" name="list" className="accent-blue-600" />
                  <span className="flex justify-between w-full">
                    <span>All</span>
                    <span className="text-gray-500">(0)</span>
                  </span>
                </label>
              </div>
            </section>
          </>
        )}
      </aside>

      {/* MODAL: CreateBucketModel */}
      {showCreateBucketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm">
          <CreateBucketModel onClose={() => setShowCreateBucketModal(false)} />
        </div>
      )}
    </>
  );
};

export default PostSidebar;
