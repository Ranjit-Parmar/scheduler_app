import { CircleQuestionMark, Grip, List, User } from "lucide-react";
import Button from "../components/Button/Button";

const Team = () => {
  return (
    <div className="space-y-8">
      {/* Info Box */}
      <div className="bg-blue-50 p-5 rounded-lg text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Invite team members and manage your team
        </h2>
        <p className="mb-4 text-base">
          <strong>Team</strong> is where you invite team members and manage your team. To log in, your new team member MUST use the email you invited them with.
        </p>
        <p className="mt-2 flex items-center gap-2 text-blue-800 text-base font-semibold hover:underline cursor-pointer">
          <CircleQuestionMark size="18px" strokeWidth="2.5px" />
          How to add team members
        </p>
      </div>

      {/* Add Member Section */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Add a new member</h2>
          <input
            name="email"
            placeholder="Email address"
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        <div className="space-y-4 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-700">Select which profiles they can access</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm">Select all</button>
            <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">Clear all</button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" title="Grid View">
              <Grip size={18} />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" title="List View">
              <List size={18} />
            </button>
          </div>
        </div>

        <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium">
          Add to team
        </Button>
      </section>

      {/* Current Team Section */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Current Team (1 out of 1)</h2>
          <h2 className="text-base font-medium text-gray-600">Permissions</h2>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <User size={24} className="text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Ranjit Parmar</h3>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
          </div>

          <div className="text-sm text-gray-400">empty</div>
        </div>
      </section>
    </div>
  );
};

export default Team;
