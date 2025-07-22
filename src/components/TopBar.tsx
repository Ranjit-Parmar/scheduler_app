const TopBar = () => {
  return (
    <div className="bg-blue-100 p-4 rounded text-sm text-gray-800">
      <h2 className="font-semibold text-lg mb-2">Manage your planned posts</h2>
      <p>
        You can <strong>edit, delete, re-order, shuffle</strong> or <strong>copy</strong> your posts.
        You can also <strong>search and filter</strong> posts via the search box. Click any post to see a <strong>post preview</strong>.
      </p>
      <p className="mt-2 text-blue-800 font-semibold cursor-pointer">🔍 5 ways to add posts quickly</p>
    </div>
  );
};

export default TopBar;
