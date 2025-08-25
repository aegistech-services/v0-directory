"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TagSelector } from "@/components/tag-selector"
import { ListingCard } from "@/components/listing-card"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

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
    price: "$299",
    image: "/bali-temple-sunset.png",
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
    price: "$599",
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
    price: "$120k - $150k",
    image: "/developer-coding-office.png",
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
    price: "$80/visit",
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
    price: "From $89",
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
    price: "$199",
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
    price: "$450",
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
    price: "$85k - $110k",
    image: "/marketing-team-meeting-office.png",
  },
]

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["all"])

  const filteredListings = selectedTags.includes("all")
    ? mockListings
    : mockListings.filter(
        (listing) => listing.tags.some((tag) => selectedTags.includes(tag)) || selectedTags.includes(listing.category),
      )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TagSelector selectedTags={selectedTags} onTagChange={setSelectedTags} />

      {/* Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Listings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover amazing opportunities, experiences, and services curated just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No listings found for the selected tags. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <About />
      <Footer />
    </div>
  )
}
