import { useState } from "react";

const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState("JULY–AUGUST");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Generate 42 day slots (6 weeks)
  const days = Array.from({ length: 42 }, (_, i) => i + 1);

  return (
    <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Calendar Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b bg-white shrink-0">
        <button className="bg-gray-100 px-3 py-1 text-sm rounded hover:bg-gray-200 transition">
          Today
        </button>
        <span className="text-sm font-medium text-gray-800">{currentMonth}</span>
        <div className="flex items-center gap-2">
          <button className="text-sm text-blue-600 hover:underline">View: Month</button>
        </div>
      </div>

      {/* Calendar Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto">
        {/* Weekday Header (optional: make sticky) */}
        <div className="grid grid-cols-7 bg-gray-50 text-xs font-medium text-center text-gray-600 border-b sticky top-0 z-10">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-3 border-r last:border-r-0 bg-gray-50">
              {day}
            </div>
          ))}
        </div>

        {/* Day Cells */}
        <div className="grid grid-cols-7 text-sm bg-white">
          {days.map((day, i) => (
            <div
              key={i}
              className="h-32 border-r border-b p-2 relative hover:bg-gray-50 last:border-r-0"
            >
              <span className="text-xs text-gray-500 absolute top-2 left-2">
                {day <= 31 ? day : ""}
              </span>

              {/* Example Event */}
              {day === 5 && (
                <div className="absolute bottom-2 left-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Scheduled Post
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
