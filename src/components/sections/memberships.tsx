"use client"

import { motion, cubicBezier } from "framer-motion"
import Image from "next/image"
import { data, type Membership } from "@/data"

const { memberships: membershipsConfig } = data
const memberships = membershipsConfig.items

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
}

function MembershipCard({ membership }: { membership: Membership }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, backgroundColor: "#fefefe" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        relative flex flex-col items-center justify-center gap-3 p-4
        min-h-40 md:min-h-62.5
        bg-white rounded-2xl
        border border-gray-200/50
        cursor-pointer
        ${membership.gridClass || ""}
      `}
    >
      {membership.image && (
        <Image
          src={membership.image}
          alt={membership.name}
          width={120}
          height={120}
          className="object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      )}
      <h3 className="text-lg font-medium text-gray-600 text-center px-6 leading-tight tracking-tighter">
        {membership.name}
      </h3>
    </motion.div>
  )
}

export function Memberships() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="relative p-4 md:p-8 lg:p-12 bg-white rounded-3xl overflow-hidden border border-gray-200/50">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[5rem] font-body font-medium text-green-950 mb-8 tracking-tighter text-center"
            >
              {membershipsConfig.sectionTitle}
            </motion.h2>
          </div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4"
          >
            {memberships.map((membership) => (
              <MembershipCard key={membership.id} membership={membership} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
