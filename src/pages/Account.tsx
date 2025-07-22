import { useState } from "react";
import { CircleQuestionMark, SquareChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";


import { CheckCircle, Rocket, Star, Zap } from "lucide-react";

const PlanModal = ({ onClose }: { onClose: () => void }) => {
  const plans = [
    { name: "Free", price: "₹0/mo", billing: "Always free", icon: <CheckCircle className="text-green-600" /> },
    { name: "Starter Annual", price: "₹250/mo", billing: "Billed yearly", icon: <Star className="text-blue-600" /> },
    { name: "Starter Monthly", price: "₹300/mo", billing: "Billed monthly", icon: <Zap className="text-yellow-500" /> },
    { name: "Pro", price: "₹500/mo", billing: "Billed yearly", icon: <Rocket className="text-purple-600" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-24">
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-45 bg-black backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className="relative bg-white border border-gray-300 rounded-lg shadow-xl w-full max-w-xl mx-4 p-6 pointer-events-auto max-h-[80vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Choose a Plan</h2>
          <p className="text-sm text-gray-500">Select the best plan that suits your needs.</p>
        </div>

        {/* Plan Options */}
        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="text-lg">{plan.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{plan.name}</p>
                  <p className="text-sm text-gray-500">{plan.billing}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-800 font-medium">{plan.price}</p>
                <button className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Bottom Close Button */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};




const Account = () => {
  const [showModal, setShowModal] = useState(false);


  
  return (
    <div className="space-y-8 relative">
      {/* Info Box */}
      <div className="bg-blue-50 p-5 rounded-lg text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Manage your subscription and settings
        </h2>
        <p className="mb-4 text-base">
          <strong>Account</strong> is where you manage your subscription and billing. You can also edit your login information and time zone.
        </p>
        <p className="mt-2 flex items-center gap-2 text-blue-800 text-base font-semibold hover:underline cursor-pointer">
          <CircleQuestionMark size="18px" strokeWidth="2.5px" />
          Learn about plan differences
        </p>
      </div>

      {/* Current Subscription Plan */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Current subscription plan</h2>
        <div className="flex justify-between flex-wrap gap-6">
          <div className="space-y-3 text-gray-700">
            <p className="font-bold text-lg">Free</p>
            <p className="text-sm text-gray-500">Price above does not include coupons or legacy deals</p>
            <div className="space-x-4 text-sm text-blue-600 font-medium">
              <Link to="#" className="hover:underline">Terms of service</Link>
              <Link to="#" className="hover:underline">Cancellation</Link>
            </div>
          </div>

          <div className="space-y-4 max-w-md w-full">
            <h3 className="text-base text-gray-800">
              Need a <Link to="#" className="text-blue-600 hover:underline">different plan</Link> or billing period?
            </h3>
           <div
  onClick={() => setShowModal(true)}
  className="flex items-center justify-between border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition"
>
  <div>
    <strong>Starter annual</strong>
    <p className="text-sm text-gray-600">(₹250/mo billed yearly)</p>
  </div>
  <SquareChevronDown className="text-gray-500" />
</div>

            <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium">Change Plan</Button>
          </div>
        </div>
      </section>

      {/* Time Zone */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Time zone</h2>
        <div className="space-y-4">
          <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option>06:34 PM - UTC+05:30 Asia/Kolkata</option>
          </select>
          <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium">Save changes</Button>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-blue-600" />
            Apply this timezone to all plans
          </label>
        </div>
      </section>

      {/* Account Holder */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Account holder</h2>
        <div className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <input
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md"
              value="Ranjit"
            />
            <input
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md"
              value="Parmar"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              type="email"
              value="parmarranjit7972@gmail.com"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium w-40">Save changes</Button>
          </div>
        </div>
      </section>

      {/* Change Password */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Change password</h2>
        <form className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Current Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <Button className="text-white bg-[#03045E] hover:bg-[#023e8a] transition-colors duration-200 shadow-md rounded-md font-medium">Save changes</Button>
        </form>
        <div className="text-sm text-gray-600 space-y-1">
          <p>* Password must be 8-32 characters long.</p>
          <p>* Include at least one lowercase letter (a-z)</p>
          <p>* Include at least one uppercase letter (A-Z)</p>
          <p>* Include at least one number or symbol (! @ # $ % ^ & * ( ) _ + - = [ ] { } | ')</p>
        </div>
      </section>
      {showModal && <PlanModal onClose={() => setShowModal(false)} />}

    </div>
  );
};

export default Account;
