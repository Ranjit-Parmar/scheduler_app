import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import img_arrowdropdown from "../assets/img_arrowdropdown.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white px-8 w-full transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center max-w-screen-xl h-[80px]">
        <img
          src={logo}
          alt="Schedulur Logo"
          className="h-auto"
        />

        <nav className="flex flex-row items-center gap-8">
          <div className="flex flex-row items-center gap-8">
            <div className="flex text-lg font-semibold leading-[27px] cursor-pointer hover:text-[#03045E]">
            <span >
              Features
            </span>
            <img
              src={img_arrowdropdown}
              alt="Dropdown"
            />
            </div>
            <span className="text-lg font-semibold leading-[27px] cursor-pointer hover:text-[#03045E]">
              Pricing
            </span>
            <span className="text-lg font-semibold leading-[27px] cursor-pointer hover:text-[#03045E]">
              How It Works
            </span>
            <span className="text-lg font-semibold leading-[27px] cursor-pointer hover:text-[#03045E]">
              <Link to={"/dashboard"}>Login</Link>
            </span>
          </div>
          <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium">Try it for FREE</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
