"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Premium easeOutExpo
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-start mt-[10px] justify-center overflow-hidden bg-[#050505] px-6 py-24">
      {/* Premium Floating Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 0.95, 1],
            x: [0, 40, -40, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[120px] absolute -top-10 md:top-auto"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -50, 50, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[140px] absolute -bottom-20 md:bottom-auto"
        />
      </div>

      {/* Grid Pattern overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0753408_1px,transparent_1px),linear-gradient(to_bottom,#e0753408_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className=" mx-auto text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 md:gap-10"
        >
          {/* Label Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07534] animate-pulse" />
            Agency
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-[24px] sm:text-[24px] md:text-[78px] text-white tracking-tight leading-[1.25] w-full max-w-[1300px] "
          >
            Trusted

            <span className="my-[40px] mx-[20px] px-6 py-1.5 sm:px-6 sm:py-2.5 rounded-full bg-[#121212]/90 border border-white/10 shadow-2xl relative overflow-hidden group">
              <span className="text-[#E07534] text-3xl sm:text-5xl md:text-7xl">AI Agents</span>
            </span>
            <br />

            <span className="my-[100px]">
              For Your Business Administration


            </span>

          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-base sm:text-[18px] md:text-[18px] leading-relaxed px-4 max-w-[1000px] w-full"

          >
            From answering calls and emails to qualifying leads and booking viewings, our AI handles the work you don't want to do, saving you hours every day and up to 80% on admin costs.

          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-2">
            <a
              href="https://calendly.com/usesupercharge"
              className="inline-flex items-center gap-4 pl-7 pr-2.5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.02] group"
            >

              Book a call
              <div className="w-9 h-9 rounded-full bg-[#E07534] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom subtle anchor/scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-3 bg-white/20 rounded-full flex justify-center pt-0.5"
        >
          <span className="w-1 h-1 bg-emerald-400 rounded-full" />
        </motion.div>
      </div>
    </section >
  );
}
