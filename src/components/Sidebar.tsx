import { NavLink, useLocation, useMatch } from "react-router-dom";
import {
  Image,
  List,
  CalendarDays,
  Settings,
  History,
  CirclePlay
} from "lucide-react";
import logo_icon from "../assets/logo_icon.png"

type NavItem = {
  to: string;
  icon: React.ElementType;
  label: string;
};

const navItems: NavItem[] = [
  {
    to: "/dashboard/posts",
    icon: List,
    label: "Posts",
  },
  {
    to: "/dashboard/content",
    icon: Image,
    label: "Content",
  },
  {
    to: "/dashboard/plans",
    icon: CalendarDays,
    label: "Plans",
  },
  {
    to: "/dashboard/history",
    icon: History,
    label: "History",    
  },
  {
    to: "/dashboard/training",
    icon: CirclePlay,
    label: "Training",
  },
  {
    to: "/dashboard/settings",
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="flex">
      {/* Icon-only Sidebar */}
      <aside className="w-[65px] bg-gray-200 min-h-screen flex flex-col items-center py-6 space-y-8 shadow">
        <img src={logo_icon} alt="Logo" className="w-auto" />

        <nav className="flex flex-col space-y-6 text-gray-700">
          {navItems.map(({ to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={() =>
                `p-2 rounded hover:bg-[#03045E] hover:text-white transition-colors duration-200 ${
                  location.pathname.startsWith(to)
                    ? "bg-[#03045E] text-white"
                    : ""
                }`
              }
            >
              <Icon className="w-6 h-6" />
            </NavLink>
          ))}
        </nav>
      </aside>

      
    </div>
  );
};

export default Sidebar;
