"use client";

import { motion } from "framer-motion";
import { Check, Info, Calendar, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Design Membership",
      price: "$4,995",
      period: "per month",
      description: "Ideal for growing startups needing ongoing, high-end product and marketing design.",
      perks: [
        "One request at a time",
        "Average 48-hour delivery",
        "Unlimited design revisions",
        "Dedicated Senior Designer",
        "Direct communication in Slack",
        "Pause or cancel anytime",
      ],
      cta: "Get started now",
      popular: true,
    },
    {
      name: "Design + Development",
      price: "$7,995",
      period: "per month",
      description: "For startups looking to design and build production-ready Next.js products.",
      perks: [
        "Two requests at a time",
        "Dedicated Designer & Dev team",
        "Custom Next.js & Tailwind React code",
        "Production-grade engineering",
        "Direct communication in Slack",
        "Pause or cancel anytime",
      ],
      cta: "Book an intro call",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Membership Plans
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Simple, flat-rate pricing
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-medium">
            No hidden contracts. No recruiter fees. One fixed subscription that fits your pace.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${plan.popular
                  ? "bg-[#0B0B0C] border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
                  : "bg-white/5 border-white/10"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-6 max-w-xs">{plan.description}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-white/50 text-sm">{plan.period}</span>
                </div>

                <div className="h-px bg-white/10 w-full mb-8" />

                {/* Perks list */}
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${plan.popular
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Small Notice */}
        <div className="mt-12 text-center max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center gap-3">
          <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-[11px] text-white/50 text-left font-medium leading-normal">
            Need a custom enterprise arrangement? Or just have a quick design job?
            <a href="#contact" className="text-white hover:text-emerald-400 underline font-semibold ml-1">
              Book a call with our founder
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
