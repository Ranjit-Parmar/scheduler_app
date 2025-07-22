import TopBar from "../components/TopBar";
import CalendarView from "../components/CalendarView";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <TopBar />
      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">Calendar</button>
        <button className="bg-gray-200 px-3 py-1 text-sm rounded">List</button>
        <button className="bg-gray-200 px-3 py-1 text-sm rounded">Grid</button>
      </div>
      <CalendarView />
    </div>
  );
};

export default Dashboard;
