import ContentSearchHeader from "../components/ContentSearchHeader";
import like from "../assets/like.png";
import { ChevronDown, Link, SortAsc } from "lucide-react";

const FavoritesPage = () => {
  return (
    <div className="p-6 space-y-8">
      <ContentSearchHeader />

      <section className="p-6 bg-white rounded-xl shadow-md space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={like} alt="Like Icon" className="w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800">My Favorites</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Articles Dropdown */}
            <div data-testid="pp-select">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100">
                <Link className="w-4 h-4" />
                <span>Articles</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div data-testid="pp-select">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100">
                <SortAsc className="w-4 h-4" />
                <span>Sort by: Most Recent</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Empty State */}
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <div className="w-10 h-10 text-gray-400">
          </div>
          <h1 className="text-lg font-semibold text-gray-700">
            No articles favorited yet
          </h1>
          <div className="text-sm text-gray-500 max-w-sm">
            Click <span className="text-pink-500 font-bold">♡</span> on any content to save it to your favorites.
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;
