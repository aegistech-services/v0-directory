"use client"

import { useState } from "react"
import { 
  Building2, Briefcase, Wrench, Calendar, MessageSquare, Megaphone, CreditCard, BarChart3, 
  Settings, Home, ChevronLeft, ChevronRight, User, Bookmark, Eye, Heart, MapPin 
} from "lucide-react"

interface DashboardSidebarProps {
  userRole?: string
}

const getLinksByRole = (role: string) => {
  switch (role) {
    case 'ADMIN':
      return [
        { href: "/dashboard", label: "Overview", icon: Home },
        { href: "/dashboard/business/listings", label: "Business Listings", icon: Building2 },
        { href: "/admin/jobs", label: "Job Postings", icon: Briefcase },
        { href: "/admin/services", label: "Service Listings", icon: Wrench },
        { href: "/admin/events", label: "Event Listings", icon: Calendar },
        { href: "/admin/ads", label: "Ads Listing", icon: Megaphone },
        { href: "/admin/promotions", label: "Promotions", icon: BarChart3 },
        { href: "/admin/subscriptions", label: "Subscriptions", icon: CreditCard },
        { href: "/admin/billing", label: "Billing", icon: CreditCard },
        { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
        { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
        { href: "/admin/settings", label: "Settings", icon: Settings },
      ]
    
    case 'BUSINESS_OWNER':
      return [
        { href: "/dashboard", label: "Overview", icon: Home },
        { href: "/dashboard/business/listings", label: "My Listings", icon: Building2 },
        { href: "/dashboard/business/profile", label: "Business Profile", icon: User },
        { href: "/dashboard/business/analytics", label: "Analytics", icon: BarChart3 },
        { href: "/dashboard/business/inquiries", label: "Inquiries", icon: MessageSquare },
        { href: "/dashboard/business/billing", label: "Billing", icon: CreditCard },
        { href: "/dashboard/business/settings", label: "Settings", icon: Settings },
      ]
    
    case 'FREELANCER':
      return [
        { href: "/dashboard", label: "Overview", icon: Home },
        { href: "/dashboard/freelancer/profile", label: "Profile", icon: User },
        { href: "/dashboard/freelancer/portfolio", label: "Portfolio", icon: Briefcase },
        { href: "/dashboard/freelancer/applications", label: "Applications", icon: MessageSquare },
        { href: "/dashboard/freelancer/billing", label: "Billing", icon: CreditCard },
        { href: "/dashboard/freelancer/settings", label: "Settings", icon: Settings },
      ]
    
    case 'ADVERTISER':
      return [
        { href: "/dashboard", label: "Overview", icon: Home },
        { href: "/dashboard/advertiser/campaigns", label: "Campaigns", icon: Megaphone },
        { href: "/dashboard/advertiser/ads", label: "My Ads", icon: BarChart3 },
        { href: "/dashboard/advertiser/analytics", label: "Analytics", icon: BarChart3 },
        { href: "/dashboard/advertiser/billing", label: "Billing", icon: CreditCard },
        { href: "/dashboard/advertiser/settings", label: "Settings", icon: Settings },
      ]
    
    case 'PUBLIC':
      return [
        { href: "/dashboard", label: "Overview", icon: Home },
        { href: "/dashboard/public/bookmarks", label: "Bookmarks", icon: Bookmark },
        { href: "/dashboard/public/inquiries", label: "My Inquiries", icon: MessageSquare },
        { href: "/dashboard/public/billing", label: "Billing", icon: CreditCard },
        { href: "/dashboard/public/profile", label: "Profile", icon: User },
        { href: "/dashboard/public/recent-search", label: "Recent Searches", icon: Eye },
        { href: "/dashboard/public/favorites", label: "Favorites", icon: Heart },
        { href: "/dashboard/public/explore", label: "Explore", icon: MapPin },
      ]
    
    default:
      return [
        { href: "/dashboard", label: "Overview", icon: Home },
      ]
  }
}

export function DashboardSidebar({ userRole = 'ADMIN' }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const links = getLinksByRole(userRole)

  return (
    <aside className={`hidden md:flex flex-col ${collapsed ? "w-14" : "w-60"} shrink-0 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[width] duration-200`}>
      <div className="flex items-center justify-between p-3 border-b">
        {!collapsed && <div className="text-sm font-semibold">Dashboard</div>}
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="inline-flex items-center justify-center h-8 w-8 rounded hover:bg-accent hover:text-accent-foreground"
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`flex items-center ${collapsed ? "justify-center" : "gap-2"} px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground text-sm`}>
                <l.icon className="h-4 w-4" />
                {!collapsed && <span>{l.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
