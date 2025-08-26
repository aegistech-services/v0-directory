"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListingCard } from "@/components/listing-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Wrench, MapPin, Star } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

const mockServiceListings = [
  {
    id: "4",
    title: "Home Cleaning Service",
    description:
      "Professional home cleaning services with eco-friendly products.",
    category: "services",
    tags: ["home", "cleaning", "eco-friendly"],
    location: "Los Angeles, CA",
    rating: 4.7,
    price: "RM 80/visit",
    image: "/clean-modern-interior.png",
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
    featured: true,
  },
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Home Services", "Professional Services", "Health & Wellness", "Education & Training", "Technology Services", "Creative Services", "Financial Services", "Legal Services", "Transportation"]

  const filteredServices = mockServiceListings.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || service.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Professional Services"
        description="Find trusted professionals for all your needs. From home services to business solutions, connect with skilled experts across Malaysia."
        searchPlaceholder="Search services by name, description, or category..."
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        gradientClass="bg-gradient-to-br from-orange-50 to-amber-100"
      />

      {/* Service Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredServices.length} of {mockServiceListings.length} services
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Wrench className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((listing) => (
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


