"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What kind of clients do you work with?",
    answer: "We work with businesses of all sizes, from local farms to international food distributors. Our clients include retailers, wholesalers, food processing companies, and direct importers looking for premium quality coconut products from Sri Lanka.",
  },
  {
    id: "2",
    question: "What products do you offer?",
    answer: "We offer a comprehensive range of coconut products including fresh coconuts, desiccated coconut, coconut oil, virgin coconut oil, coconut flour, coconut cream, coco shell charcoal, and coco shell chips. We also export fresh fruits and vegetables.",
  },
  {
    id: "3",
    question: "How do you ensure product quality?",
    answer: "Quality is our top priority. All our products are sourced from certified organic farms and processed in HACCP and ISO 22000 certified facilities. We conduct rigorous quality checks at every stage of production and maintain full traceability.",
  },
  {
    id: "4",
    question: "What is your typical shipping timeline?",
    answer: "Shipping timelines vary by destination and product type. Generally, orders are processed within 5-7 business days, with international shipping taking 2-4 weeks depending on the destination port. We offer both sea and air freight options.",
  },
  {
    id: "5",
    question: "Can you handle custom orders?",
    answer: "Absolutely! We specialize in customizing orders to meet specific client requirements. Whether it's custom packaging, private labeling, or specific product specifications, our team works closely with you to deliver exactly what you need.",
  },
  {
    id: "6",
    question: "Do you offer samples before bulk orders?",
    answer: "Yes, we provide product samples for quality evaluation before committing to bulk orders. Sample costs and shipping are typically credited towards your first bulk order. Contact us to arrange your sample shipment.",
  },
  {
    id: "7",
    question: "What certifications do your products have?",
    answer: "Our products carry multiple international certifications including ISO 22000, HACCP, GMP, USDA Organic, EU Organic, and Fair Trade certifications. These ensure our products meet the highest global standards for quality and safety.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200/50"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-gray-900 pr-4 tracking-tight">
          {index + 1}. {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
        >
          <Plus className="w-4 h-4 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-gray-600 leading-relaxed tracking-tight">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-body font-semibold text-green-900 tracking-tighter leading-[1.1] mb-6"
              >
                Wondering How We Work?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-500 leading-relaxed tracking-tight"
              >
                Answers to common questions about our process, products, and how we work.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            {/* Count Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-end mb-6"
            >
              {/* <span className="text-sm text-gray-400">
                ({faqs.length.toString().padStart(2, "0")})
              </span> */}
            </motion.div>

            {/* Accordion List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  item={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
