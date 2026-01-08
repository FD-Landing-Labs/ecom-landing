import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
interface Product {
    id: string
    name: string
    tags: string[]
    image: string
    gridArea: string
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}


export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ gridArea: product.gridArea }}
            className="group flex flex-col rounded-3xl bg-[#f8f8f8] p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
        >
            {/* Header: Name & Tags */}
            <div className="mb-4">
                {/* Product Name */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">
                    {product.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs md:text-sm text-gray-600"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Image Container */}
            <div className="relative flex-1 min-h-[180px] md:min-h-[200px] rounded-2xl overflow-hidden bg-gray-200">
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
                    className="absolute bottom-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                    aria-label={`View ${product.name}`}
                >
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                </motion.button>
            </div>
        </motion.div>
    )
}
