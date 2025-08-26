"use client"

import { useMemo, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminServiceItem {
  id: string
  title: string
  provider?: string
  location?: string
  rate?: string
  status?: "active" | "disabled"
}

const MOCK_SERVICES: AdminServiceItem[] = [
  { id: "s1", title: "Home Cleaning Service", provider: "Island Cleaners", location: "Los Angeles, CA", rate: "$80/visit", status: "active" },
  { id: "s2", title: "Private Tour Guide", provider: "Langkawi Tours", location: "Langkawi", rate: "$150/day", status: "active" },
  { id: "s3", title: "Plumbing Repair", provider: "FixIt Co.", location: "Kuala Lumpur", rate: "RM 150/hour", status: "disabled" },
]

export default function AdminServicesPage() {
  const [services, setServices] = useState<AdminServiceItem[]>(MOCK_SERVICES)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled">("all")
  const [selected, setSelected] = useState<string[]>([])

  const rows = useMemo(() => {
    return services.filter((s) => {
      const matchesQuery = query
        ? (s.title + " " + (s.provider || "") + " " + (s.location || "")).toLowerCase().includes(query.toLowerCase())
        : true
      const matchesStatus =
        statusFilter === "all" ? true :
        statusFilter === "active" ? s.status !== "disabled" :
        statusFilter === "disabled" ? s.status === "disabled" : true
      return matchesQuery && matchesStatus
    })
  }, [services, query, statusFilter])

  const allVisibleIds = useMemo(() => rows.map((r) => r.id), [rows])
  const allSelected = rows.length > 0 && selected.length === rows.length
  const anySelected = selected.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <p className="text-sm text-muted-foreground">All service listings in the directory</p>
          </div>
          
          {/* Search, Filters, and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input 
                placeholder="Search title, provider, location" 
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
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={!anySelected}
                onClick={() => {
                  setServices((prev) => prev.map((s) => (selected.includes(s.id) ? { ...s, status: "disabled" } : s)))
                  setSelected([])
                }}
              >
                Disable Selected
              </Button>
              <Button variant="outline" disabled>
                Create Service (mock)
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
                <th className="px-4 py-2 text-left">Provider</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Rate</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t">
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
                  <td className="px-4 py-3">{row.provider || "-"}</td>
                  <td className="px-4 py-3">{row.location || "-"}</td>
                  <td className="px-4 py-3">{row.rate || "-"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${row.status === "disabled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}
                    >
                      {row.status === "disabled" ? "Disabled" : "Active"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a href={`/admin/listings/${row.id}`} className="text-primary hover:underline">View</a>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setServices((prev) =>
                            prev.map((s) => (s.id === row.id ? { ...s, status: s.status === "disabled" ? "active" : "disabled" } : s))
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
