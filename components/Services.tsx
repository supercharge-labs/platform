"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Layers, Award, ShieldCheck, Zap } from "lucide-react";

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="services" className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Light glow decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            High-caliber design services
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-medium">
            We cover everything from MVP research to final handoff. Skip recruitment fees and hire an elite squad of designers on subscription.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Websites & Web Apps (2/3 width on desktop) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Websites & Web Apps</h3>
              <p className="text-white/60 text-sm max-w-md">
                We craft state-of-the-art landing pages, corporate hubs, and intricate SaaS layouts optimized for conversions, speed, and premium feel.
              </p>
            </div>
            {/* Visual preview elements */}
            <div className="absolute bottom-0 right-0 w-[45%] h-[55%] border-t border-l border-white/10 bg-[#0B0B0C] rounded-tl-xl p-4 hidden sm:flex flex-col gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="w-12 h-2 rounded bg-white/20" />
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>
              <span className="w-20 h-4 rounded bg-emerald-500/20" />
              <div className="grid grid-cols-2 gap-2 mt-1">
                <span className="h-8 rounded bg-white/5" />
                <span className="h-8 rounded bg-white/5" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mobile Apps (1/3 width) */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Mobile Apps</h3>
              <p className="text-white/60 text-sm">
                Stunning, native iOS and Android application layouts built with native components and intuitive navigation flows.
              </p>
            </div>
            {/* Visual element */}
            <div className="absolute -bottom-8 right-8 w-24 h-40 bg-[#0B0B0C] border-t border-x border-white/10 rounded-t-xl p-3 flex flex-col gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-8 h-2 bg-white/20 rounded-full mx-auto" />
              <div className="w-full h-12 rounded bg-indigo-500/20 mt-1" />
              <div className="flex gap-1">
                <span className="w-4 h-4 rounded-full bg-white/5" />
                <span className="w-4 h-4 rounded-full bg-white/5" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Brand Identity (1/3 width) */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Branding</h3>
              <p className="text-white/60 text-sm">
                Distinctive geometric logos, harmonious typography systems, design guidelines, and assets that stand out.
              </p>
            </div>
            {/* Visual element */}
            <div className="absolute -bottom-4 right-4 flex gap-2 rotate-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center font-bold text-purple-300">
                N
              </div>
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white/40">
                S
              </div>
            </div>
          </motion.div>

          {/* Card 4: MVPs & Prototypes (2/3 width) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Rapid Prototyping</h3>
              <p className="text-white/60 text-sm max-w-md">
                Iterate on user validation cycles with fully detailed interactive prototypes, high-fidelity wireframes, and design specs ready for implementation.
              </p>
            </div>
            {/* Visual element */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] border-t border-l border-white/10 bg-[#0B0B0C] rounded-tl-xl p-4 hidden sm:flex flex-col gap-2 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex gap-2">
                <div className="w-1/2 h-12 border border-dashed border-white/15 rounded flex items-center justify-center text-[10px] text-white/30">
                  Container A
                </div>
                <div className="w-1/2 h-12 border border-dashed border-white/15 rounded flex items-center justify-center text-[10px] text-white/30">
                  Container B
                </div>
              </div>
              <div className="w-full h-8 bg-emerald-500/10 border border-emerald-500/20 rounded flex items-center px-3 text-[10px] text-emerald-400 font-bold justify-between">
                <span>Success Banner</span>
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Grid bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/5 text-center">
          <div className="flex flex-col items-center">
            <Zap className="w-5 h-5 text-emerald-400 mb-2" />
            <h4 className="font-bold text-white text-sm">Rapid Delivery</h4>
            <p className="text-[11px] text-white/40 mt-1">Average turnaround of 48 hours</p>
          </div>
          <div className="flex flex-col items-center">
            <Monitor className="w-5 h-5 text-emerald-400 mb-2" />
            <h4 className="font-bold text-white text-sm">Figma Files</h4>
            <p className="text-[11px] text-white/40 mt-1">100% clean layered files</p>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="w-5 h-5 text-emerald-400 mb-2" />
            <h4 className="font-bold text-white text-sm">Flexible Sub</h4>
            <p className="text-[11px] text-white/40 mt-1">Pause or cancel at any time</p>
          </div>
          <div className="flex flex-col items-center">
            <Layers className="w-5 h-5 text-emerald-400 mb-2" />
            <h4 className="font-bold text-white text-sm">Top-Tier Quality</h4>
            <p className="text-[11px] text-white/40 mt-1">Senior product designers only</p>
          </div>
        </div>
      </div>
    </section>
  );
}
