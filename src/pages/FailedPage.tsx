import { CircleQuestionMark } from 'lucide-react'

const FailedPage = () => {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-5 rounded-lg text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">
          Manage your failed posts
        </h2>
        <p className="mb-4 text-base">
          Posts can fail for many reasons. <strong> Check the Failure reason </strong>on the post (in orange). Then <strong>visit our Helpdesk</strong> to see how to fix the problem (usually a connection reset).
        </p>
        <p className="mt-2 flex items-center gap-2 text-blue-800 text-base font-semibold hover:underline cursor-pointer">
          <CircleQuestionMark size="18px" strokeWidth="2.5px" />
          How to fix failed posts
        </p>
        <p className="mt-2 flex items-center gap-2 text-blue-800 text-base font-semibold hover:underline cursor-pointer">
          <CircleQuestionMark size="18px" strokeWidth="2.5px" />
          How to reset your network connection
        </p>
      </div>
    </div>
  )
}

export default FailedPage