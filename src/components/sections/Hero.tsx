"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { Strings } from "@/lib/strings";

export default function Hero() {
  return (
    <section aria-label="Hero" className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden relative">
      {/* Subtle radial glow behind logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(52,91,209,0.15) 0%, rgba(52,91,209,0.05) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Large hero logo — the centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <div className="overflow-hidden h-[140px] sm:h-[180px] md:h-[240px] w-full max-w-[320px] sm:max-w-[460px] md:max-w-[620px] flex items-center justify-center">
            <Logo variant="white" width={700} height={280} className="scale-[1.1] object-contain" priority />
          </div>
        </motion.div>

        {/* Thin accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mb-10 h-px w-48 bg-gradient-to-r from-transparent via-boring-blue to-transparent"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          {Strings.Hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          {Strings.Hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <Button variant="primary">{Strings.Hero.ctaButton}</Button>
        </motion.div>
      </div>
    </section>
  );
}
