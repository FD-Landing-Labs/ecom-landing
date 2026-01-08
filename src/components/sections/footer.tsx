"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const topNavLinks = [
  { name: "PRIVACY POLICY", href: "/privacy" },
  { name: "TERMS", href: "/terms" },
  { name: "COOKIES", href: "/cookies" },
  { name: "SITEMAP", href: "/sitemap" },
]

const linkGroups = [
  {
    category: "PRODUCTS",
    links: [
      { name: "Fresh Coconuts", href: "#products" },
      { name: "Desiccated", href: "#products" },
      { name: "Coconut Oil", href: "#products" },
      { name: "Coco Shell", href: "#products" },
    ],
  },
  {
    category: "CONTACT",
    links: [
      { name: "No:100, Thimbilla Estate, Puttalam Rd, Chilaw", href: "#contact" },
      { name: "+94 324650202 | +94322221050 | +94322221814", href: "#contact" },
      { name: "info@asagriexports.lk", href: "#contact" },
    ],
  },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  // { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto py-4">
        {/* Main Footer Container */}
        <div className="rounded-3xl overflow-hidden">
          {/* Top Section - Dark */}
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-8 bg-gray-300/40 p-4 md:p-8 lg:p-12 rounded-2xl flex flex-col items-center justify-center">
                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.2em] text-gray-700 uppercase"
                >
                  Trusted Exporter
                </motion.span>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-body tracking-tighter font-semibold text-green-950 leading-[1] text-center"
                >
                  AS AGRI <br />Premium Coconut Products <br />From Sri Lanka
                </motion.h2>

                {/* Logo Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-[#0F5A36]"
                >
                  <Image
                    src="/images/white.png"
                    alt="AS AGRI Logo"
                    fill
                    className="object-contain p-4"
                  />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    className="rounded-full bg-white text-black hover:bg-gray-200 px-8"
                  >
                    Contact Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-gray-400 hover:bg-white/10 px-8"
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-10 w-full bg-gray-300/40 text-gray-100 p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col items-start justify-center">
                {/* Top Nav Links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap items-center justify-center gap-6 text-[14px] uppercase text-gray-600"
                >
                  {topNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="hover:text-gray-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>

                {/* Link Groups */}
                <div className="space-y-6 w-full">
                  {linkGroups.map((group, groupIndex) => (
                    <motion.div
                      key={group.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * groupIndex }}
                      className="border-t border-[#cacaca] pt-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-[12px] uppercase text-gray-500 w-28 shrink-0 tracking-widest font-medium">
                          {group.category}
                        </span>
                        <div className="flex-1 flex flex-col divide-y divide-gray-400">
                          {group.links.map((link) => (
                            <Link
                              key={`${group.category}-${link.name}`}
                              href={link.href}
                              className="py-3 text-lg tracking-tighter font-medium text-right text-gray-500 hover:text-gray-800 transition-colors "
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3 pt-2 w-full justify-center"
                >
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#e1e1e1] border border-[#7b7b7b] flex items-center justify-center hover:border-gray-400 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-500" />
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Padding */}
      {/* <div className="h-8 bg-[#f5f5f5]" /> */}
    </footer>
  )
}
