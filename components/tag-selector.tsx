"use client"
import { Badge } from "@/components/ui/badge"

const tags = [
  { id: "all", label: "All", category: "all" },
  { id: "adventure", label: "Adventure", category: "travel" },
  { id: "relaxation", label: "Relaxation", category: "travel" },
  { id: "cultural", label: "Cultural", category: "travel" },
  { id: "music", label: "Music", category: "events" },
  { id: "food", label: "Food & Drink", category: "events" },
  { id: "sports", label: "Sports", category: "events" },
  { id: "tech", label: "Technology", category: "jobs" },
  { id: "remote", label: "Remote Work", category: "jobs" },
  { id: "creative", label: "Creative", category: "jobs" },
  { id: "home", label: "Home Services", category: "services" },
  { id: "business", label: "Business", category: "services" },
  { id: "health", label: "Health & Wellness", category: "services" },
  { id: "bus", label: "Bus", category: "transport" },
  { id: "train", label: "Train", category: "transport" },
  { id: "flight", label: "Flights", category: "transport" },
]

interface TagSelectorProps {
  selectedTags: string[]
  onTagChange: (tags: string[]) => void
}

export function TagSelector({ selectedTags, onTagChange }: TagSelectorProps) {
  const handleTagClick = (tagId: string) => {
    if (tagId === "all") {
      onTagChange(["all"])
    } else {
      const newTags = selectedTags.includes(tagId)
        ? selectedTags.filter((id) => id !== tagId && id !== "all")
        : [...selectedTags.filter((id) => id !== "all"), tagId]

      onTagChange(newTags.length === 0 ? ["all"] : newTags)
    }
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-foreground mb-2">Filter by Interest</h2>
          <p className="text-muted-foreground">Choose tags to find exactly what you're looking for</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant={selectedTags.includes(tag.id) ? "default" : "secondary"}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedTags.includes(tag.id)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => handleTagClick(tag.id)}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
