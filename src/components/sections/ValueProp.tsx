"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";

export default function ValueProp() {
  return (
    <section id="about" aria-label="Why Boring" className="py-16 sm:py-24 px-4 sm:px-6 bg-boring-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {Strings.ValueProp.title}
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              {Strings.ValueProp.subtitle}
            </p>
            <p className="text-lg text-gray-600">
              {Strings.ValueProp.description}
            </p>
          </motion.div>

          {/* Right Column - Value Points */}
          <div className="space-y-8">
            {Strings.ValueProp.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-60px" }}
                className="border-l-4 border-boring-blue pl-6"
              >
                <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
