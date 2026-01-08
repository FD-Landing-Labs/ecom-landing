"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  image: string
}

const products: Product[] = [
  {
    id: "fresh-coconuts",
    name: "Fresh Coconuts",
    description: "Premium quality coconuts sourced from organic farms",
    image: "/images/products/fresh.png",
  },
  {
    id: "desiccated",
    name: "Desiccated Coconut",
    description: "Finely dried coconut flakes for baking and cooking",
    image: "/images/products/dessic.png",
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    description: "Pure cold-pressed oil for cooking and wellness",
    image: "/images/products/oil.png",
  },
  {
    id: "coconut-flour",
    name: "Coconut Flour",
    description: "Gluten-free flour alternative for healthy baking",
    image: "/images/products/flour.png",
  },
  {
    id: "dehydrated",
    name: "Dehydrated Coconut",
    description: "Naturally dried coconut pieces for versatile use",
    image: "/images/products/dehyd.png",
  },
  {
    id: "coco-charcoal",
    name: "Coco Shell Charcoal",
    description: "Sustainable eco-friendly charcoal for grilling",
    image: "/images/products/charcoal.png",
  },
  {
    id: "coco-chips",
    name: "Coco Shell Chips",
    description: "Natural mulch and bedding for gardens and farms",
    image: "/images/products/chips.png",
  },
  {
    id: "fresh-produce",
    name: "Fruits & Vegetables",
    description: "Fresh seasonal produce from local farms",
    image: "/images/products/veg.png",
  },
  {
    id: "king-coconut",
    name: "King Coconut",
    description: "Premium hydrating coconuts rich in electrolytes",
    image: "/images/products/king.png",
  },
  {
    id: "virgin-oil",
    name: "Coconut Virgin Oil",
    description: "Extra virgin oil extracted through cold-pressing",
    image: "/images/products/virgin.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group flex flex-col rounded-4xl bg-[#f8f8f8] hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden"
    >
      {/* Header: Name & Tags */}
      <div className="p-6">
        {/* Product Name */}
        <h2 className="text-lg md:text-2xl font-semibold text-orange-950 tracking-tighter">
          {product.name}
        </h2>

        {/* Description */}
        <p className="mt-2 text-base text-gray-400 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Image Container - 1:1 Aspect Ratio */}
      <div className="relative aspect-square m-3 mt-0 rounded-2xl overflow-hidden bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-2 right-2 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          aria-label={`View ${product.name}`}
        >
          <ArrowUpRight className="w-4 h-4 text-gray-700" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export function Products() {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-[6rem] font-body font-medium text-green-950 mb-8 md:mb-20 tracking-tighter md:text-center"
        >
          Our Products
        </motion.h2>

        {/* Simple 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
