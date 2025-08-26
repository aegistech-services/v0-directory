"use client"

import { Map, Calendar, Briefcase, Wrench, Building2, User } from "lucide-react"

interface BottomNavProps {
  onSelectCategory: (category: "travel" | "events" | "jobs" | "services" | "business") => void
  onAccount?: () => void
}

export function BottomNav({ onSelectCategory, onAccount }: BottomNavProps) {
  const handleAndScroll = (anchorId: string, category: "travel" | "events" | "jobs" | "services" | "business") => {
    onSelectCategory(category)
    const el = document.getElementById(anchorId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="grid grid-cols-6 items-center text-xs">
        <button
          type="button"
          onClick={() => handleAndScroll("travel-guide", "travel")}
          className="flex flex-col items-center justify-center py-2 w-full text-muted-foreground hover:text-primary"
        >
          <Map className="h-5 w-5" />
          <span>Guide</span>
        </button>
        <button
          type="button"
          onClick={() => handleAndScroll("events", "events")}
          className="flex flex-col items-center justify-center py-2 w-full text-muted-foreground hover:text-primary"
        >
          <Calendar className="h-5 w-5" />
          <span>Events</span>
        </button>
        <button
          type="button"
          onClick={() => handleAndScroll("jobs", "jobs")}
          className="flex flex-col items-center justify-center py-2 w-full text-muted-foreground hover:text-primary"
        >
          <Briefcase className="h-5 w-5" />
          <span>Jobs</span>
        </button>
        <button
          type="button"
          onClick={() => handleAndScroll("services", "services")}
          className="flex flex-col items-center justify-center py-2 w-full text-muted-foreground hover:text-primary"
        >
          <Wrench className="h-5 w-5" />
          <span>Services</span>
        </button>
        <button
          type="button"
          onClick={() => handleAndScroll("business", "business")}
          className="flex flex-col items-center justify-center py-2 w-full text-muted-foreground hover:text-primary"
        >
          <Building2 className="h-5 w-5" />
          <span>Business</span>
        </button>
        <a
          href="/dashboard"
          className="flex flex-col items-center justify-center py-2 w-full text-muted-foreground hover:text-primary"
        >
          <User className="h-5 w-5" />
          <span>Account</span>
        </a>
      </div>
    </nav>
  )
}
