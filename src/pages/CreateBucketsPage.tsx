import { Link } from "react-router-dom";
import { SquareCheck } from "lucide-react";
import add_icon from "../assets/add.png";
import BucketIcon from "../components/BucketIcon/BucketIcon";

const dummyBuckets = [
  {
    title: "Thought Leadership Articles",
    desc: "Sharing insights and industry expertise",
    color: "#F44336",
  },
  {
    title: "Marketing Tips",
    desc: "Boost your brand with these tactics",
    color: "#2196F3",
  },
  {
    title: "Customer Stories",
    desc: "Testimonials from happy users",
    color: "#4CAF50",
  },
  {
    title: "Fun Friday",
    desc: "Memes and casual content",
    color: "#FF9800",
  },
];

const CreateBucketsPage = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Info Box */}
      <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-800 border border-blue-200 shadow-sm">
        <h2 className="font-bold text-2xl mb-2">Manage your planned posts</h2>
        <p className="mb-4 text-base">
          <strong>Create a bucket</strong> for any category and then fill it
          with posts. To <strong>activate a bucket,</strong> go to your Posting
          Plan and add the bucket to any posting time.
        </p>

        <div className="space-y-2">
          <Link
            to="#"
            className="flex text-base font-medium items-center space-x-2 text-blue-700 hover:underline hover:text-blue-900 transition"
          >
            <SquareCheck className="w-5 h-5" />
            <span>Add a Bucket to your Posting Plan</span>
          </Link>
        </div>
      </div>

      {/* Suggested Buckets */}
      <section>
        <h2 className="text-lg font-bold mb-4">Suggested Buckets</h2>

        <div className="flex flex-wrap gap-6">
          {dummyBuckets.map((bucket, idx) => (
            <article
              key={idx}
              className="relative z-0 flex items-center w-[280px] h-[108px] p-2 border-gray-300 border rounded-lg bg-white"
            >
              {/* Add Icon */}
              <img
                src={add_icon}
                alt="add"
                className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow z-20"
              />

              {/* Bucket Icon */}
              <div className="flex-shrink-0 w-[60px] h-[60px]">
                <BucketIcon size={60} color={bucket.color} />
              </div>

              {/* Text Content */}
              <div className="ml-4">
                <h5 className="font-bold text-gray-800 leading-snug">
                  {bucket.title}
                </h5>
                <p className="text-xs text-gray-600 mt-1">{bucket.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreateBucketsPage;
