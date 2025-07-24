import facebook from "../assets/facebook.png";
import fantasy from "../assets/fantasy.png";
import color_palette from "../assets/color-palette.png";
import rss from "../assets/rss.png";
import quotes from "../assets/quotes.png";
import gallery_1 from "../assets/gallery.png";
import history from "../assets/history.png";
import gallery_2 from "../assets/gallery_2.png";
import { ChevronDown } from "lucide-react";

const GetContentPost = () => {
  const contentOptions = [
    {
      title: "Curate from social media",
      desc: "Find top-performing social media posts",
      icon: facebook,
    },
    {
      title: "Create with AI",
      desc: "Prompt AI to create content for you",
      icon: fantasy,
    },
    {
      title: "Design new images",
      desc: "Create your own original images",
      icon: color_palette,
    },
    {
      title: "Curate from blogs",
      desc: "Find top-performing social blog posts",
      icon: rss,
    },
    {
      title: "Find quotes & post ideas",
      desc: "Get quotes & ideas on any topic",
      icon: quotes,
    },
    {
      title: "Find images, vids and gifs",
      desc: "Get shareable media for any keyword",
      icon: gallery_1,
    },
    {
      title: "Re-use your previous posts",
      desc: "Add old posts back to your queue",
      icon: history,
    },
    {
      title: "Browse your library",
      desc: "Look through your uploads",
      icon: gallery_2,
    },
  ];

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Get Content for Posts
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contentOptions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border rounded-lg p-4 bg-white hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12" />
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900">{item.title}</h5>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
            <ChevronDown className="text-gray-400" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetContentPost;
