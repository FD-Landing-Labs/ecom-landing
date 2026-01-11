"use client"

import { motion } from "framer-motion"
import { data } from "@/data"

const { about } = data

export function About() {
  return (
    <section id="about" className="px-4 md:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden rounded-3xl bg-gray-200 py-8 md:py-28 lg:py-24 px-6 md:px-12 lg:px-20"
      >
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto  md:text-center">
          {/* Main Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl leading-[1.2]"
          >
            <span className="font-display" style={{ color: about.style.brandColor }}>{about.brandName}{about.brandNameSuffix}</span>
            <span className="tracking-tighter font-medium" style={{ color: about.style.textColor }}>
              {about.description}
            </span>
          </motion.h2>
        </div>
      </motion.div>
    </section>
  )
}
