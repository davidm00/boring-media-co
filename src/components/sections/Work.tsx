"use client";

import { motion } from "framer-motion";
import { Strings } from "@/lib/strings";

export default function Work() {
  // Placeholder projects - will be replaced with real case studies
  const placeholderProjects = Array(3).fill(Strings.Work.placeholder);

  return (
    <section id="work" aria-label="Our Work" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {Strings.Work.title}
          </h2>
          <p className="text-xl text-gray-600">{Strings.Work.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] flex items-center justify-center"
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-boring-gray flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-700">
                  {Strings.Work.comingSoon}
                </h3>
                <p className="text-gray-500 text-sm">
                  {Strings.Work.comingSoonDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
