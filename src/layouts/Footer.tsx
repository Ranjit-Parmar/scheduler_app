import img_frame_14 from "../assets/img_frame_14.png";
import img_frame_18_32x32 from "../assets/img_frame_18_32x32.png";
import logo from "../assets/logo.png";
import img_frame_22 from "../assets/img_frame_22.png";
import img_frame_15 from "../assets/img_frame_15.png";
import img_frame_21 from "../assets/img_frame_21.png";
import img_frame_18 from "../assets/img_frame_18.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkClass =
    "text-base font-normal leading-6 text-[#03045E] hover:text-[#023e8a] transition-colors cursor-pointer";

  return (
    <footer className="w-full pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 md:gap-0">
            <img
              src={logo}
              alt="Schedulur Logo"
              className="h-auto"
            />
            <div className="flex flex-row items-center gap-4">
              <span className="text-xl font-normal leading-[30px] text-[#03045E]">
                Follow us
              </span>
              <div className="flex flex-row gap-3">
                <img src={img_frame_14} alt="Facebook" className="w-9 h-9" />
                <img src={img_frame_18_32x32} alt="Twitter" className="w-9 h-9" />
                <img src={img_frame_22} alt="Instagram" className="w-9 h-9" />
                <img src={img_frame_15} alt="LinkedIn" className="w-9 h-9" />
                <img src={img_frame_21} alt="Pinterest" className="w-9 h-9" />
                <img src={img_frame_18} alt="YouTube" className="w-9 h-9" />
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16 px-8">
            {/* Product Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold leading-[30px] text-[#03045E]">Product</h3>
              <nav className="flex flex-col gap-4" aria-label="Product links">
                <span className={linkClass}>Login</span>
                <Link to="#" className={linkClass}>Start Free Trial</Link>
                <span className={linkClass}>Pricing</span>
                <span className={linkClass}>Plan Details</span>
                <Link to="#" className={linkClass}>Local SEO</Link>
                <span className={linkClass}>New Features</span>
                <span className={linkClass}>iOS App</span>
                <Link to="#" className={linkClass}>Android App</Link>
                <span className={linkClass}>Affiliate Program</span>
              </nav>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold leading-[30px] text-[#03045E]">Support</h3>
              <nav className="flex flex-col gap-4" aria-label="Support links">
                <span className={linkClass}>Contact</span>
                <Link to="#" className={linkClass}>Help Center</Link>
                <Link to="#" className={linkClass}>Training Videos</Link>
                <span className={linkClass}>Cancellation</span>
                <Link to="#" className={linkClass}>Terms of Service</Link>
                <span className={linkClass}>Privacy Policy</span>
              </nav>
            </div>

            {/* Features Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold leading-[30px] text-[#03045E]">Features</h3>
              <nav className="flex flex-col gap-4" aria-label="Features links">
                <span className={linkClass}>All-in-One Tool</span>
                <Link to="#" className={linkClass}>Content Curation</Link>
                <Link to="#" className={linkClass}>Media Editor</Link>
                <Link to="#" className={linkClass}>Post Categories</Link>
                <Link to="#" className={linkClass}>AI Post Creator</Link>
                <Link to="#" className={linkClass}>Automated Scheduling</Link>
                <Link to="#" className={linkClass}>Social Analytics</Link>
                <span className={linkClass}>Mobile Apps</span>
              </nav>
            </div>

            {/* Integrations Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold leading-[30px] text-[#03045E]">Integrations</h3>
              <nav className="flex flex-col gap-4" aria-label="Integrations links">
                <span className={linkClass}>Facebook Scheduler</span>
                <span className={linkClass}>Instagram Scheduler</span>
                <span className={linkClass}>Google Business Scheduler</span>
                <span className={linkClass}>LinkedIn Scheduler</span>
                <span className={linkClass}>Pinterest Scheduler</span>
                <span className={linkClass}>TikTok Scheduler</span>
                <span className={linkClass}>Twitter/X Scheduler</span>
                <span className={linkClass}>Youtube Scheduler</span>
                <span className={linkClass}>Reddit Content</span>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span className={linkClass}>Unsplash,</span>
                  <span className={linkClass}>Pixabay,</span>
                  <span className={linkClass}>Pexels</span>
                  <span className={linkClass}>Content</span>
                </div>
              </nav>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold leading-[30px] text-[#03045E]">Resources</h3>
              <nav className="flex flex-col gap-4" aria-label="Resources links">
                <span className={linkClass}>Blog</span>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span className={linkClass}>Best</span>
                  <span className={linkClass}>Social</span>
                  <span className={linkClass}>Media</span>
                  <span className={linkClass}>Scheduling</span>
                  <span className={linkClass}>Tools</span>
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span className={linkClass}>Get</span>
                  <span className={linkClass}>More</span>
                  <span className={linkClass}>Likes</span>
                  <span className={linkClass}>on</span>
                  <span className={linkClass}>Facebook</span>
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span className={linkClass}>Get</span>
                  <span className={linkClass}>More</span>
                  <span className={linkClass}>Followers</span>
                  <span className={linkClass}>on</span>
                  <span className={linkClass}>Instagram</span>
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span className={linkClass}>Get</span>
                  <span className={linkClass}>More</span>
                  <span className={linkClass}>Followers</span>
                  <span className={linkClass}>on</span>
                  <span className={linkClass}>TikTok</span>
                </div>
              </nav>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center">
            <p className="text-sm font-normal leading-[22px] text-[#03045E]">
              &copy; 2024 Scheduler - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
