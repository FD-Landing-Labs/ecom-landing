"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Certificate {
  id: string
  name: string
  image: string
}

const leftCertificates: Certificate[] = [
  { id: "iso-22000", name: "ISO 22000", image: "/images/certificates/c1.jpg" },
  { id: "haccp", name: "HACCP", image: "/images/certificates/c2.jpg" },
  { id: "gmp", name: "GMP Certified", image: "/images/certificates/c3.jpg" },
]

const rightCertificates: Certificate[] = [
  { id: "usda", name: "USDA Organic", image: "/images/certificates/c4.jpg" },
  { id: "eu-organic", name: "EU Organic", image: "/images/certificates/c5.jpg" },
  { id: "fair-trade", name: "Fair Trade", image: "/images/certificates/c6.jpg" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

function HexagonCard({ certificate, index }: { certificate: Certificate; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative w-24 h-28 md:w-32 md:h-36 lg:w-36 lg:h-40"
    >
      {/* Hexagon Shape */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={certificate.image}
            alt={certificate.name}
            width={60}
            height={60}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </motion.div>
  )
}

export function Certificates() {
  return (
    <section className=" bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="relative py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 bg-gray-200/50 rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[5rem] font-body font-medium text-green-950 mb-8 tracking-tighter text-center"
            >
              Certificates & Partners
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-gray-500 text-lg leading-tight tracking-tighter"
            >
              Our commitment to quality is backed by internationally recognized certifications
              and trusted partnerships that ensure the highest standards in every product.
            </motion.p>
          </div>

          {/* Hexagon Grid Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {/* Left Certificates */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2 md:gap-3"
            >
              {leftCertificates.map((cert, index) => (
                <HexagonCard key={cert.id} certificate={cert} index={index} />
              ))}
            </motion.div>

            {/* Center Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-40 h-44 md:w-52 md:h-56 lg:w-72 lg:h-72 mx-4 lg:mx-8"
            >
              <div
                className="absolute inset-0 rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-green-950 to-green-900 p-6"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <Image
                  src="/images/white.png"
                  alt="AGRI Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Right Certificates */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2 md:gap-3"
            >
              {rightCertificates.map((cert, index) => (
                <HexagonCard key={cert.id} certificate={cert} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
