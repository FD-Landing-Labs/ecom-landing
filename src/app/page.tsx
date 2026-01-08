import { Navbar } from "@/components/sections/navbar"
import { HeroCarousel } from "@/components/sections/hero-carousel"
import { About } from "@/components/sections/about"
import { Products } from "@/components/sections/products"
import { Certificates } from "@/components/sections/certificates"
import { Memberships } from "@/components/sections/memberships"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Additional Sections */}
      <main className="bg-[#f5f5f5]">
        {/* About Section */}
        <About />

        {/* Products Section */}
        <Products />

        {/* Certificates & Partners Section */}
        <Certificates />

        {/* Memberships Section */}
        <Memberships />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  )
}
