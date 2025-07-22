import { ArrowDownWideNarrow, ChevronDown, CirclePlus, Grip, Menu, Pencil } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Button from './Button/Button';
import { useState } from 'react';

const historyLinks = [
  { label: "Posted", to: "posted" },
  { label: "Failed", to: "failed" },
];

const HistorySidebar = () => {
  const [activeIcon, setActiveIcon] = useState("Grid");
  const [isProfilesOpen, setIsProfilesOpen] = useState(true);


  return (
    <aside className="w-full max-w-xs h-full p-6 space-y-6">
      {/* Create Post Button */}
      <div>
        <Button className="w-full bg-[#03045E] hover:bg-[#023e8a] text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          Create Post
        </Button>
      </div>

      {/* History Nav */}
      <nav className="space-y-1">
        <h2 className="text-gray-800 text-2xl font-bold mb-3">History</h2>
        {historyLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-bold transition duration-150 ${
                isActive
                  ? "bg-gray-100 text-blue-700"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Profiles Section */}
      <section className='border-t-[1px] border-gray-300 pt-3'>
        <div
          className="flex items-center justify-between text-sm font-bold text-gray-700 mb-2 cursor-pointer select-none"
          onClick={() => setIsProfilesOpen((prev) => !prev)}
        >
          <span>PROFILES</span>
          <ChevronDown
            className={`w-4 h-4 transform transition-transform duration-200 ${isProfilesOpen ? "" : "-rotate-90"
              }`}
          />
        </div>

       <div
  className={`transition-all duration-300 overflow-hidden ${isProfilesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
>
  <div className="flex items-center justify-evenly mb-4 mt-2">
    <button
      className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] ${activeIcon === "Grid" ? "text-[#03045E]" : "text-gray-400"}`}
      onClick={() => setActiveIcon("Grid")}
    >
      <Grip className="w-4 h-4" strokeWidth="3px" />
    </button>
    <button
      className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] ${activeIcon === "List" ? "text-[#03045E]" : "text-gray-400"}`}
      onClick={() => setActiveIcon("List")}
    >
      <Menu className="w-4 h-4" strokeWidth="3px" />
    </button>
    <button
      className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] ${activeIcon === "Network" ? "text-[#03045E]" : "text-gray-400"}`}
      onClick={() => setActiveIcon("Network")}
    >
      <ArrowDownWideNarrow className="w-4 h-4" strokeWidth="3px" />
    </button>
  </div>

  <div className='h-24 border-gray-400 border flex flex-col justify-center items-center'>
    <button className="p-2 rounded hover:bg-blue-50 border border-blue-100">
      <CirclePlus className="w-5 h-5 text-blue-600" />
    </button>
  </div>
</div>

      </section>

      {/* Lists Section */}
      <section className='border-t-[1px] border-gray-300 py-3'>
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
    </aside>
  );
};

export default HistorySidebar;
