import TrainingSidebar from '../components/TrainingSidebar'
import { Outlet } from 'react-router-dom'

const TrainingLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Fixed Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 p-4 shadow-sm h-screen overflow-y-auto">
        <TrainingSidebar />
      </aside>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto h-screen p-6 bg-white">
        <Outlet />
      </main>
    </div>
  )
}

export default TrainingLayout