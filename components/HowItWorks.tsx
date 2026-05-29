"use client";

import { motion } from "framer-motion";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

function StepColumn({ number, title, description, icon, isLast = false }: StepProps) {
  // Stagger animation items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className="relative flex flex-col items-start group">
      {/* Badge container with connector line */}
      <div className="flex items-center w-full mb-8 relative">
        <div className="flex items-center gap-3 pl-1 pr-5 py-1 rounded-full bg-black border border-neutral-800 relative z-10 transition-colors duration-300 group-hover:border-[#E07534]/50 shadow-md">
          {/* White circle with black icon */}
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
            {icon}
          </div>
          <span className="text-xs font-semibold text-white/90 tracking-wider uppercase">
            Step {number}
          </span>
        </div>

        {/* Connector Line (hidden on mobile, shown on md+) */}
        {!isLast && (
          <div className="absolute left-0 right-[-48px] md:right-[-64px] h-px border-t border-dotted border-neutral-300 z-0 hidden md:block" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl  text-neutral-900 tracking-tight mb-4 group-hover:text-[#E07534]/90 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  // Arrow icon (Step 1)
  const arrowIcon = (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );

  // Wand/Brush icon (Step 2)
  const wandIcon = (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 4 5 5" />
      <path d="m3 20 12-12" />
      <path d="M20.7 2.3a1 1 0 0 0-1.4 0l-3.2 3.2 1.4 1.4 3.2-3.2a1 1 0 0 0 0-1.4Z" />
    </svg>
  );

  // Sliders icon (Step 3)
  const slidersIcon = (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="how-it-works" className="bg-white py-24 border-t border-neutral-100 relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E07534]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-medium text-neutral-900 tracking-tight mb-20"
        >
          How it works?
        </motion.h2>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative"
        >
          <StepColumn
            number={1}
            title="Discover Your Workflow"
            description="We'll chat to understand your current processes and how your business operates. No commitments, just a light discovery call to see where our AI can best automate your administrative tasks."
            icon={arrowIcon}
          />
          <StepColumn
            number={2}
            title="Integrate & Train AI"
            description="Our team integrates our AI agents directly with your existing tech stack and current systems. We then meticulously train the AI on your specific processes and preferred ways of working, ensuring it's tailored precisely to your needs."
            icon={wandIcon}
          />
          <StepColumn
            number={3}
            title="Deploy & Automate"
            description="Once trained, your AI agents go live, fully autonomous within your existing workflow. Kick your feet up and watch as the AI handles tasks you used to do, without you needing to learn any new software or change your current flow."
            icon={slidersIcon}
            isLast={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
