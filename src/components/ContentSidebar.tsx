import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Button from "./Button/Button";

type NavSubLink = {
  label: string;
  to?: string;
  isUploader?: boolean;
};

type NavLinkItem = {
  label: string;
  to?: string;
  collapsible?: boolean;
  subLinks?: NavSubLink[];
};

const navLinks: NavLinkItem[] = [
  { label: "Dashboard", to: "." },
  {
    label: "Streams",
    collapsible: true,
    to: "my-streams",
    subLinks: [{ label: "+ Create new stream", to: "search/sources" }],
  },
  {
    label: "Library",
    collapsible: true,
    to: "library",
    subLinks: [{ label: "+ Upload content", isUploader: true }],
  },
  { label: "Favorites", to: "favorites" },
  {
    label: "Studio",
    collapsible: true,
    to: "studio",
    subLinks: [
      { label: "Create image", to: "studio/image" },
      { label: "Create video", to: "studio/video" },
    ],
  },
];

const ContentSidebar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Streams: false,
    Library: false,
    Studio: false,
  });

  const navigate = useNavigate();

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleFileUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "*";
    input.multiple = true;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        console.log("Uploading files:", files);
        // Handle file upload here
      }
    };
    input.click();
  };

  return (
    <aside className="w-full max-w-xs h-full p-6">
      <div className="mb-6">
        <Button className="w-full bg-[#03045E] hover:bg-[#023e8a] text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          Create Post
        </Button>
      </div>

      <nav className="space-y-1">
        <h2 className="text-gray-800 text-2xl font-bold mb-3">Content</h2>

        {navLinks.map((link) => (
          <div key={link.label}>
            {link.collapsible && link.subLinks ? (
              <>
                {/* Text and Chevron separated */}
                <div className="w-full flex items-center justify-between px-4 py-2 rounded-lg font-bold text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition">
                  {/* Label (navigates) */}
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      if (link.label === "Studio") {
                        navigate("studio/image");
                      } else if (link.to) {
                        navigate(link.to);
                      }
                    }}
                  >
                    {link.label}
                  </span>


                  {/* Chevron (toggles) */}
                  <button onClick={() => toggleSection(link.label)}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSections[link.label] ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>
                </div>

                {/* SubLinks */}
                <div
                  className={`pl-8 pr-4 text-sm text-gray-600 transition-all duration-300 overflow-hidden ${
                    openSections[link.label]
                      ? "max-h-32 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.subLinks.map((sub) =>
                    sub.isUploader ? (
                      <button
                        key={sub.label}
                        onClick={handleFileUpload}
                        className="block py-1 text-left w-full hover:text-blue-700 transition"
                      >
                        {sub.label}
                      </button>
                    ) : (
                      <NavLink
                        key={sub.label}
                        to={sub.to!}
                        className="block py-1 hover:text-blue-700 transition"
                      >
                        {sub.label}
                      </NavLink>
                    )
                  )}
                </div>
              </>
            ) : (
              link.to && (
                <NavLink
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
              )
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default ContentSidebar;
