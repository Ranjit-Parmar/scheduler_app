import { NavLink } from "react-router-dom";
import Button from "./Button/Button";

const navLinks = [
  { label: "Social Networks", to: "social_networks" },
  { label: "Account", to: "account" },
  { label: "Team", to: "team" },
  { label: "Help Desk", to: "help_desk" },
  { label: "Log out", to: "/" },
];

const SettingsSidebar = () => {
  return (
    <aside className="w-full max-w-xs h-full p-6">
      {/* Create Post Button */}
      <div className="mb-6">
        <Button className="w-full bg-[#03045E] hover:bg-[#023e8a] text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          Create Post
        </Button>
      </div>

      {/* Navigation Section */}
      <nav className="space-y-1">
        <h2 className="text-gray-800 text-2xl font-bold mb-3">Settings</h2>

        {navLinks.map((link) => (
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
    </aside>
  );
};

export default SettingsSidebar;
