"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";
import { fadeUp, fadeUpStagger, viewport } from "@/lib/motion";

const testimonials = Strings.SocialProof.testimonials;

export default function SocialProof() {
  return (
    <section
      aria-label="Client Testimonials"
      className={`${styles.section} bg-boring-gray`}
    >
      <div className={styles.sectionContainer}>
        {/* Header */}
        <motion.div
          {...fadeUp}
          viewport={viewport.none}
          className={styles.sectionHeader}
        >
          <h2 className={`${styles.sectionTitle} mb-4`}>
            {Strings.SocialProof.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {Strings.SocialProof.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              {...fadeUpStagger(index)}
              viewport={viewport.tight}
              className={`${styles.card} ${styles.cardHoverSoft}`}
            >
              {/* Quote Mark */}
              <svg
                className="w-10 h-10 text-boring-blue/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <footer className="border-t border-gray-100 pt-4">
                <cite className="not-italic">
                  <div className="font-bold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
