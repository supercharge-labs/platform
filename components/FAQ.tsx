"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer: "A senior product designer now costs upwards of $120,000 per year, plus recruitment fees, equity, and benefits. More importantly, you might not always have enough design work to keep them busy full-time, meaning you'll pay for hours you aren't using. Our membership lets you pause and resume whenever you want.",
  },
  {
    question: "How many design requests can I make?",
    answer: "You can add unlimited requests to your design queue. We will work through them and deliver them one by one. As soon as you approve a design, we immediately transition to the next request in your backlog.",
  },
  {
    question: "How does the pause feature work?",
    answer: "Billing cycles are billed per 31-day period. If you subscribe, use the service for 10 days, and then pause, your billing cycle stops. You will have 21 days of service remaining, which you can resume and use at any time in the future.",
  },
  {
    question: "How fast will I receive my designs?",
    answer: "On average, most design drafts are completed in 48 hours or less. Complex requests (like a comprehensive multi-screen SaaS dashboard or custom brand systems) may take slightly longer, but we keep you updated in Slack daily.",
  },
  {
    question: "What if I only have one quick request?",
    answer: "That is completely fine! You can subscribe, submit your single design request, wait for it to be completed and approved, and then pause your subscription. You will still have the remainder of your 31-day cycle saved for future requests.",
  },
];

function FAQCard({ faq, isOpen, toggleOpen }: { faq: FAQItem; isOpen: boolean; toggleOpen: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-none py-6">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left py-2 text-white hover:text-emerald-400 transition-colors duration-200 group"
      >
        <span className="text-base sm:text-lg font-bold tracking-tight">{faq.question}</span>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300 shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-white" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-sm sm:text-base leading-relaxed pt-3 pb-4 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-medium">
            Everything you need to know about the subscription, delivery, and pausing.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="bg-[#0B0B0C] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {faqs.map((faq, idx) => (
            <FAQCard
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              toggleOpen={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
