"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";
import { fadeLeft, fadeUp, fadeRightStagger, viewport } from "@/lib/motion";

export default function ValueProp() {
  return (
    <section id="about" aria-label="Why Boring" className={`${styles.section} px-4 sm:px-6 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Message */}
          <motion.div
            {...fadeLeft}
            viewport={viewport.default}
          >
            <h2 className={`${styles.sectionTitle} mb-6`}>
              {Strings.ValueProp.title}
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              {Strings.ValueProp.subtitle}
            </p>
            <p className={`${styles.bodyMuted} text-lg`}>
              {Strings.ValueProp.description}
            </p>
          </motion.div>

          {/* Right Column - Value Points */}
          <div className="space-y-8">
            {Strings.ValueProp.points.map((point, index) => (
              <motion.div
                key={point.title}
                {...fadeRightStagger(index)}
                viewport={viewport.loose}
                className="border-l-4 border-boring-blue pl-6"
              >
                <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
                <p className={styles.bodyMuted}>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transition to Services */}
        <motion.div
          {...fadeUp}
          viewport={viewport.none}
          className="mt-16 sm:mt-20 text-center"
        >
          <a
            href="#services"
            className={`inline-flex items-center gap-2 text-boring-blue text-lg font-medium hover:gap-3 ${styles.transitionAll}`}
          >
            {Strings.ValueProp.transitionCta}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
