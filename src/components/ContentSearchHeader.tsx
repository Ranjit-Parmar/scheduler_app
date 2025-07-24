import fork_img from "../assets/fork.png";
import content_icon from "../assets/content_icon.png";
import { Search } from "lucide-react";
import type { ReactNode } from "react";

interface ContentSearchHeaderProps {
  children?: ReactNode; // Accept extra buttons like STREAMS
}

const ContentSearchHeader = ({ children }: ContentSearchHeaderProps) => {
  return (
    <div className="bg-[#F4E3F4] p-4 rounded-md space-y-3">
      {/* Top row: Search bar + SOURCES + CONTENT */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
        {/* Search Bar */}
        <div className="flex items-center gap-2 border rounded-md px-4 py-2 bg-white shadow-sm flex-1">
          <Search className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for social accounts, keywords, hashtags or websites"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* SOURCES + CONTENT Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-white font-bold text-sm border rounded-md bg-[#79367B] hover:bg-[#5a245c]">
            <img src={fork_img} alt="Fork icon" className="w-5 h-5" />
            SOURCES
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-white font-bold text-sm border rounded-md bg-[#79367B] hover:bg-[#5a245c]">
            <img src={content_icon} alt="Content icon" className="w-5 h-5" />
            CONTENT
          </button>
        </div>
      </div>

      {/* Additional Buttons (like STREAMS) shown only when passed */}
      {children && (
        <div className="flex flex-wrap gap-2 justify-start">{children}</div>
      )}
    </div>
  );
};

export default ContentSearchHeader;
