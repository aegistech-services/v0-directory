import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Briefcase, Wrench, Bus } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Discover Your Next
            <span className="text-primary block">Adventure</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your one-stop directory for travel destinations, exciting events, career opportunities, essential services,
            and transport schedules. Start exploring today.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="What are you looking for today?"
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-border focus:border-primary"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6">Search</Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
              <MapPin className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Travel</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Events</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
              <Briefcase className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Jobs</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
              <Wrench className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Services</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
              <Bus className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Transport</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
