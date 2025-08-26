import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Clock, Star, Phone, Mail, ExternalLink, ArrowLeft } from "lucide-react"

interface ListingDetailModalProps {
  listing: {
    id: string
    title: string
    description: string
    category: string
    tags: string[]
    location?: string
    date?: string
    time?: string
    rating?: number
    price?: string
    image: string
    contact?: string
    email?: string
    website?: string
    claimed?: boolean
    businessName?: string
    businessPhone?: string
    businessEmail?: string
  }
}

export function ListingDetailModal({ listing }: ListingDetailModalProps) {
  const [showContactForm, setShowContactForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "travel":
        return "bg-blue-100 text-blue-800"
      case "events":
        return "bg-purple-100 text-purple-800"
      case "jobs":
        return "bg-green-100 text-green-800"
      case "services":
        return "bg-orange-100 text-orange-800"
      case "transport":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getActionButtonText = (category: string) => {
    switch (category) {
      case "jobs":
        return "Apply Now"
      case "events":
        return "Get Tickets"
      case "transport":
        return "Book Now"
      default:
        return "Contact Now"
    }
  }

  return (
    <div className="p-6">
      {!showContactForm && (
        <>
          {/* Header with Image */}
          <div className="relative mb-6">
            <img
              src={listing.image || "/placeholder.svg"}
              alt={listing.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <Badge className={`${getCategoryColor(listing.category)}`}>
                {listing.category}
              </Badge>
            </div>
            {listing.price && (
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold text-primary text-lg">{listing.price}</span>
              </div>
            )}
          </div>

          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground pr-4">{listing.title}</h2>
            {listing.rating && (
              <div className="flex items-center space-x-2 bg-muted/50 rounded-full px-3 py-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{listing.rating}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {listing.description}
            </p>
          </div>

          {/* Business Details (for claimed listings) */}
          {listing.claimed && (listing.businessName || listing.businessPhone || listing.businessEmail || listing.location || listing.website) && (
            <div className="mb-6">
              <div className="text-xs font-semibold text-muted-foreground mb-2">Business</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.businessName && (
                  <div>
                    <div className="text-xs text-muted-foreground">Name</div>
                    <div className="text-sm font-medium">{listing.businessName}</div>
                  </div>
                )}
                {listing.businessPhone && (
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm">{listing.businessPhone}</div>
                  </div>
                )}
                {listing.businessEmail && (
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm">{listing.businessEmail}</div>
                  </div>
                )}
                {listing.location && (
                  <div className="md:col-span-1">
                    <div className="text-xs text-muted-foreground">Address</div>
                    <div className="text-sm">{listing.location}</div>
                  </div>
                )}
                {listing.website && (
                  <div className="md:col-span-1">
                    <div className="text-xs text-muted-foreground">Website</div>
                    <div className="text-sm">
                      <a href={listing.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                        {listing.website}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {listing.location && (
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>{listing.location}</span>
              </div>
            )}
            {listing.date && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-5 w-5 mr-3 text-primary" />
                <span>{listing.date}</span>
              </div>
            )}
            {listing.time && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span>{listing.time}</span>
              </div>
            )}
            {listing.contact && (
              <button type="button" onClick={() => setShowContactForm(true)} className="flex items-center text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>{listing.contact}</span>
              </button>
            )}
            {listing.email && (
              <button type="button" onClick={() => setShowContactForm(true)} className="flex items-center text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>{listing.email}</span>
              </button>
            )}
          </div>

          {/* Tags */}
          {listing.tags.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {listing.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1" size="lg" onClick={() => setShowContactForm(true)}>
              {getActionButtonText(listing.category)}
            </Button>
            <Button variant="outline" size="lg" className="flex-1" asChild>
              <a href="/dashboard">Claim Listing</a>
            </Button>
            {listing.website && (
              <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                <a href={listing.website} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            )}
          </div>
        </>
      )}

      {showContactForm && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setShowContactForm(false)} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h3 className="text-xl font-semibold">Contact {listing.title}</h3>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              // Placeholder submit handler
              console.log({ listingId: listing.id, name, email, message })
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Hello, I'm interested in ${listing.title}...`}
                required
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="flex-1">Send Inquiry</Button>
              <Button type="button" variant="outline" onClick={() => setShowContactForm(false)} className="flex-1">Cancel</Button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}
