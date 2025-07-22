import { CirclePlay } from "lucide-react";

const CalendarPage = () => {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-5 rounded-lg text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Manage your weekly posting plans
        </h2>
        <p className="mb-4 text-base">
          Click on any plan to <strong>add posting times.</strong> For each time, you can <strong>choose a source</strong> to pull posts from (your main Queue or a Bucket).
        </p>
        <p className="mt-2 flex items-center gap-2 text-blue-800 text-base font-semibold hover:underline cursor-pointer">
          <CirclePlay size="18px" strokeWidth="2.5px" />
          How to use Posting Plans
        </p>
        <p className="mt-2 flex items-center gap-2 text-blue-800 text-base font-semibold hover:underline cursor-pointer">
          <CirclePlay size="18px" strokeWidth="2.5px" />
          How to use Buckets
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;
