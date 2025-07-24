import { useState } from "react";
import ContentSearchHeader from "../components/ContentSearchHeader";
import stream_transperant from "../assets/stream_transperant.png";
import facebook_transperant from "../assets/facebook_transperant.png";
import linkedin_transperant from "../assets/linkedin_transperant.png";
import reddit_transperant from "../assets/reddit_transperant.png";
import rss_transperant from "../assets/rss_transperant.png";
import quote_transperant from "../assets/quote_transperant.png";
import idea_transperant from "../assets/idea_transperant.png";
import link_transperant from "../assets/link_transperant.png";
import gifs_transperant from "../assets/gif_transperant.png";
import gallery_transperant from "../assets/gallery_transperant.png";

const streamButtons = [
  { label: "Streams", icon: stream_transperant },
  { label: "Facebook", icon: facebook_transperant },
  { label: "LinkedIn", icon: linkedin_transperant },
  { label: "Reddit", icon: reddit_transperant },
  { label: "RSS", icon: rss_transperant },
  { label: "Quotes", icon: quote_transperant },
  { label: "Post ideas", icon: idea_transperant },
  { label: "Articles", icon: link_transperant },
  { label: "Gifs", icon: gifs_transperant },
  { label: "Media", icon: gallery_transperant },
];

const initiallyEnabled = ["Facebook", "LinkedIn", "Reddit", "RSS"];

const CreateNewStream = () => {
  const [enabledButtons, setEnabledButtons] = useState<string[]>(initiallyEnabled);
  const [activeStream, setActiveStream] = useState<string | null>(null);

  const handleClick = (label: string) => {
    // Clicking enables if disabled, keeps others untouched
    if (!enabledButtons.includes(label)) {
      setEnabledButtons([...enabledButtons, label]);
    }
  };

  const handleDoubleClick = (label: string) => {
    // No matter if enabled or not: activate and disable all others
    setActiveStream(label);
    setEnabledButtons([label]);
  };

  return (
    <div>
      <ContentSearchHeader>
        {streamButtons.map(({ label, icon }) => {
          const isEnabled = enabledButtons.includes(label);
          const isActive = activeStream === label;

          return (
            <button
              key={label}
              onClick={() => handleClick(label)}
              onDoubleClick={() => handleDoubleClick(label)}
              className={`flex items-center gap-2 px-4 py-2 font-bold text-sm border rounded-md transition select-none
                ${isActive
                  ? "bg-[#79367B] text-white hover:bg-[#5a245c]"
                  : isEnabled
                    ? "bg-[#79367B] text-white hover:bg-[#A478A5]"
                    : "bg-[#B68CB6] text-white opacity-60 hover:cursor-pointer"
                }`}
            >
              <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
              {label}
            </button>
          );
        })}
      </ContentSearchHeader>

      <div className="mt-4">Your page content goes here...</div>
    </div>
  );
};

export default CreateNewStream;
