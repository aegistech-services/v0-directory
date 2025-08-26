"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListingCard } from "@/components/listing-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, MapPin, Clock } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

const mockEventListings = [
  {
    id: "2",
    title: "Tech Conference 2024",
    description:
      "Join industry leaders and innovators at the biggest tech conference of the year.",
    category: "events",
    tags: ["tech", "networking", "innovation"],
    location: "San Francisco, CA",
    date: "March 15-17, 2024",
    endDate: "2024-03-17",
    time: "9:00 AM - 6:00 PM",
    rating: 4.9,
    price: "RM 599",
    image: "/tech-conference-stage.png",
  },
  {
    id: "6",
    title: "Jazz Festival Weekend",
    description:
      "Three days of incredible jazz performances featuring world-renowned artists and emerging talents.",
    category: "events",
    tags: ["music", "jazz", "outdoor"],
    location: "New Orleans, LA",
    date: "April 20-22, 2024",
    endDate: "2024-04-22",
    rating: 4.6,
    price: "RM 199",
    image: "/jazz-festival-outdoor-stage.png",
  },
  {
    id: "15",
    title: "Food Festival 2025",
    description: "Taste the world at our annual food festival with 100+ vendors.",
    category: "events",
    tags: ["food", "festival", "family"],
    location: "Penang",
    date: "June 10-12, 2025",
    endDate: "2025-06-12",
    image: "/jazz-festival-outdoor-stage.png",
    featured: true,
  },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Technology", "Music", "Food & Dining", "Sports", "Arts & Culture", "Business", "Education", "Health & Wellness", "Family", "Networking"]

  const filteredEvents = mockEventListings.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || event.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Discover Amazing Events"
        description="Explore exciting events happening across Malaysia. From conferences to festivals, find the perfect event to attend and connect with like-minded people."
        searchPlaceholder="Search events by name, description, or category..."
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        gradientClass="bg-gradient-to-br from-purple-50 to-pink-100"
      />

      {/* Event Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredEvents.length} Event{filteredEvents.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredEvents.length} of {mockEventListings.length} events
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  )
}


