"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListingCard } from "@/components/listing-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Briefcase, MapPin, DollarSign } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

const mockJobListings = [
  {
    id: "3",
    title: "Senior React Developer",
    description:
      "We're looking for an experienced React developer to join our growing team.",
    category: "jobs",
    tags: ["tech", "remote", "react"],
    location: "Remote / New York, NY",
    price: "RM 120k - RM 150k",
    image: "/developer-coding-office.png",
    featured: true,
    expiresAt: "2025-01-01",
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
    expiresAt: "2024-01-01",
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Technology", "Marketing", "Sales", "Design", "Engineering", "Healthcare", "Education", "Finance", "Operations", "Customer Service"]

  const filteredJobs = mockJobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || job.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Find Your Dream Job"
        description="Discover exciting career opportunities across Malaysia. From remote positions to local roles, find the perfect job that matches your skills and aspirations."
        searchPlaceholder="Search jobs by title, description, or skills..."
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        gradientClass="bg-gradient-to-br from-green-50 to-emerald-100"
      />

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredJobs.length} of {mockJobListings.length} jobs
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredJobs.map((listing) => (
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


