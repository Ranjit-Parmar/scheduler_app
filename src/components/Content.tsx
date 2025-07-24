import GetContentPost from "./GetContentPost";
import MostRecentQuotes from "./MostRecentQuotes";
import PopularContentStreams from "./PopularContentStreams";
import PostIdeas from "./PostIdeas";
import RandomQuotes from "./RandomQuotes";
import RecentlyViewedQuotes from "./RecentlyViewedQuotes";
import ContentSearchHeader from "./ContentSearchHeader";

const Content = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Search & Actions */}
      <ContentSearchHeader />

      {/* Content Sections */}
      <GetContentPost />
      <RecentlyViewedQuotes />
      <MostRecentQuotes />
      <RandomQuotes />
      <PopularContentStreams />
      <PostIdeas />
    </div>
  );
};

export default Content;
