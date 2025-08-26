"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Phone, Mail, Globe, Building2, Star, CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

// Mock data for registered businesses
const mockBusinesses = [
  {
    id: "1",
    name: "Langkawi Tours",
    description: "Local tour operator offering island hopping, snorkeling, and private charters.",
    category: "Travel & Tourism",
    location: "Langkawi, Malaysia",
    phone: "+60 12-345 6789",
    email: "info@lktours.com",
    website: "www.lktours.com",
    rating: 4.8,
    verified: true,
    featured: true,
    services: ["Island Hopping", "Snorkeling", "Private Charters", "Cultural Tours"],
    image: "/bali-temple-sunset.png"
  },
  {
    id: "2",
    name: "Techify Co.",
    description: "Innovative technology solutions for modern businesses.",
    category: "Technology",
    location: "Kuala Lumpur, Malaysia",
    phone: "+60 3-1234 5678",
    email: "contact@techify.co",
    website: "www.techify.co",
    rating: 4.9,
    verified: true,
    featured: false,
    services: ["Web Development", "Mobile Apps", "Cloud Solutions", "IT Consulting"],
    image: "/developer-coding-office.png"
  },
  {
    id: "3",
    name: "Green Clean Services",
    description: "Professional cleaning services with eco-friendly products.",
    category: "Home Services",
    location: "Penang, Malaysia",
    phone: "+60 4-9876 5432",
    email: "hello@greenclean.my",
    website: "www.greenclean.my",
    rating: 4.7,
    verified: true,
    featured: false,
    services: ["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Eco Products"],
    image: "/clean-modern-interior.png"
  },
  {
    id: "4",
    name: "Malaysia Events Pro",
    description: "Full-service event planning and management company.",
    category: "Events & Entertainment",
    location: "Kuala Lumpur, Malaysia",
    phone: "+60 3-8765 4321",
    email: "events@malaysiaeventspro.com",
    website: "www.malaysiaeventspro.com",
    rating: 4.6,
    verified: true,
    featured: true,
    services: ["Event Planning", "Wedding Coordination", "Corporate Events", "Venue Management"],
    image: "/tech-conference-stage.png"
  },
  {
    id: "5",
    name: "Heritage Restaurant",
    description: "Authentic Malaysian cuisine in a traditional setting.",
    category: "Food & Beverage",
    location: "Malacca, Malaysia",
    phone: "+60 6-1122 3344",
    email: "dine@heritagerestaurant.my",
    website: "www.heritagerestaurant.my",
    rating: 4.5,
    verified: true,
    featured: false,
    services: ["Traditional Cuisine", "Catering", "Private Dining", "Cooking Classes"],
    image: "/jazz-festival-outdoor-stage.png"
  },
  {
    id: "6",
    name: "Adventure Gear Malaysia",
    description: "Premium outdoor equipment and adventure gear.",
    category: "Sports & Recreation",
    location: "Cameron Highlands, Malaysia",
    phone: "+60 5-5566 7788",
    email: "gear@adventuregear.my",
    website: "www.adventuregear.my",
    rating: 4.4,
    verified: true,
    featured: false,
    services: ["Equipment Rental", "Gear Sales", "Adventure Tours", "Training Courses"],
    image: "/mountain-hiking-trail-sunrise.png"
  }
]

export default function BusinessListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Travel & Tourism", "Technology", "Home Services", "Events & Entertainment", "Food & Beverage", "Sports & Recreation", "Healthcare", "Education", "Finance"]

  const filteredBusinesses = mockBusinesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Business Directory"
        description="Discover trusted businesses across Malaysia. From local services to national companies, find the perfect partner for your needs."
        searchPlaceholder="Search businesses by name, description, or location..."
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        gradientClass="bg-gradient-to-br from-blue-50 to-indigo-100"
      />

      {/* Business Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredBusinesses.length} Business{filteredBusinesses.length !== 1 ? 'es' : ''} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredBusinesses.length} of {mockBusinesses.length} businesses
            </div>
          </div>

          {filteredBusinesses.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map((business) => (
                <Card key={business.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
                  <div className="relative -mt-6 -mx-6">
                    <img 
                      src={business.image} 
                      alt={business.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {business.featured && (
                      <Badge className="absolute top-3 left-10 bg-yellow-500 hover:bg-yellow-600">
                        Featured
                      </Badge>
                    )}
                    {business.verified && (
                      <div className="absolute top-3 right-10 bg-green-500 text-white p-1 rounded-full">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {business.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {business.category}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{business.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {business.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {business.location}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone className="h-4 w-4 mr-2" />
                        {business.phone}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="h-4 w-4 mr-2" />
                        {business.email}
                      </div>
                      
                      {business.website && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Globe className="h-4 w-4 mr-2" />
                          <a 
                            href={`https://${business.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {business.website}
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {business.services.slice(0, 3).map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {business.services.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{business.services.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
