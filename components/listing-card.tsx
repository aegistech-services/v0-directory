import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Star, BadgeCheck } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { ListingDetailModal } from "@/components/listing-detail-modal"

interface ListingCardProps {
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
  claimed?: boolean
  businessName?: string
  businessPhone?: string
  businessEmail?: string
  featured?: boolean
  expiresAt?: string
  endDate?: string
}

export function ListingCard({
  id,
  title,
  description,
  category,
  tags,
  location,
  date,
  time,
  rating,
  price,
  image,
  claimed,
  businessName,
  businessPhone,
  businessEmail,
  featured,
  expiresAt,
  endDate,
}: ListingCardProps) {
  const isExpired = (() => {
    const now = new Date()
    if (category === "jobs" && expiresAt) return new Date(expiresAt) < now
    if (category === "ads" && endDate) return new Date(endDate) < now
    if (category === "subscriptions" && endDate) return new Date(endDate) < now
    return false
  })()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = () => {
    setIsModalOpen(true)
  }

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
      case "business":
        return "bg-cyan-100 text-cyan-800"
      case "promotions":
        return "bg-pink-100 text-pink-800"
      case "ads":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Card 
        className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer ${isExpired ? 'opacity-60' : ''}`}
        onClick={handleCardClick}
      >
      <div className="relative -mt-6 -mx-6">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 left-10 ${getCategoryColor(category)}`}>{category}</Badge>
        {claimed && (
          <div className="absolute bottom-3 left-10 bg-emerald-600 text-white px-2 py-1 rounded">
            <BadgeCheck className="h-4 w-4" />
          </div>
        )}
        {price && (
          <div className="absolute top-3 right-10 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="font-semibold text-primary">{price}</span>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
          {rating && (
            <div className="flex items-center space-x-1 ml-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>
        {featured && (
          <div className="mt-1">
            <Badge className="text-[10px] px-1.5 py-0.5">Featured</Badge>
          </div>
        )}
        {isExpired && (
          <div className="mt-1">
            <Badge variant="outline" className="text-[10px] px-1.5 py-0.5">Expired</Badge>
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{description}</p>

        <div className="space-y-2">
          {location && (
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              {location}
            </div>
          )}
          {date && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              {date}
            </div>
          )}
          {time && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              {time}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {category === "jobs"
            ? "Apply Now"
            : category === "events"
              ? "Get Tickets"
              : category === "transport"
                ? "Book Now"
                : category === "business"
                  ? "Contact Business"
                  : category === "promotions"
                    ? "View Promo"
                    : category === "ads"
                      ? "View Ad"
                      : category === "services"
                        ? "Contact Now"
                        : "Explore"}
        </Button>
      </CardFooter>
      </Card>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ListingDetailModal 
          listing={{
            id,
            title,
            description,
            category,
            tags,
            location,
            date,
            time,
            rating,
            price,
            image,
            contact: location, // You can extend this with actual contact data
            email: "", // You can extend this with actual email data
            website: "", // You can extend this with actual website data
            claimed,
            businessName,
            businessPhone,
            businessEmail,
          }}
        />
      </Modal>
    </>
  )
}
