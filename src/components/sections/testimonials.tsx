"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
  featured?: boolean
  featuredImage?: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jordan Peterson",
    role: "Founder",
    company: "Vest",
    quote: "Their questions were sharp, their ideas sharper. The result finally looks and feels like us.",
    avatar: "/images/avatars/user2.jpg",
  },
  {
    id: "2",
    name: "Amira D",
    role: "Marketing Lead",
    company: "Sonder",
    quote: "The team understood our brand better than we did. They didn't just redesign the site — they helped reposition the company.",
    avatar: "/images/avatars/user1.jpg",
  },
  {
    id: "3",
    name: "Michelle Davis",
    role: "Creative Director",
    company: "Allora",
    quote: "We thought we needed a website. What we got was clarity, confidence, and a way to tell our story.",
    avatar: "/images/avatars/user3.jpg",
  },
  {
    id: "4",
    name: "Sam Harris",
    role: "Head of Product",
    company: "Fieldnotes",
    quote: "",
    featured: true,
    featuredImage: "/videos/testi.mp4",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

function AvatarPlaceholder({ name }: { name: string }) {
  const colors = [
    "bg-rose-100",
    "bg-blue-100",
    "bg-amber-100",
    "bg-emerald-100",
  ]
  const colorIndex = name.length % colors.length

  return (
    <div className={`w-12 h-12 rounded-xl ${colors[colorIndex]} flex items-center justify-center`}>
      <span className="text-lg font-semibold text-gray-700">
        {name.charAt(0)}
      </span>
    </div>
  )
}

function TestimonialCard1({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex flex-col justify-between min-h-[400px] bg-white rounded-2xl p-6 border border-gray-200/50"
    >
      {/* Top: Avatar and Info */}
      <div>
        <div className="mb-4">
          {testimonial.avatar ? (
            <div className="relative w-12 h-12 rounded-xl overflow-hidden">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <AvatarPlaceholder name={testimonial.name} />
          )}
        </div>
        <h4 className="text-xl tracking-tighter font-semibold text-green-900">{testimonial.name}.</h4>
        <p className="text-xs uppercase tracking-widest text-green-800">{testimonial.role} at {testimonial.company}.</p>
      </div>

      {/* Bottom: Quote */}
      <p className="mt-8 text-base text-gray-800 leading-tight tracking-tighter">
        "{testimonial.quote}"
      </p>
    </motion.div>
  )
}

function TestimonialCard2({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex flex-col justify-between h-full bg-white rounded-2xl p-6 border border-gray-200/50"
    >
      {/* Top: Quote */}
      <p className="text-base font-medium text-gray-800 leading-tight tracking-tighter">
        "{testimonial.quote}"
      </p>

      {/* Bottom: Avatar and Info */}
      <div className="mt-8">
        <div className="mb-3">
          {testimonial.avatar ? (
            <div className="relative w-12 h-12 rounded-xl overflow-hidden">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <AvatarPlaceholder name={testimonial.name} />
          )}
        </div>
        <h4 className="text-xl tracking-tighter font-semibold text-green-900">{testimonial.name}.</h4>
        <p className="text-xs uppercase tracking-widest text-green-800">{testimonial.role} at {testimonial.company}.</p>
      </div>
    </motion.div>
  )
}

function FeaturedCard({ testimonial }: { testimonial: Testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = async () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      // Reset to beginning if ended
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0
      }
      try {
        await videoRef.current.play()
      } catch (error) {
        console.error("Video play failed:", error)
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative h-full min-h-[500px] md:min-h-full rounded-2xl overflow-hidden cursor-pointer group"
      onClick={togglePlay}
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0 bg-gray-800">
        {testimonial.featuredImage ? (
          <video
            ref={videoRef}
            src={testimonial.featuredImage}
            poster="/images/avatars/user4.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onEnded={() => setIsPlaying(false)}
            playsInline
            // muted
            preload="auto"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        )}
        {/* Dark Overlay */}
        <div className={`absolute inset-0 z-10 transition-colors ${isPlaying ? 'bg-black/10' : 'bg-black/30 group-hover:bg-black/40'}`} />
      </div>

      {/* Play/Pause Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation()
          togglePlay()
        }}
        className={`absolute z-20 top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all ${isPlaying ? 'opacity-70' : 'opacity-100'}`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white fill-white" />
        ) : (
          <Play className="w-5 h-5 text-white fill-white" />
        )}
      </motion.button>

      {/* Content */}
      <div className={`absolute z-20 bottom-0 left-0 right-0 p-6 transition-opacity duration-300 ${isPlaying ? 'opacity-70' : 'opacity-100'}`}>
        <h4 className="text-xl tracking-tighter font-semibold text-white">{testimonial.name}.</h4>
        <p className="text-xs uppercase tracking-widest text-gray-300">{testimonial.role} at {testimonial.company}.</p>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          {/* Headline and Description Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left: Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-body capitalize font-medium text-green-900 tracking-tighter leading-none "
            >
              Clients share<br />
              their experience.
            </motion.h2>

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-end"
            >
              <p className="text-base text-gray-500 leading-relaxed max-w-md lg:ml-auto tracking-tighter">
                <span className="font-semibold text-gray-800">Every project is a partnership,</span>{" "}
                and the feedback we receive guides how we grow. Here&apos;s what some of our collaborators had to say about working together.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Card 1 - Avatar top, quote bottom */}
          <TestimonialCard1 testimonial={testimonials[0]} />
          {/* Card 1 - Avatar top, quote bottom */}

          {/* Card 2 - Quote top, avatar bottom */}
          <TestimonialCard2 testimonial={testimonials[1]} />

          <TestimonialCard1 testimonial={testimonials[2]} />
          {/* Card 4 - Featured with image */}
          <FeaturedCard testimonial={testimonials[3]} />
        </motion.div>
      </div>
    </section>
  )
}
