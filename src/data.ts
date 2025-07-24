// Icons or images for contentData
import image1 from "./assets/bucket.png";
import image2 from "./assets/fork.png";
import image3 from "./assets/fantasy.png";
import star_active from "./assets/star_active.png"; // for ratings

// Dummy questions
export const contentData = {
  questions: [
    "What should I post this week?",
    "How can I improve engagement?",
    "Top content ideas for Instagram?",
    "What time is best to post?",
  ],

  content: [
    {
      title: "Top Performing Posts",
      desc: "Check what’s working best for your brand.",
      icon: image1,
    },
    {
      title: "Time to Post",
      desc: "Find your top engagement hours.",
      icon: image2,
    },
    {
      title: "Trending Hashtags",
      desc: "Use trending tags to boost reach.",
      icon: image3,
    },
  ],

  quotes: [
    {
      text: "Consistency is more important than perfection.",
      tag: "motivation",
    },
    {
      text: "Create content that educates and entertains.",
      tag: "contenttips",
    },
    {
      text: "Engage with your audience daily.",
      tag: "growth",
    },
  ],

  ideas: [
    {
      title: "Team Behind the Scenes",
      desc: "Introduce your team to add a human touch.",
    },
    {
      title: "Poll Your Followers",
      desc: "Run a poll to boost interaction.",
    },
    {
      title: "Weekly Tip",
      desc: "Share a short weekly industry tip.",
    },
  ],
};

// Star image export
export { star_active };

// Tag suggestions
export const contentTags = [
  "Marketing",
  "Motivation",
  "Tips",
  "Reels",
  "Growth",
  "Ideas",
  "BehindTheScenes",
  "Hashtags",
  "ContentCalendar",
];
