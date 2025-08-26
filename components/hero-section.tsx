"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  searchPlaceholder: string
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchTerm: string
  onSearchChange: (term: string) => void
  gradientClass: string
  icon?: React.ReactNode
}

export function HeroSection({
  title,
  description,
  searchPlaceholder,
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  gradientClass,
  icon
}: HeroSectionProps) {
  return (
    <section className={`py-16 ${gradientClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 text-lg py-3 bg-white"
            />
          </div>
          
                      <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={`capitalize ${
                    selectedCategory === category 
                      ? "bg-green-600 hover:bg-green-700 text-white border-green-600" 
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {category === "all" ? "All Categories" : category}
                </Button>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
