"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Slide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  backgroundColor: string
  titleColor: string
  subtitleColor: string
}

const slides: Slide[] = [
  {
    id: "coconut",
    title: "COCONUT",
    subtitle: "FRESH",
    description: "Versatile tropical fruit with hydrating water, rich meat, and milk",
    image: "/images/fresh.png",
    backgroundColor: "#f5f0e8",
    titleColor: "#6b4a35",
    subtitleColor: "#a67c5b",
  },
  {
    id: "mango",
    title: "COCONUT",
    subtitle: "DESICATED",
    description: "Sweet tropical delight bursting with vitamins and golden flavor",
    image: "/images/desicated.png",
    backgroundColor: "#fff8e8",
    titleColor: "#c4661f",
    subtitleColor: "#e8a33c",
  },
  {
    id: "coco-shell",
    title: "COCO SHELL",
    subtitle: "CHIPS & POWDER",
    description: "Eco-friendly coconut shell products for sustainable living",
    image: "/images/shell.png",
    backgroundColor: "#f5f0e8",
    titleColor: "#6b4a35",
    subtitleColor: "#a67c5b",
  },
  {
    id: "avocado",
    title: "FRUITS",
    subtitle: "VEGETABLES &",
    description: "Nutrient-dense superfood with smooth texture and healthy fats",
    image: "/images/fv.png",
    backgroundColor: "#f0f5e8",
    titleColor: "#4a5d3a",
    subtitleColor: "#7a9c5a",
  },
  {
    id: "coco-oil",
    title: "VIRGIN OIL",
    subtitle: "COCONUT",
    description: "High-quality coconut oil for cooking, skincare, and haircare",
    image: "/images/oil.png",
    backgroundColor: "#f5f0e8",
    titleColor: "#6b4a35",
    subtitleColor: "#a67c5b",
  }
]

const AUTOPLAY_INTERVAL = 5000

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  // Auto-play
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(nextSlide, AUTOPLAY_INTERVAL)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const currentSlide = slides[currentIndex]

  // Split title into characters for staggered animation
  const titleChars = currentSlide.title.split("")

  return (
    <section
      className="relative min-h-[95vh] md:min-h-screen overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: currentSlide.backgroundColor }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Large Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + "-title"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center leading-none"
          >
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-[10vw] md:text-[5vw] lg:text-[4vw]"
              style={{ color: currentSlide.subtitleColor }}
            >
              {currentSlide.subtitle}
            </motion.span>
            {/* Main Title */}
            <div className="flex overflow-hidden">
              {titleChars.map((char, i) => (
                <motion.span
                  key={`${currentSlide.id}-char-${i}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="font-display text-[28vw] md:text-[18vw] lg:text-[20vw] leading-none tracking-tight"
                  style={{ color: currentSlide.titleColor }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Image - Layered on top of text, touching bottom edge */}
      <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + "-image"}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.95, y: -40 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative w-[70vw] md:w-[42vw] aspect-square mb-20 lg:-mb-[15%]"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full "
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Content - Description & Button */}
      <div className="absolute top-30 md:bottom-0 left-0 right-0 z-30">
        <div className="container px-6 md:px-8 lg:px-16 pb-12 md:pb-16 lg:pb-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide.id + "-desc"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-[280px] text-xl md:text-2xl text-gray-500 leading-tight tracking-tighter font-body font-medium"
                style={{ color: currentSlide.titleColor }}
              >
                {currentSlide.description}
              </motion.p>
            </AnimatePresence>

            {/* Navigation Dots & Button */}
            <div className="flex items-center gap-8">
              {/* Navigation Dots */}
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className="group relative p-1"
                    aria-label={`Go to ${slide.title} slide`}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full transition-colors"
                      animate={{
                        scale: index === currentIndex ? 1 : 0.8,
                        backgroundColor: index === currentIndex
                          ? currentSlide.titleColor
                          : "#d1d5db",
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  </button>
                ))}
              </div>

              {/* View More Button
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 h-auto text-base tracking-tighter font-medium border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
                >
                  View More
                </Button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5 z-40">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? undefined : "100%" }}
          transition={{
            duration: AUTOPLAY_INTERVAL / 1000,
            ease: "linear",
          }}
          className="h-full"
          style={{ backgroundColor: currentSlide.titleColor }}
        />
      </div>
    </section>
  )
}
