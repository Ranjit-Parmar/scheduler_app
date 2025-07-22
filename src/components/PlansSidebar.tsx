import { ArrowDownWideNarrow, ChevronDown, CirclePlus, Grip, Menu, Pencil, X } from 'lucide-react';
import Button from './Button/Button';
import { useState } from 'react';



const PlanModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-24">
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-45 bg-black backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-xl p-6 space-y-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">Create a new posting plan</h2>

        {/* Plan Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Plan Name</label>
          <input
            type="text"
            placeholder="Enter plan name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Profiles Buttons */}
        <div className='flex justify-between items-center'>
          <p className="text-sm font-semibold text-gray-700 mb-2">Profiles</p>
          <div>
<button
      className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] text-[#03045E]`}
  
    >
      <Grip className="w-4 h-4" strokeWidth="3px" />
    </button>
    <button
      className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] text-gray-400`}

    >
      <Menu className="w-4 h-4" strokeWidth="3px" />
    </button>
    <button
      className={`p-2 rounded hover:bg-blue-100 hover:text-[#03045E] text-gray-400`}

    >
      <ArrowDownWideNarrow className="w-4 h-4" strokeWidth="3px" />
    </button>
          </div>
        </div>

        {/* Posting Times */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Posting Times</p>
          <Button className="bg-gray-100 hover:bg-blue-100 text-sm font-medium text-[#03045E] rounded-md">
            Copy from: None
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t">
          <span
            role="button"
            className="text-blue-600 text-sm font-medium hover:underline cursor-pointer"
          >
            Select all
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-blue-100 text-sm"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded text-white bg-[#03045E] hover:bg-[#023e8a] text-sm">
              Create New Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




const PlansSidebar = () => {
   const [activeIcon, setActiveIcon] = useState("Grid");
  const [isProfilesOpen, setIsProfilesOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);


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
        <h2 className="text-gray-800 text-2xl font-bold mb-3">Posting Plan</h2>
        <div className='text-sm font-bold text-[#03045E] cursor-pointer' onClick={() => setShowModal(true)}>+ Create new plan</div>
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
      {showModal && <PlanModal onClose={() => setShowModal(false)} />}
    </aside>
  );
}

export default PlansSidebar