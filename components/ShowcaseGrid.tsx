"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Mail, Calendar } from "lucide-react";

interface CardProps {
  category: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  icon: React.ReactNode;
}

function FeatureCard({ category, title, description, isFeatured = false, icon }: CardProps) {
  return (
    <div
      className={`relative w-[340px] sm:w-[420px] h-[360px] sm:h-[400px] rounded-3xl p-8 flex flex-col justify-between shrink-0 border transition-all duration-500 ease-out group ${isFeatured
        ? "bg-gradient-to-br from-[#E07534] to-[#C2410C] border-[#E07534]/50 shadow-[0_0_50px_rgba(224,117,52,0.15)] text-white"
        : "bg-[#F9FAFB] border-neutral-200/80 hover:border-neutral-300 text-neutral-900 shadow-sm"
        }`}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between relative z-10">
        <div>
          <span
            className={`text-xs font-bold uppercase tracking-widest block mb-4 ${isFeatured ? "text-white/80" : "text-[#E07534]"
              }`}
          >
            {category}
          </span>
          <h3 className="text-2xl sm:text-3xl  tracking-tight leading-tight max-w-[280px]">
            {title}
          </h3>
        </div>

        {/* Icon container */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${isFeatured
            ? "bg-white/15 border-white/20 text-white"
            : "bg-neutral-100 border-neutral-200 text-neutral-700 group-hover:text-[#E07534] group-hover:bg-[#E07534]/15 group-hover:border-[#E07534]/30"
            }`}
        >
          {icon}
        </div>
      </div>

      {/* Description Paragraph */}
      <p
        className={`text-sm sm:text-base leading-relaxed relative z-10 font-medium ${isFeatured ? "text-white/90" : "text-neutral-500"
          }`}
      >
        {description}
      </p>

      {/* Subtle overlay hover effect for dark cards */}
      {!isFeatured && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-neutral-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </div>
  );
}

export default function ShowcaseGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const features = [
    {
      category: "Chat & Voice Engine",
      title: "Your Brand's Voice, On Calls",
      description:
        "Define the tone, style, and rules of your AI agent. It answers inbound phone inquiries 24/7 with a natural human voice, qualifying hot lead details instantly.",
      isFeatured: true,
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      category: "Portal Connector",
      title: "Auto-Reply To Portal Leads",
      description:
        "Syncs with Zillow, Rightmove, and Zoopla. The AI agent replies to portal email inquiries within 2 minutes, qualifying leads and booking viewings in real time.",
      isFeatured: false,
      icon: <Mail className="w-5 h-5" />,
    },
    {
      category: "Calendar Assistant",
      title: "Instant Viewing Confirmation",
      description:
        "Coordinates viewings based on live agent calendars. It handles rescheduling, sends automated calendar invites, maps, and SMS reminders to avoid no-shows.",
      isFeatured: false,
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 640 ? 360 : 440; // card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="bg-white py-24 border-t border-neutral-100 relative overflow-hidden">

      {/* Title block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <h2 className="text-3xl sm:text-5xl text-neutral-900 tracking-tight font-medium">
          Explore everything Supercharge AI can do.
        </h2>
      </div>

      {/* Main Slider Area with absolute arrows overlay */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 group">

        {/* Background Vector Wave Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-48 opacity-15 pointer-events-none z-0">
          <svg className="w-full h-full text-[#E07534]" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
            <path
              d="M0 100 Q 180 50, 360 100 T 720 120 T 1080 80 T 1440 100"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M0 115 Q 180 65, 360 115 T 720 135 T 1080 95 T 1440 115"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>
        </div>

        {/* Left Arrow Button */}
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 hover:border-[#E07534]/50 flex items-center justify-center text-neutral-800 hover:text-[#E07534] hover:scale-105 transition-all duration-300 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow Button */}
        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 hover:border-[#E07534]/50 flex items-center justify-center text-neutral-800 hover:text-[#E07534] hover:scale-105 transition-all duration-300 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto py-6 no-scrollbar scroll-smooth flex gap-6 md:gap-8 snap-x snap-mandatory relative z-10"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="snap-start">
              <FeatureCard
                category={feature.category}
                title={feature.title}
                description={feature.description}
                isFeatured={feature.isFeatured}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
