"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";

const testimonials = Strings.SocialProof.testimonials;

export default function SocialProof() {
  return (
    <section
      aria-label="Client Testimonials"
      className="py-16 sm:py-24 bg-boring-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {Strings.SocialProof.title}
          </h2>
          <p className="text-xl text-gray-600">
            {Strings.SocialProof.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
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
