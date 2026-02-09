"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";
import { ctaAnimations, viewport } from "@/lib/motion";

export default function CTA() {
  return (
    <section aria-label="Call to Action" className={`${styles.section} px-4 sm:px-6 bg-black text-white`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          {...ctaAnimations.headline}
          viewport={viewport.default}
          className={`${styles.sectionTitle} mb-6`}
        >
          {Strings.CTA.headline}
        </motion.h2>

        <motion.p
          {...ctaAnimations.subheadline}
          viewport={viewport.default}
          className={`${styles.bodyDark} text-xl mb-12`}
        >
          {Strings.CTA.subheadline}
        </motion.p>

        <motion.div
          {...ctaAnimations.button}
          viewport={viewport.default}
        >
          <button
            data-tally-open={Strings.Links.tallyFormId}
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className={styles.secondaryButton}
          >
            {Strings.CTA.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
