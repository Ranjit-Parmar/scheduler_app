import { useEffect, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ChevronDown,
  Grip,
  Menu,
  Users,
} from "lucide-react";
import BucketIcon from "./BucketIcon/BucketIcon";
import Button from "./Button/Button";
import add from "../assets/add.png";

interface CreateBucketModelProps {
  onClose: () => void;
}

const CreateBucketModel: React.FC<CreateBucketModelProps> = ({ onClose }) => {
  const [showProfilesModal, setShowProfilesModal] = useState(false);
  const [isBucketActive, setIsBucketActive] = useState(false);
  const [isGroupActive, setIsGroupActive] = useState(false);
  const [bucketName, setBucketName] = useState("");
  const [isActive, setIsActive] = useState("always");
  const [bucketDescription, setBucketDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("#3effff");
  const modalRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling of background when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        (!profileRef.current ||
          !profileRef.current.contains(event.target as Node))
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const hexColors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // If profile modal is open and click is outside profile modal, close it
      if (
        showProfilesModal &&
        profileRef.current &&
        !profileRef.current.contains(target)
      ) {
        setShowProfilesModal(false);
        return; // ✅ don't close CreateBucketModel
      }

      // If click is outside CreateBucketModel (modalRef), close it
      if (modalRef.current && !modalRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfilesModal, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div
        ref={modalRef}
        className="relative bg-white max-w-3xl w-full max-h-screen h-11/12 overflow-y-auto rounded-lg p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing on internal clicks
      >
        {/* Section 1 */}
        <div className="space-y-5 px-2 py-3">
          <h2 className="text-2xl font-bold text-gray-800">
            Create a new bucket — for any category of posts
          </h2>

          {/* Preview Card */}
          <article className="h-32 w-80 rounded-lg flex gap-2 mx-auto px-2 border border-gray-200">
            <div className="flex justify-center items-center">
              <BucketIcon size={80} color={selectedColor} />
            </div>
            <div className="w-full flex flex-col justify-center gap-2 overflow-hidden">
              <h5 className="font-bold text-sm break-words">
                {bucketName || "Your bucket name"}
              </h5>
              <p className="text-sm text-gray-500 break-words">
                {bucketDescription || "Your bucket description"}
              </p>
            </div>
          </article>

          {/* Step 1 */}
          <div className="text-lg font-bold flex gap-3">
            <span className="bg-blue-100 text-blue-700 rounded-full h-7 w-7 text-center leading-7">
              1
            </span>
            Choose a bucket name and color
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-3">
              <input
                className="w-full border border-gray-300 font-semibold h-10 p-2 rounded text-sm"
                placeholder="Enter bucket name"
                type="text"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}
              />
              <input
                className="w-full border border-gray-300 font-semibold h-10 p-2 rounded text-sm"
                placeholder="Enter bucket description"
                type="text"
                value={bucketDescription}
                onChange={(e) => setBucketDescription(e.target.value)}
              />
            </div>

            {/* Color Picker */}
            <div className="flex-1 flex flex-col gap-2 p-2">
              <div className="flex flex-wrap gap-1">
                {hexColors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 cursor-pointer border-2 rounded-full ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>

              <label className="flex items-center gap-3 text-sm font-semibold mt-3">
                <span>Custom color:</span>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-10 h-8 cursor-pointer rounded"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4 relative">
          <div>
            <div className="text-lg font-bold flex gap-3 items-center">
              <span className="bg-blue-100 text-blue-700 rounded-full h-7 w-7 text-center leading-7">
                2
              </span>
              Select the profiles your new bucket can post to
            </div>
            <p className="text-sm text-gray-600 ml-9 mt-2">
              When you compose a new post for this bucket, a unique version will
              be created for each profile. Choose your "ALL" list for the most
              flexibility.
            </p>
          </div>

          {/* Profile Toggle Button */}
          <div className="flex items-center gap-4 ml-9 relative">
            <button
              className="bg-gray-100 hover:bg-blue-100 text-sm font-semibold rounded-lg flex items-center gap-2 px-4 py-2 border border-gray-300"
              onClick={() => setShowProfilesModal(!showProfilesModal)}
            >
              <Users className="w-4 h-4" /> 0 Profile{" "}
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-300" />

            {/* Profile Modal */}
            {showProfilesModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
                <div
                  ref={profileRef}
                  className="bg-white z-100 w-[280px] rounded-xl shadow-xl border p-4"
                >
                  <div>
                    <span className="text-base font-semibold">PROFILES</span>
                    <div className="flex justify-center gap-3 mt-3">
                      <button className="p-2 rounded hover:bg-blue-100 hover:text-[#03045E]">
                        <Grip className="w-4 h-4" strokeWidth="3px" />
                      </button>
                      <button className="p-2 rounded hover:bg-blue-100 hover:text-[#03045E]">
                        <Menu className="p-2 rounded hover:bg-blue-100 hover:text-[#03045E]" />
                      </button>
                      <button className="p-2 rounded hover:bg-blue-100 hover:text-[#03045E]">
                        <ArrowDownWideNarrow
                          className="w-4 h-4"
                          strokeWidth="3px"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    You don't have any connected profiles.
                  </div>

                  <div className="flex items-center mt-3 gap-3">
                    <img src={add} alt="add_icon" className="h-9 w-9" />
                    <div className="flex-1 h-14 bg-gray-100 rounded-md border border-dashed border-gray-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 3 */}
        <div
          className="cursor-pointer my-6 flex items-center justify-between"
          onClick={() => setIsBucketActive((prev) => !prev)}
        >
          <div className="text-lg font-bold flex gap-3 items-center">
            <span className="bg-blue-100 text-blue-700 rounded-full h-7 w-7 text-center leading-7">
              3
            </span>
            Choose time period when bucket is active{" "}
            <span className="text-gray-500 text-sm font-normal">
              (optional)
            </span>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ${
              isBucketActive ? "" : "-rotate-90"
            }`}
          />
        </div>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isBucketActive
              ? "max-h-[200px] mt-2 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {/* Toggle Buttons */}
          <div className="flex gap-2 font-medium pl-9">
            <button
              onClick={() => setIsActive("always")}
              className={`px-4 py-2 text-sm border rounded-lg transition-all ${
                isActive === "always"
                  ? "bg-blue-100 text-[#03045E] border-blue-300"
                  : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
              }`}
            >
              Always
            </button>
            <button
              onClick={() => setIsActive("custom")}
              className={`px-4 py-2 text-sm border rounded-lg transition-all ${
                isActive === "custom"
                  ? "bg-blue-100 text-[#03045E] border-blue-300"
                  : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
              }`}
            >
              Custom time period
            </button>
          </div>

          {/* Date Pickers */}
          <div
            className={`flex items-center gap-3 font-medium text-sm mt-3 pl-9 transition-opacity ${
              isActive === "always"
                ? "opacity-50 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded border border-gray-300">
              <input type="date" className="bg-transparent outline-none" />
            </div>
            <span>to</span>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded border border-gray-300">
              <input type="date" className="bg-transparent outline-none" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div
          className="flex items-center justify-between my-4"
          onClick={() => setIsGroupActive((prev) => !prev)}
        >
          <div className="text-lg font-bold flex gap-3 items-center">
            <span className="bg-blue-100 text-blue-700 rounded-full h-7 w-7 text-center leading-7">
              4
            </span>
            Choose a group for your bucket (optional)
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ${
              isGroupActive ? "" : "-rotate-90"
            }`}
          />
        </div>

        <div
          className={`flex items-center gap-1 font-medium text-sm mt-3 pl-9 transition-all duration-300 overflow-hidden ${
            isGroupActive
              ? "max-h-[200px] mt-2 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <button className="px-3 py-2 rounded border border-gray-300 cursor-pointer bg-blue-100 text-[#03045E]">
            No Group
          </button>
          <div className="flex justify-center gap-1 items-center bg-gray-100 px-3 py-2 rounded border border-gray-300 cursor-pointer">
            <span>Select group</span>
            <ChevronDown size="15px" />
          </div>
          <span className="text-[#03045E] ml-3 cursor-pointer">
            + Add new group
          </span>
        </div>

        {/* Action Buttons */}
        <div className="w-full px-2 py-3 space-x-2 text-end">
          <Button className="bg-gray-100 px-3 py-1 border font-semibold rounded">
            Cancel
          </Button>
          <Button className="bg-[#03045E] text-white px-3 py-1 border font-semibold rounded">
            Save Bucket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateBucketModel;
