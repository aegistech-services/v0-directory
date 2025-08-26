"use client"

import { useMemo, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminPromotionItem {
  id: string
  title: string
  type?: string
  owner?: string
  period?: string
  startDate?: string
  endDate?: string
  status?: "active" | "disabled"
}

const MOCK_PROMOS: AdminPromotionItem[] = [
  { id: "p1", title: "Homepage Banner Promo", type: "Banner", owner: "Acme Co.", period: "May 1-30, 2024", startDate: "2024-05-01", endDate: "2024-05-30", status: "active" },
  { id: "p2", title: "Featured Listing", type: "Feature", owner: "Langkawi Tours", period: "Apr 1-30, 2024", startDate: "2024-04-01", endDate: "2024-04-30", status: "disabled" },
  { id: "p3", title: "Sidebar Sponsored", type: "Sponsor", owner: "Bright Ads", period: "Dec 1-31, 2024", startDate: "2024-12-01", endDate: "2024-12-31", status: "active" },
]

export default function AdminPromotionsPage() {
  const [items, setItems] = useState<AdminPromotionItem[]>(MOCK_PROMOS)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled" | "past">("all")
  const [selected, setSelected] = useState<string[]>([])

  const rows = useMemo(() => {
    const enriched = items.map((i) => {
      const isPast = i.endDate ? new Date(i.endDate) < new Date() : false
      return { ...i, isPast }
    })
      .filter((i) => {
        const matchesQuery = query
          ? (i.title + " " + (i.type || "") + " " + (i.owner || "") + " " + (i.period || "")).toLowerCase().includes(query.toLowerCase())
          : true
        const matchesStatus =
          statusFilter === "all" ? true :
          statusFilter === "past" ? i.isPast :
          statusFilter === "active" ? i.status !== "disabled" && !i.isPast :
          statusFilter === "disabled" ? i.status === "disabled" : true
        return matchesQuery && matchesStatus
      })
    return enriched.sort((a, b) => {
      if (a.isPast !== b.isPast) return a.isPast ? 1 : -1
      const aDate = a.endDate ? new Date(a.endDate).getTime() : 0
      const bDate = b.endDate ? new Date(b.endDate).getTime() : 0
      return aDate - bDate
    })
  }, [items, query, statusFilter])

  const allVisibleIds = useMemo(() => rows.map((r) => r.id), [rows])
  const allSelected = rows.length > 0 && selected.length === rows.length
  const anySelected = selected.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div>
            <h1 className="text-2xl font-bold">Promotions</h1>
            <p className="text-sm text-muted-foreground">All promotions in the directory</p>
          </div>
          
          {/* Search, Filters, and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input 
                placeholder="Search title, type, owner" 
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
                  setItems((prev) => prev.map((i) => (selected.includes(i.id) ? { ...i, status: "disabled" } : i)))
                  setSelected([])
                }}
              >
                Disable Selected
              </Button>
              <Button variant="outline" disabled>
                Create Promotion (mock)
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
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Owner</th>
                <th className="px-4 py-2 text-left">Period</th>
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
                  <td className="px-4 py-3 font-medium">{row.title}</td>
                  <td className="px-4 py-3">{row.type || "-"}</td>
                  <td className="px-4 py-3">{row.owner || "-"}</td>
                  <td className="px-4 py-3">{row.period || `${row.startDate || "-"} — ${row.endDate || "-"}`}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${row.status === "disabled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}
                    >
                      {row.status === "disabled" ? "Disabled" : row.isPast ? "Past" : "Active"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a href={`/admin/listings/${row.id}`} className="text-primary hover:underline">View</a>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setItems((prev) => prev.map((i) => (i.id === row.id ? { ...i, status: i.status === "disabled" ? "active" : "disabled" } : i)))
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
