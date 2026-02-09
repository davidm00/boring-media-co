"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";
import { fadeUp, scaleInStagger, viewport } from "@/lib/motion";

const projects = Strings.Work.projects;

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position to update pagination
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll("[data-card]");
      if (cards.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-card]");
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft =
        container.scrollLeft +
        (cardRect.left - containerRect.left) -
        (containerRect.width - cardRect.width) / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const scrollNext = () => {
    if (activeIndex < projects.length - 1) scrollToIndex(activeIndex + 1);
  };

  return (
    <section id="work" aria-label="Our Work" className={`${styles.section} bg-white overflow-hidden`}>
      {/* Header */}
      <div className={`${styles.sectionContainer} mb-12`}>
        <motion.div
          {...fadeUp}
          viewport={viewport.none}
          className="text-center"
        >
          <h2 className={`${styles.sectionTitleDark} mb-4`}>
            {Strings.Work.title}
          </h2>
          <p className={styles.sectionSubtitle}>{Strings.Work.subtitle}</p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          aria-label={Strings.Work.prevAriaLabel}
          className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 ${styles.galleryArrow} ${
            activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          aria-label={Strings.Work.nextAriaLabel}
          className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 ${styles.galleryArrow} ${
            activeIndex === projects.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Gallery Container */}
        <div
          ref={containerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[12.5vw]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-card
              onClick={() => scrollToIndex(index)}
              {...scaleInStagger(index)}
              viewport={viewport.gallery}
              className="snap-center shrink-0 w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
                priority={index < 2}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`${Strings.Work.dotAriaLabel} ${index + 1}`}
            className={`${styles.paginationDot} ${
              activeIndex === index
                ? styles.paginationDotActive
                : styles.paginationDotInactive
            }`}
          />
        ))}
      </div>
    </section>
  );
}
