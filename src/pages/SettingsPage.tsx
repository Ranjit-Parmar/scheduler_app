import { CirclePlay, CircleQuestionMark, Grip, List } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import img_frame_14 from "../assets/img_frame_14.png"
import img_frame_15 from "../assets/img_frame_15.png"
import img_frame_16 from "../assets/img_frame_16.png"
import img_frame_17 from "../assets/img_frame_17.png"
import img_frame_18 from "../assets/img_frame_18.png"
import img_frame_19 from "../assets/img_frame_19.png"
import img_frame_20 from "../assets/img_frame_20.png"
import img_frame_21 from "../assets/img_frame_21.png"
import img_frame_22 from "../assets/img_frame_22.png"
import img_frame_20_32x32 from "../assets/img_frame_20_32x32.png"

const SettingsPage = () => {
  return (
    <div className="space-y-8 ">
      {/* Info Banner */}
      <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Connect and activate your social accounts
        </h2>
        <p className="mb-4 text-base">
          <strong>Social Networks</strong> is where you connect your social media accounts and activate profiles you want to post to.
        </p>

        {/* Help Links */}
        <div className="space-y-2">
          <Link to="#" className="flex text-base font-medium items-center space-x-2 text-blue-700 hover:underline hover:text-blue-900 transition">
            <CirclePlay className="w-5 h-5" />
            <span>How to connect your accounts</span>
          </Link>
          <Link to="#" className="flex text-base font-medium items-center space-x-2 text-blue-700 hover:underline hover:text-blue-900 transition">
            <CircleQuestionMark className="w-5 h-5" />
            <span>How to connect Instagram</span>
          </Link>
          <Link to="#" className="flex text-base font-medium items-center space-x-2 text-blue-700 hover:underline hover:text-blue-900 transition">
            <CircleQuestionMark className="w-5 h-5" />
            <span>How to reset a connection</span>
          </Link>
        </div>
      </div>

      {/* Plan Detail Section */}
      <div className="bg-white border flex justify-between items-center border-gray-200 rounded-lg p-6 shadow-sm">
        <div>
          <p className="text-lg font-semibold text-gray-800 mb-1">
            Current subscription plan: <span className="text-blue-600">Free</span>
          </p>
          <div className="flex items-center justify-start gap-4 text-sm text-gray-600">
            <span>
              Activated profiles: <strong>0</strong>
            </span>
            |
            <span>
              Limit for Free plan: <strong>1</strong>
            </span>
          </div>
          <p className="text-sm text-gray-700 mt-2">
            <strong>0 of 1</strong> profiles are activated for posting. Click profiles below to activate them.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium">Change Plan</Button>
          <Link
            to="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            See plan differences
          </Link>
        </div>
      </div>

     {/* Profile Activation Section */}
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  <div className="overflow-x-auto">
    <table className="w-full table-auto border-collapse text-sm text-left">
      <thead>
        <tr className="text-gray-600 border-b bg-gray-100">
          <th className="px-4 py-3 font-semibold">Network</th>
          <th className="px-4 py-3 font-semibold flex items-center gap-1">
            Connection <CircleQuestionMark className="inline text-[#03045E]" size="15px" strokeWidth="3px"/>
          </th>
          <th className="px-4 py-3 font-semibold">Status</th>
          <th className="px-4 py-3 font-semibold">Profiles</th>
          <th className="px-4 py-3 font-semibold flex items-center gap-2">
            <button className="p-1 hover:bg-gray-200 rounded">
              <Grip size="20px" strokeWidth="3px" />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <List size="20px" strokeWidth="3px" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 text-gray-700">
        {[
          { name: "Facebook", img: img_frame_14 },
          { name: "Instagram", img: img_frame_15 },
          { name: "Google Business", img: img_frame_17 },
          { name: "LinkedIn", img: img_frame_18 },
          { name: "Pinterest", img: img_frame_19 },
          { name: "Threads", img: img_frame_16 },
          { name: "Tik Tok", img: img_frame_20_32x32 },
          { name: "X/Twitter", img: img_frame_22 },
          { name: "Youtube", img: img_frame_21 },
          { name: "Bluesky", img: img_frame_20 },
        ].map((profile, idx) => (
          <tr key={idx} className="hover:bg-gray-50 transition">
            <td className="px-4 py-3 flex items-center gap-3">
              <img src={profile.img} alt={profile.name} className="w-6 h-6" />
              <span className="font-medium">{profile.name}</span>
            </td>
            <td className="px-4 py-3">
              <Button className="bg-gray-200 text-gray-700 text-sm font-bold px-4 py-1 hover:bg-[#83afe7] hover:text-[#03045E] transition-colors duration-200 rounded-md">
                Connect
              </Button>
            </td>
            <td className="px-4 py-3 text-gray-500 italic">Not connected</td>
            <td className="px-4 py-3 text-gray-500 italic">No profile</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



    </div>

  );
};

export default SettingsPage;
