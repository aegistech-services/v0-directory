"use client"

import { useMemo } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

const MOCK: any[] = [
  { id: '1', title: 'Bali Adventure Tour', category: 'travel', price: '$299', location: 'Bali, Indonesia', claimed: true, businessName: 'Langkawi Tours', businessPhone: '+60 12-345 6789', businessEmail: 'info@lktours.com' },
  { id: '2', title: 'Tech Conference 2024', category: 'events', date: 'March 15-17, 2024', endDate: '2024-03-17', location: 'San Francisco, CA', price: '$599' },
  { id: '3', title: 'Senior React Developer', category: 'jobs', price: '$120k - $150k', location: 'Remote / New York, NY', claimed: true, businessName: 'Techify Co.', businessPhone: '+1 (212) 555-0101', businessEmail: 'hr@techify.co' },
]

export default function AdminListingDetailPage() {
  const params = useParams()
  const id = Array.isArray(params?.id) ? params.id[0] : (params?.id as string)
  const item = useMemo(() => MOCK.find((m) => m.id === id), [id])

  if (!item) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-sm text-muted-foreground">Listing not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <a href="/admin/dashboard">← Back to Admin</a>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {item.title}
              <Badge variant="secondary" className="capitalize">{item.category}</Badge>
            </CardTitle>
            <CardDescription>{item.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {item.price && (
                <div>
                  <div className="text-xs text-muted-foreground">Price</div>
                  <div className="text-sm font-medium">{item.price}</div>
                </div>
              )}
              {item.date && (
                <div>
                  <div className="text-xs text-muted-foreground">Date</div>
                  <div className="text-sm">{item.date}</div>
                </div>
              )}
            </div>

            {item.claimed && (
              <div className="mb-6">
                <div className="text-xs font-semibold text-muted-foreground mb-2">Business</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.businessName && (
                    <div>
                      <div className="text-xs text-muted-foreground">Name</div>
                      <div className="text-sm font-medium">{item.businessName}</div>
                    </div>
                  )}
                  {item.businessPhone && (
                    <div>
                      <div className="text-xs text-muted-foreground">Phone</div>
                      <div className="text-sm">{item.businessPhone}</div>
                    </div>
                  )}
                  {item.businessEmail && (
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm">{item.businessEmail}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button asChild>
                <a href="/dashboard/business/listings">Open in Business Module</a>
              </Button>
              <Button variant="outline">Disable</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
