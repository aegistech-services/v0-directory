"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListingCard } from "@/components/listing-card"
import { HeroSection } from "@/components/hero-section"

const mockTravelListings = [
  {
    id: "1",
    title: "Bali Adventure Tour",
    description: "Experience the breathtaking beauty of Bali with our guided adventure tour. Visit ancient temples, pristine beaches, and lush rice terraces.",
    category: "travel",
    tags: ["adventure", "cultural", "nature"],
    location: "Bali, Indonesia",
    rating: 4.8,
    price: "RM 299",
    image: "/bali-temple-sunset.png",
    featured: true,
  },
  {
    id: "5",
    title: "Express Train to Paris",
    description: "High-speed rail service connecting major European cities. Comfortable, efficient, and environmentally friendly travel option.",
    category: "transport",
    tags: ["train", "europe", "fast"],
    location: "London to Paris",
    time: "3h 20min",
    price: "From RM 89",
    image: "/high-speed-train-station.png",
  },
  {
    id: "7",
    title: "Mountain Hiking Retreat",
    description: "Escape to the mountains for a rejuvenating hiking retreat. Perfect for nature lovers seeking adventure and tranquility.",
    category: "travel",
    tags: ["hiking", "nature", "retreat"],
    location: "Cameron Highlands, Malaysia",
    rating: 4.7,
    price: "RM 450",
    image: "/mountain-hiking-trail-sunrise.png",
    featured: true,
  },
  {
    id: "8",
    title: "Langkawi Island Hopping",
    description: "Explore the stunning islands of Langkawi with our guided boat tours. Snorkeling, swimming, and island exploration included.",
    category: "travel",
    tags: ["island", "boat", "snorkeling"],
    location: "Langkawi, Malaysia",
    rating: 4.9,
    price: "RM 180",
    image: "/bali-temple-sunset.png",
  },
  {
    id: "9",
    title: "Cultural Heritage Walk",
    description: "Discover the rich history and culture of Malacca through our guided walking tours. Visit UNESCO World Heritage sites.",
    category: "travel",
    tags: ["cultural", "heritage", "walking"],
    location: "Malacca, Malaysia",
    rating: 4.6,
    price: "RM 120",
    image: "/jazz-festival-outdoor-stage.png",
  },
  {
    id: "10",
    title: "Penang Food Tour",
    description: "Taste the best of Penang's famous street food with our expert guides. Visit hidden gems and popular food spots.",
    category: "travel",
    tags: ["food", "culture", "street-food"],
    location: "Penang, Malaysia",
    rating: 4.8,
    price: "RM 95",
    image: "/clean-modern-interior.png",
  },
]

export default function TravelPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Adventure", "Cultural", "Nature", "Food & Dining", "Transportation", "Accommodation", "Water Sports", "Sightseeing", "Wellness"]

  const filteredTravel = mockTravelListings.filter(travel => {
    const matchesSearch = travel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         travel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         travel.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || travel.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Langkawi Travel Guide"
        description="Discover the best travel experiences in Langkawi and beyond. From adventure tours to cultural experiences, find your perfect journey."
        searchPlaceholder="Search travel experiences, destinations, or activities..."
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        gradientClass="bg-gradient-to-br from-cyan-50 to-blue-100"
      />

      {/* Travel Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredTravel.length} Travel Experience{filteredTravel.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredTravel.length} of {mockTravelListings.length} experiences
            </div>
          </div>

          {filteredTravel.length === 0 ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 text-gray-300 mx-auto mb-4">🌴</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No travel experiences found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTravel.map((listing) => (
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


