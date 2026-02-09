"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";
import { fadeUp, fadeUpStagger, viewport } from "@/lib/motion";

const services = Object.values(Strings.Services.items);

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className={`${styles.sectionWide} bg-boring-gray`}
    >
      <div className={styles.sectionContainerNarrow}>
        {/* Header */}
        <motion.div
          {...fadeUp}
          viewport={viewport.none}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <h2 className={`${styles.sectionTitle} mb-6`}>
            {Strings.Services.title}
          </h2>
          <p className={`${styles.bodyLg} ${styles.textSecondary} leading-relaxed mb-4`}>
            {Strings.Services.subtitle}
          </p>
          <p className={`${styles.body} ${styles.textMuted} leading-relaxed`}>
            {Strings.Services.intro}
          </p>
        </motion.div>

        {/* Services Pyramid: 3 on top, 2 centered below on desktop; stacked on mobile */}
        <div className="mb-16 sm:mb-20">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeUpStagger(index)}
                viewport={viewport.tight}
                className={`${styles.card} ${styles.cardHover} group`}
              >
                <div className="mb-5">
                  <div className={styles.iconBadge}>
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className={styles.iconImage}
                    />
                  </div>
                </div>
                <h3 className={`text-xl md:text-2xl font-semibold leading-[1.2] mb-3 ${styles.textPrimary} group-hover:text-boring-blue ${styles.transitionColors}`}>
                  {service.title}
                </h3>
                <p className={`${styles.body} ${styles.textSecondary} leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 cards, centered on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 lg:max-w-[66.666%] lg:mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeUpStagger(index + 3)}
                viewport={viewport.tight}
                className={`${styles.card} ${styles.cardHover} group`}
              >
                <div className="mb-5">
                  <div className={styles.iconBadge}>
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className={styles.iconImage}
                    />
                  </div>
                </div>
                <h3 className={`text-xl md:text-2xl font-semibold leading-[1.2] mb-3 ${styles.textPrimary} group-hover:text-boring-blue ${styles.transitionColors}`}>
                  {service.title}
                </h3>
                <p className={`${styles.body} ${styles.textSecondary} leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Single CTA */}
        <motion.div
          {...fadeUp}
          viewport={viewport.none}
          className="text-center pt-8 border-t border-gray-200"
        >
          <p className={`${styles.bodyLg} ${styles.textSecondary} mb-6`}>
            {Strings.Services.bottomCta}
          </p>
          <button
            data-tally-open={Strings.Links.tallyFormId}
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className={styles.primaryButtonInline}
          >
            {Strings.Services.ctaButton}
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
