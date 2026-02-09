"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";

export default function CTA() {
  return (
    <section aria-label="Call to Action" className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          {Strings.CTA.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-xl text-gray-300 mb-12"
        >
          {Strings.CTA.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <button
            data-tally-open={Strings.Links.tallyFormId}
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            {Strings.CTA.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
