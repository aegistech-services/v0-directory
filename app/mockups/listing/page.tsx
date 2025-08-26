"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MockListingForm() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("travel")
  const [price, setPrice] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [description, setDescription] = useState("")

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Create Listing (Mock)</h1>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault()
          console.log({ title, category, price, tags, description })
          alert("Submitted mock form to console")
        }}
      >
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Amazing experience" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="travel">Travel</option>
            <option value="events">Events</option>
            <option value="jobs">Jobs</option>
            <option value="services">Services</option>
            <option value="transport">Transport</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="$199" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {["adventure","cultural","nature","tech","remote","creative","home","business","health"].map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                  tags.includes(tag) ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm min-h-[140px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short description..."
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit" className="flex-1">Submit</Button>
          <Button type="button" variant="outline" className="flex-1" onClick={() => {
            setTitle(""); setCategory("travel"); setPrice(""); setTags([]); setDescription("")
          }}>Reset</Button>
        </div>
      </form>
    </div>
  )
}
