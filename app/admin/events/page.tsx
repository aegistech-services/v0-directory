"use client"

import { useMemo, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminEventItem {
  id: string
  title: string
  description?: string
  location?: string
  date?: string
  startDate?: string
  endDate?: string
  status?: "active" | "disabled"
}

const MOCK_EVENTS: AdminEventItem[] = [
  {
    id: "e1",
    title: "Tech Conference 2024",
    description: "Join industry leaders and innovators at the biggest tech conference.",
    location: "San Francisco, CA",
    date: "March 15-17, 2024",
    startDate: "2024-03-15",
    endDate: "2024-03-17",
    status: "active",
  },
  {
    id: "e2",
    title: "Jazz Festival Weekend",
    description: "Three days of incredible jazz performances.",
    location: "New Orleans, LA",
    date: "April 20-22, 2024",
    startDate: "2024-04-20",
    endDate: "2024-04-22",
    status: "active",
  },
  {
    id: "e3",
    title: "Startup Pitch Night",
    description: "Pitch your startup to top VCs.",
    location: "Austin, TX",
    date: "January 12, 2024",
    startDate: "2024-01-12",
    endDate: "2024-01-12",
    status: "disabled",
  },
]

export default function AdminEventsPage() {
  const [events, setEvents] = useState<AdminEventItem[]>(MOCK_EVENTS)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled" | "past">("all")
  const [selected, setSelected] = useState<string[]>([])

  const rows = useMemo(() => {
    const enriched = events.map((e) => {
      const isPast = e.endDate ? new Date(e.endDate) < new Date() : false
      return { ...e, isPast }
    })
      .filter((e) => {
        const matchesQuery = query
          ? (e.title + " " + (e.description || "") + " " + (e.location || "")).toLowerCase().includes(query.toLowerCase())
          : true
        const matchesStatus =
          statusFilter === "all" ? true :
          statusFilter === "past" ? e.isPast :
          statusFilter === "active" ? e.status !== "disabled" && !e.isPast :
          statusFilter === "disabled" ? e.status === "disabled" : true
        return matchesQuery && matchesStatus
      })
    // Sort: active first, then past at bottom; optionally by endDate ascending within groups
    return enriched.sort((a, b) => {
      if (a.isPast !== b.isPast) return a.isPast ? 1 : -1
      const aDate = a.endDate ? new Date(a.endDate).getTime() : 0
      const bDate = b.endDate ? new Date(b.endDate).getTime() : 0
      return aDate - bDate
    })
  }, [events, query, statusFilter])

  const allVisibleIds = useMemo(() => rows.map((r) => r.id), [rows])
  const allSelected = rows.length > 0 && selected.length === rows.length
  const anySelected = selected.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div>
            <h1 className="text-2xl font-bold">Events</h1>
            <p className="text-sm text-muted-foreground">All listed events in the directory</p>
          </div>
          
          {/* Search, Filters, and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input 
                placeholder="Search title, desc, location" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="max-w-sm" 
              />
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="past">Past</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={!anySelected}
                onClick={() => {
                  setEvents((prev) => prev.map((e) => (selected.includes(e.id) ? { ...e, status: "disabled" } : e)))
                  setSelected([])
                }}
              >
                Disable Selected
              </Button>
              <Button variant="outline" disabled>
                Create Event (mock)
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-md border bg-background">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-4 py-2">
                  <input
                    aria-label="Select all"
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => setSelected(e.target.checked ? allVisibleIds : [])}
                  />
                </th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className={`${row.isPast ? "opacity-60" : ""} border-t`}>
                  <td className="px-4 py-3">
                    <input
                      aria-label={`Select ${row.title}`}
                      type="checkbox"
                      checked={selected.includes(row.id)}
                      onChange={(e) =>
                        setSelected((prev) => (e.target.checked ? [...prev, row.id] : prev.filter((id) => id !== row.id)))
                      }
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{row.title}</div>
                    {row.description && (
                      <div className="text-xs text-muted-foreground line-clamp-1">{row.description}</div>
                    )}
                  </td>
                  <td className="px-4 py-3">{row.date || "-"}</td>
                  <td className="px-4 py-3">{row.location || "-"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${row.status === "disabled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}
                    >
                      {row.status === "disabled" ? "Disabled" : row.isPast ? "Past" : "Active"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a href={`/admin/listings/${row.id}`} className="text-primary hover:underline">
                        View
                      </a>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setEvents((prev) =>
                            prev.map((e) => (e.id === row.id ? { ...e, status: e.status === "disabled" ? "active" : "disabled" } : e))
                          )
                        }
                      >
                        {row.status === "disabled" ? "Enable" : "Disable"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
