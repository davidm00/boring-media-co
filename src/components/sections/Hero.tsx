"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";
import { heroGlow, heroLogo, scaleLine, heroAnimations } from "@/lib/motion";

export default function Hero() {
  return (
    <section aria-label="Hero" className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden relative">
      {/* Subtle radial glow behind logo */}
      <motion.div
        {...heroGlow}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[400px] rounded-full pointer-events-none hero-glow"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Large hero logo — the centerpiece */}
        <motion.div
          {...heroLogo}
          className="mb-6 flex justify-center"
        >
          <div className="overflow-hidden h-[140px] sm:h-[180px] md:h-[240px] w-full max-w-[320px] sm:max-w-[460px] md:max-w-[620px] flex items-center justify-center">
            <Logo variant="white" width={700} height={280} className="scale-[1.1] object-contain" priority />
          </div>
        </motion.div>

        {/* Thin accent line */}
        <motion.div
          {...scaleLine}
          className={`mx-auto mb-10 ${styles.accentLine}`}
        />

        <motion.h1
          {...heroAnimations.headline}
          className={`${styles.heroTitle} mb-6`}
        >
          {Strings.Hero.headline}
        </motion.h1>

        <motion.p
          {...heroAnimations.subheadline}
          className={`${styles.heroSubtitle} mb-10 sm:mb-14 max-w-2xl mx-auto`}
        >
          {Strings.Hero.subheadline}
        </motion.p>

        <motion.div {...heroAnimations.cta}>
          <button
            data-tally-open={Strings.Links.tallyFormId}
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className={styles.primaryButton}
          >
            {Strings.Hero.ctaButton}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
