import Button from "../components/Button/Button";
import img_avatar from "../assets/img_avatar.svg"
import img_avatar_40x64 from "../assets/img_avatar_40x64.png"
import img_frame_9 from "../assets/img_frame_9.png"
import img_frame_14 from "../assets/img_frame_14.png"
import img_frame_15 from "../assets/img_frame_15.png"
import img_frame_16 from "../assets/img_frame_16.png"
import img_frame_19 from "../assets/img_frame_19.png"
import img_frame_17 from "../assets/img_frame_17.png"
import img_frame_20 from "../assets/img_frame_20.png"
import img_frame_24 from "../assets/img_frame_24.png"
import img_frame_25 from "../assets/img_frame_25.png"
import img_frame_26 from "../assets/img_frame_26.png"
import img_frame_27 from "../assets/img_frame_27.png"
import img_frame_20_1 from "../assets/img_frame_20_1.png"
import img_frame_20_2 from "../assets/img_frame_20_2.png"
import img_frame_18 from "../assets/img_frame_18.png"
import img_frame_22 from "../assets/img_frame_22.png"
import img_frame_16_32x32 from "../assets/img_frame_16_32x32.png"
import img_frame_17_32x32 from "../assets/img_frame_17_32x32.png"
import img_frame_18_32x32 from "../assets/img_frame_18_32x32.png"
import img_frame_20_32x32 from "../assets/img_frame_20_32x32.png"
import img_frame_21_32x32 from "../assets/img_frame_21_32x32.png"
import img_frame_22_32x32 from "../assets/img_frame_22_32x32.png"
import img_frame_21 from "../assets/img_frame_21.png"
import img_frame_31 from "../assets/img_frame_31.png"
import img_frame_31_500x603 from "../assets/img_frame_31_500x603.png"
import img_frame_31_500x577 from "../assets/img_frame_31_500x577.png"

// pages/Home.tsx
const Home = () => {
  const socialIcons1 = [
    img_frame_14,
    img_frame_15,
    img_frame_16,
    img_frame_19,
    img_frame_17,
    img_frame_20,
    img_frame_18,
    img_frame_22,
    img_frame_20_32x32,
    img_frame_21
  ];

  const socialIcons2 = [
    img_frame_14,
    img_frame_18,
    img_frame_16_32x32,
    img_frame_21,
    img_frame_17_32x32,
    img_frame_20_1,
    img_frame_18_32x32,
    img_frame_22_32x32,
    img_frame_20_2,
    img_frame_21_32x32
  ];

  const brandLogos = [
    img_frame_24,
    img_frame_25,
    img_frame_26,
    img_frame_27
  ];

  const testimonials = [
    {
      id: 1,
      avatar: img_avatar,
      text: "Schedular helped me stay consistent with posting. I used to spend hours planning weekly content — now it takes 15 minutes! Sales from social traffic are up 3x since using it.",
      isCircle: true
    },
    {
      id: 2,
      avatar: img_avatar,
      text: "I book more clients thanks to Schedular! The smart content calendar keeps my LinkedIn active while I focus on my coaching sessions. Engagement went up 220%",
      isCircle: true
    },
    {
      id: 3,
      avatar: img_avatar,
      text: "My Instagram Reels now reach 4x more people because I post at the best times. Schedular\'s suggestions are always spot on. I went from 1k to 28k followers in 4 months!",
      isCircle: true
    },
    {
      id: 4,
      avatar: img_avatar_40x64,
      text: "Our startup now has a strong social presence without a full-time team. The AI caption generator is gold. We\'ve seen 70% more engagement across all platforms.",
      isCircle: false
    },
    {
      id: 5,
      avatar: img_avatar,
      text: "Schedular made product launch campaigns smooth and predictable. I can now plan posts across Insta, Facebook, and Pinterest with one click. Sales increased by 2.5x!",
      isCircle: true
    },
    {
      id: 6,
      avatar: img_avatar,
      text: "Managing 12 clients used to be chaos. Now our agency uses Schedular to automate everything. We\'ve cut down 10 hours of manual scheduling each week.",
      isCircle: true
    }
  ];

  return (
    <div className="max-w-full">
      {/* Hero Section */}
      <section className="flex flex-row justify-between items-center px-8 py-16 max-w-full mx-auto w-full">
        <div className="flex flex-col gap-8 max-w-[588px]">
          <h1 className="text-5xl font-bold leading-[72px]">
            <span>Plan, Schedule, and </span>
            <span className="">Grow</span>
            <span> Your Social Media—All in </span>
            <span className="">One</span>
            <span> Place</span>
          </h1>
          <p className="text-lg font-normal leading-[27px]">
            Save hours each week by automating your social posts with Postly. Discover content, schedule it across all platforms, and watch your audience grow.
          </p>
          <Button className="w-2xs bg-[#03045E] py-6 px-3.5 text-white font-bold rounded-full md:text-lg">
            Start Free Trial
          </Button>
        </div>
        <img 
          src={img_frame_9} 
          alt="Social Media Dashboard" 
          className="h-[593px] w-[588px]"
        />
      </section>

      {/* Social Networks Section */}
      <section className="flex flex-row gap-4 px-8 py-16 max-w-full mx-auto w-full">
        <div className="rounded-t-[30px] flex flex-col items-center py-12 px-8 flex-1" style={{background: 'linear-gradient(154deg, #caf0f8 0%, #00b4d8 100%)'}}>
          <h2 className="text-2xl font-semibold leading-9 text-center mb-8">
            Connect to all your social networks
          </h2>
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {socialIcons1.map((icon, index) => (
              <img 
                key={index}
                src={icon} 
                alt="Social Network" 
                className="w-8 h-8"
              />
            ))}
          </div>
        </div>
        
        <div className="rounded-t-[30px] flex flex-col items-center py-12 px-8 flex-1" style={{background: 'linear-gradient(154deg, #caf0f8 0%, #00b4d8 100%)'}}>
          <h2 className="text-2xl font-semibold leading-9 text-center mb-8">
            Import content from top-performing sources
          </h2>
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {socialIcons2.map((icon, index) => (
              <img 
                key={index}
                src={icon} 
                alt="Content Source" 
                className="w-8 h-8"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col items-center py-16 px-8 max-w-full mx-auto w-full">
        <h2 className="text-[34px] font-bold leading-10 tracking-wide text-center mb-8">
          Content That Gets Clicked, Shared, and Remembered
        </h2>
        <p className="text-xl font-normal leading-8 tracking-[3px] text-center mb-16">
          <span>Loved by </span>
          <span className="font-bold ">10,000+</span>
          <span> creators, marketers, and small teams</span>
        </p>
        <div className="flex flex-row gap-24 justify-center">
          {brandLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt="Brand Logo" 
              className="h-auto"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-24 px-8"
        style={{
          background: 'linear-gradient(154deg, #caf0f8 0%, #00b4d8 100%)',
          borderRadius: '0px 304px 0px 0px'
        }}
      >
        <div className="max-w-full mx-auto">
          <div className="mb-16">
            <p className="text-[22px] font-normal leading-[26px] mb-4">
              Small businesses ❤️ Post Planner
            </p>
            <h2 className="text-[32px] font-bold leading-[38px] tracking-wide">
              This tool is like a cheat code for social media
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mb-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="border bg-white border-gray-300 rounded-2xl p-8 flex flex-col items-center"
              >
                {testimonial.isCircle ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt="User Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={testimonial.avatar} 
                    alt="User Avatar" 
                    className="w-16 h-10 rounded-[20px] mb-6"
                  />
                )}
                <p className="text-base font-normal leading-6 text-center">
                  {testimonial.text.split(/(\bnow it takes 15 minutes!\b|\bEngagement went up 220%\b|\breach 4x\b|\b1k to 28k followers in 4 months!\b|\b70% more engagement across all platforms\b|\b2\.5x\b|\bautomate\b|\bscheduling\b)/).map((part, index) => {
                    if (['now it takes 15 minutes!', 'Engagement went up 220%', 'reach 4x', '1k to 28k followers in 4 months!', '70% more engagement across all platforms', '2.5x', 'automate', 'scheduling'].includes(part)) {
                      return <span key={index} className="font-bold">{part}</span>;
                    }
                    return part;
                  })}
                </p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {testimonials.slice(3, 6).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="border border-gray-300 bg-white rounded-2xl p-8 flex flex-col items-center"
              >
                {testimonial.isCircle ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt="User Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={testimonial.avatar} 
                    alt="User Avatar" 
                    className="w-16 h-10 rounded-[20px] mb-6"
                  />
                )}
                <p className="text-base font-normal leading-6 text-center">
                  {testimonial.text.split(/(\bsmooth\b|\b2\.5x\b|\bManaging 12\b|\bautomate\b|\bscheduling\b)/).map((part, index) => {
                    if (['smooth', '2.5x', 'Managing 12', 'automate', 'scheduling'].includes(part)) {
                      return <span key={index} className="font-bold">{part}</span>;
                    }
                    return part;
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Calendar Section */}
      <section className="flex flex-row justify-center gap-7 items-center pt-16 px-8 max-w-full mx-auto w-full">
        <div className="flex flex-col gap-6 max-w-[611px]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <div className="w-[74px] h-[2px] bg-black"></div>
            <span className="text-[22px] font-semibold leading-[33px] text-center">
              VISUAL CALENDAR
            </span>
          </div>
          <h2 className="text-[32px] font-bold leading-[38px]">
            Powerful Tools to Plan, Post & Grow
          </h2>
          <p className="text-lg font-medium leading-[21px]">
            From content creation to analytics, Schedular helps you manage it all — fast and effortlessly.
          </p>
          <Button className="border border-[#03045E] w-2xs rounded-2xl text-[16px] text-[#03045E] hover:text-[#023e8a] hover:border-[#023e8a] hover:shadow-md font-bold px-6 py-3.5 ">
              Try it for FREE
          </Button>
        </div>
        <img 
          src={img_frame_31} 
          alt="Visual Calendar" 
          className="h-auto"
        />
      </section>

      {/* Auto Reposting Section */}
      <section className="flex flex-row justify-center gap-7 items-center pt-16 px-8 max-w-full mx-auto w-full">
        <img 
          src={img_frame_31_500x603} 
          alt="Auto Reposting" 
          className="h-auto"
        />
        <div className="flex flex-col gap-6 max-w-[611px]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <div className="w-[74px] h-[2px] bg-black"></div>
            <span className="text-[22px] font-semibold leading-[33px] text-center">
              AUTO REPOSTING
            </span>
          </div>
          <h2 className="text-[32px] font-bold leading-[38px]">
            Everything You Need to Win on Social Media
          </h2>
          <p className="text-lg font-medium leading-[21px]">
            Build consistency, save time, and grow your audience with tools that work smart - not hard.
          </p>
          <Button className="border border-[#03045E] w-2xs rounded-2xl text-[16px] text-[#03045E] hover:text-[#023e8a] hover:border-[#023e8a] hover:shadow-md font-bold px-6 py-3.5 ">
              Try it for FREE
          </Button>
        </div>
      </section>

      {/* Smart Analytics Section */}
      <section className="flex flex-row justify-center gap-7 items-center pt-16 px-8 max-w-full mx-auto w-full">
        <div className="flex flex-col gap-6 max-w-[611px]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <div className="w-[74px] h-[2px] bg-black"></div>
            <span className="text-[22px] font-semibold leading-[33px] text-center">
              SMART ANALYTICS
            </span>
          </div>
          <h2 className="text-[32px] font-bold leading-[38px]">
            Smart Features. Simple Workflow
          </h2>
          <p className="text-lg font-medium leading-[21px]">
            Plan visually. Write faster. Repost easily. Track what matters
          </p>
          <Button className="border border-[#03045E] w-2xs rounded-2xl text-[16px] text-[#03045E] hover:text-[#023e8a] hover:border-[#023e8a] hover:shadow-md font-bold px-6 py-3.5 ">
              Try it for FREE
          </Button>
        </div>
        <img 
          src={img_frame_31_500x577}
          alt="Smart Analytics" 
          className="h-auto"
        />
      </section>

      {/* CTA Section */}
      <section className="mt-7 py-24 px-8 bg-[#03045E] text-white">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[44px] font-normal leading-[52px] text-center mb-12 w-3/4">
            Start scheduling like a pro. Save hours every week with Scheduler
          </h2>
          <Button className="bg-[#004B23] hover:bg-[#629c7d] transition-colors duration-200 w-2xs py-6 px-3.5 text-white font-bold rounded-full md:text-lg">
            Start Free Trial
          </Button>
        </div>
      </section>

    </div>
  )
};
export default Home;
