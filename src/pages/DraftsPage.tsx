import { CirclePlay } from 'lucide-react'
import { Link } from 'react-router-dom'

const DraftsPage = () => {
  return (
<div className="space-y-8">
        <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Manage your drafts
        </h2>
        <p className="mb-4 text-base">
        You can use drafts to <strong>prepare and collaborate with your team</strong> on posts. <strong>Click the pencil icon </strong>to continue working on a draft.
      </p>

        {/* Help Links */}
        <div className="space-y-2">
          <Link
            to="#"
            className="flex text-base font-medium items-center space-x-2 text-blue-700 hover:underline hover:text-blue-900 transition"
          >
            <CirclePlay className="w-5 h-5" />
            <span> 5 ways to add posts quickly</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DraftsPage