"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, MapPin } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Wanderlust</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/travel" className="text-muted-foreground hover:text-primary transition-colors">
              Langkawi Travel Guide
            </a>
            <a href="/events" className="text-muted-foreground hover:text-primary transition-colors">
              Events
            </a>
            <a href="/jobs" className="text-muted-foreground hover:text-primary transition-colors">
              Jobs
            </a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/business" className="text-muted-foreground hover:text-primary transition-colors">
              Business List
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            {/*<div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search destinations, events, jobs..." className="pl-10 w-64" />
            </div>*/}
            <Button variant="outline">Login</Button>
            <a href="/dashboard"><Button variant="outline">Dashboard</Button></a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search destinations, events, jobs..." className="pl-10" />
              </div>
              <div className="flex flex-col space-y-2">
                <a href="/travel" className="text-muted-foreground hover:text-primary transition-colors py-2">
                  Travel
                </a>
                <a href="/events" className="text-muted-foreground hover:text-primary transition-colors py-2">
                  Events
                </a>
                <a href="/jobs" className="text-muted-foreground hover:text-primary transition-colors py-2">
                  Jobs
                </a>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors py-2">
                  Services
                </a>
                <a href="/business" className="text-muted-foreground hover:text-primary transition-colors py-2">
                  Business List
                </a>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
