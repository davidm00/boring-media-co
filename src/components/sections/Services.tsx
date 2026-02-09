"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Strings } from "@/lib/strings";

const services = Object.values(Strings.Services.items);

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className="py-20 sm:py-32 bg-boring-gray"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {Strings.Services.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
            {Strings.Services.subtitle}
          </p>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl bg-boring-gray flex items-center justify-center group-hover:bg-boring-blue/10 transition-colors duration-300">
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-boring-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl bg-boring-gray flex items-center justify-center group-hover:bg-boring-blue/10 transition-colors duration-300">
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-boring-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            {Strings.Services.bottomCta}
          </p>
          <button
            data-tally-open={Strings.Links.tallyFormId}
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="inline-flex items-center gap-2 px-8 py-4 bg-boring-blue text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
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
