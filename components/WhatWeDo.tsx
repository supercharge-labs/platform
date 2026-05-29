"use client";

import { motion } from "framer-motion";

export default function WhatWeDo() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-[#F4F4F5] rounded-[32px] p-8 md:p-16 relative">

        {/* Header Content */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-3xl md:text-5xl text-neutral-900 tracking-tight mb-6"
          >
            What we do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-500 text-[16px] sm:text-base md:text-[16px] leading-relaxed"
          >
            Book a personalized demo to see how Supercharge AI can handle your admin inquiries, qualify leads, and book viewings automatically.          </motion.p>
        </div>

        {/* Alternating Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-8 md:gap-y-10 max-w-4xl mx-auto mt-12 sm:mt-16"
        >
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="flex justify-end items-center group">
            <div className="w-[120px] xs:w-[160px] sm:w-[240px] md:w-[320px] h-[38px] xs:h-[48px] sm:h-[64px] bg-white rounded-[12px] group-hover:scale-[1.02] group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-start items-center group">
            <span className="text-2xl sm:text-2xl md:text-[24px] lg:text-[42px]  text-[#2D3139] tracking-tight group-hover:text-[#E07534] transition-colors duration-300">
              Broadcast
            </span>
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants} className="flex justify-end items-center group">
            <span className="text-2xl sm:text-2xl md:text-[24px] lg:text-[42px] text-[#2D3139] tracking-tight group-hover:text-[#E07534] transition-colors duration-300">
              Payments
            </span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-start items-center group">
            <div className="w-[120px] xs:w-[160px] sm:w-[240px] md:w-[320px] h-[38px] xs:h-[48px] sm:h-[64px] bg-white rounded-[12px] group-hover:scale-[1.02] group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300" />
          </motion.div>

          {/* Row 3 */}
          <motion.div variants={itemVariants} className="flex justify-end items-center group">
            <div className="w-[120px] xs:w-[160px] sm:w-[240px] md:w-[320px] h-[38px] xs:h-[48px] sm:h-[64px] bg-white rounded-[12px] group-hover:scale-[1.02] group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-start items-center group">
            <span className="text-2xl sm:text-2xl md:text-[24px] lg:text-[42px] text-[#2D3139] tracking-tight group-hover:text-[#E07534] transition-colors duration-300">
              Orders
            </span>
          </motion.div>

          {/* Row 4 */}
          <motion.div variants={itemVariants} className="flex justify-end items-center group">
            <span className="text-2xl sm:text-2xl md:text-[24px] lg:text-[42px] text-[#2D3139] tracking-tight group-hover:text-[#E07534] transition-colors duration-300">
              Automation
            </span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-start items-center group">
            <div className="w-[120px] xs:w-[160px] sm:w-[240px] md:w-[320px] h-[38px] xs:h-[48px] sm:h-[64px] bg-white rounded-[12px] group-hover:scale-[1.02] group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
