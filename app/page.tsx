"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TagSelector } from "@/components/tag-selector"
import { ListingCard } from "@/components/listing-card"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import MaintenanceWrapper from "@/components/maintenance-wrapper"

// Mock data for listings
const mockListings = [
  {
    id: "1",
    title: "Bali Adventure Tour",
    description:
      "Experience the breathtaking beauty of Bali with our guided adventure tour. Visit ancient temples, pristine beaches, and lush rice terraces.",
    category: "travel",
    tags: ["adventure", "cultural", "nature"],
    location: "Bali, Indonesia",
    rating: 4.8,
    price: "RM 299",
    image: "/bali-temple-sunset.png",
    claimed: true,
    businessName: "Langkawi Tours",
    businessPhone: "+60 12-345 6789",
    businessEmail: "info@lktours.com",
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    description:
      "Join industry leaders and innovators at the biggest tech conference of the year. Network, learn, and discover the future of technology.",
    category: "events",
    tags: ["tech", "networking", "innovation"],
    location: "San Francisco, CA",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    rating: 4.9,
    price: "RM 599",
    image: "/tech-conference-stage.png",
  },
  {
    id: "3",
    title: "Senior React Developer",
    description:
      "We're looking for an experienced React developer to join our growing team. Remote-friendly position with competitive benefits.",
    category: "jobs",
    tags: ["tech", "remote", "react"],
    location: "Remote / New York, NY",
    price: "RM 120k - RM 150k",
    image: "/developer-coding-office.png",
    claimed: true,
    businessName: "Techify Co.",
    businessPhone: "+1 (212) 555-0101",
    businessEmail: "hr@techify.co",
  },
  {
    id: "4",
    title: "Home Cleaning Service",
    description:
      "Professional home cleaning services with eco-friendly products. Reliable, thorough, and affordable cleaning for your peace of mind.",
    category: "services",
    tags: ["home", "cleaning", "eco-friendly"],
    location: "Los Angeles, CA",
    rating: 4.7,
    price: "RM 80/visit",
    image: "/clean-modern-interior.png",
  },
  {
    id: "5",
    title: "Express Train to Paris",
    description:
      "High-speed rail service connecting major European cities. Comfortable, efficient, and environmentally friendly travel option.",
    category: "transport",
    tags: ["train", "europe", "fast"],
    location: "London to Paris",
    time: "3h 20min",
    price: "From RM 89",
    image: "/high-speed-train-station.png",
  },
  {
    id: "6",
    title: "Jazz Festival Weekend",
    description:
      "Three days of incredible jazz performances featuring world-renowned artists and emerging talents in an intimate outdoor setting.",
    category: "events",
    tags: ["music", "jazz", "outdoor"],
    location: "New Orleans, LA",
    date: "April 20-22, 2024",
    rating: 4.6,
    price: "RM 199",
    image: "/jazz-festival-outdoor-stage.png",
  },
  {
    id: "7",
    title: "Mountain Hiking Retreat",
    description:
      "Escape to the mountains for a rejuvenating hiking retreat. Perfect for nature lovers seeking adventure and tranquility.",
    category: "travel",
    tags: ["adventure", "nature", "hiking"],
    location: "Rocky Mountains, CO",
    rating: 4.9,
    price: "RM 450",
    image: "/mountain-hiking-trail-sunrise.png",
  },
  {
    id: "8",
    title: "Marketing Manager Position",
    description:
      "Lead our marketing team in developing innovative campaigns. Great opportunity for creative professionals with leadership experience.",
    category: "jobs",
    tags: ["marketing", "leadership", "creative"],
    location: "Austin, TX",
    price: "RM 85k - RM 110k",
    image: "/marketing-team-meeting-office.png",
  },
  {
    id: "9",
    title: "Langkawi Tours (Business Listing)",
    description:
      "Local tour operator offering island hopping, snorkeling, and private charters.",
    category: "business",
    tags: ["travel", "tour", "island"],
    location: "Langkawi, MY",
    rating: 4.8,
    image: "/bali-temple-sunset.png",
    claimed: true,
    businessName: "Langkawi Tours",
    businessPhone: "+60 12-345 6789",
    businessEmail: "info@lktours.com",
  },
  {
    id: "10",
    title: "Homepage Banner Promo",
    description:
      "Premium banner placement on homepage for 30 days to maximize visibility.",
    category: "promotions",
    tags: ["ads", "banner"],
    location: "Site-wide",
    price: "RM 499",
    image: "/clean-modern-interior.png",
  },
  {
    id: "11",
    title: "Sidebar Skyscraper",
    description:
      "High-impact ad unit on the right sidebar across key pages.",
    category: "ads",
    tags: ["ads", "sidebar"],
    location: "Site-wide",
    price: "RM 299",
    image: "/tech-conference-stage.png",
  },
  {
    id: "12",
    title: "Island Hopping Charter",
    description: "Private boat charter for island hopping with snorkeling gear included.",
    category: "travel",
    tags: ["island", "boat", "snorkeling"],
    location: "Langkawi, MY",
    price: "RM 399",
    image: "/mountain-hiking-trail-sunrise.png",
    featured: true,
  },
  {
    id: "13",
    title: "Premium Cleaning Package",
    description: "Deep cleaning service for homes and offices with eco products.",
    category: "services",
    tags: ["cleaning", "eco", "home"],
    location: "Kuala Lumpur",
    price: "RM 350",
    image: "/clean-modern-interior.png",
  },
  {
    id: "14",
    title: "Product Designer (UI/UX)",
    description: "Design intuitive user experiences for our suite of products.",
    category: "jobs",
    tags: ["design", "uiux", "remote"],
    location: "Remote",
    price: "RM 95k - RM 120k",
    image: "/developer-coding-office.png",
  },
  {
    id: "15",
    title: "Food Festival 2025",
    description: "Taste the world at our annual food festival with 100+ vendors.",
    category: "events",
    tags: ["food", "festival", "family"],
    location: "Penang",
    date: "June 10-12, 2025",
    image: "/jazz-festival-outdoor-stage.png",
    featured: true,
  },
  {
    id: "16",
    title: "Footer Sponsor Bundle",
    description: "Sponsorship bundle with footer placement across all pages.",
    category: "ads",
    tags: ["ads", "sponsor"],
    location: "Site-wide",
    price: "RM 199",
    image: "/bali-temple-sunset.png",
  },
]

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["all"])

  const filteredListings = selectedTags.includes("all")
    ? mockListings
    : mockListings.filter(
        (listing) => listing.tags.some((tag) => selectedTags.includes(tag)) || selectedTags.includes(listing.category),
      )

  const sortedListings = filteredListings

  const handleSelectCategory = (category: "travel" | "events" | "jobs" | "services" | "business") => {
    setSelectedTags([category])
  }

  return (
    <MaintenanceWrapper>
      <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <div id="travel-guide" />
      <Hero />
      {/*<TagSelector selectedTags={selectedTags} onTagChange={setSelectedTags} />*/}

      {/* Dashboard Link 
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">🚀 Dashboard Mockup Available</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore the interactive dashboard system with different user roles and functionalities
          </p>
          <a 
            href="/dashboard" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Dashboard Mockup
          </a>
        </div>
      </section>*/}

      {/* Listings Section */}
      <div id="events" />
      <div id="jobs" />
      <div id="services" />
      <div id="business" />
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/*<h2 className="text-3xl font-bold text-foreground mb-4">Featured Listings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover amazing opportunities, experiences, and services curated just for you
            </p>*/}
            <TagSelector selectedTags={selectedTags} onTagChange={setSelectedTags} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>

          {sortedListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No listings found for the selected tags. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/*<About />*/}
      <div id="account" />
      <Footer />
      <BottomNav onSelectCategory={handleSelectCategory} />
      </div>
    </MaintenanceWrapper>
  )
}
