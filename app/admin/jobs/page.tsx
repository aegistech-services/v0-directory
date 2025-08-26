"use client"

import { useMemo, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminJobItem {
  id: string
  title: string
  company?: string
  location?: string
  salary?: string
  expiresAt?: string // ISO date
  status?: "active" | "disabled"
}

const MOCK_JOBS: AdminJobItem[] = [
  { id: "j1", title: "Senior React Developer", company: "Techify Co.", location: "Remote / New York, NY", salary: "$120k - $150k", expiresAt: "2025-01-01", status: "active" },
  { id: "j2", title: "Marketing Manager", company: "Bright Marketing", location: "Austin, TX", salary: "$85k - $110k", expiresAt: "2024-01-01", status: "disabled" },
  { id: "j3", title: "Customer Success Lead", company: "SaaSly", location: "Remote", salary: "$90k - $105k", expiresAt: "2024-06-01", status: "active" },
]

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<AdminJobItem[]>(MOCK_JOBS)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled" | "expired">("all")
  const [selected, setSelected] = useState<string[]>([])

  const rows = useMemo(() => {
    const enriched = jobs.map((j) => {
      const isExpired = j.expiresAt ? new Date(j.expiresAt) < new Date() : false
      return { ...j, isExpired }
    })
      .filter((j) => {
        const matchesQuery = query
          ? (j.title + " " + (j.company || "") + " " + (j.location || "")).toLowerCase().includes(query.toLowerCase())
          : true
        const matchesStatus =
          statusFilter === "all" ? true :
          statusFilter === "expired" ? j.isExpired :
          statusFilter === "active" ? j.status !== "disabled" && !j.isExpired :
          statusFilter === "disabled" ? j.status === "disabled" : true
        return matchesQuery && matchesStatus
      })
    return enriched.sort((a, b) => {
      if (a.isExpired !== b.isExpired) return a.isExpired ? 1 : -1
      const aDate = a.expiresAt ? new Date(a.expiresAt).getTime() : 0
      const bDate = b.expiresAt ? new Date(b.expiresAt).getTime() : 0
      return aDate - bDate
    })
  }, [jobs, query, statusFilter])

  const allVisibleIds = useMemo(() => rows.map((r) => r.id), [rows])
  const allSelected = rows.length > 0 && selected.length === rows.length
  const anySelected = selected.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div>
            <h1 className="text-2xl font-bold">Jobs</h1>
            <p className="text-sm text-muted-foreground">All job postings in the directory</p>
          </div>
          
          {/* Search, Filters, and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input 
                placeholder="Search title, company, location" 
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
                <option value="expired">Expired</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={!anySelected}
                onClick={() => {
                  setJobs((prev) => prev.map((j) => (selected.includes(j.id) ? { ...j, status: "disabled" } : j)))
                  setSelected([])
                }}
              >
                Disable Selected
              </Button>
              <Button variant="outline" disabled>
                Create Job (mock)
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
                <th className="px-4 py-2 text-left">Company</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Expires</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className={`${row.isExpired ? "opacity-60" : ""} border-t`}>
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
                  <td className="px-4 py-3">{row.company || "-"}</td>
                  <td className="px-4 py-3">{row.location || "-"}</td>
                  <td className="px-4 py-3">{row.expiresAt || "-"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${row.status === "disabled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}
                    >
                      {row.status === "disabled" ? "Disabled" : row.isExpired ? "Expired" : "Active"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a href={`/admin/listings/${row.id}`} className="text-primary hover:underline">View</a>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setJobs((prev) =>
                            prev.map((j) => (j.id === row.id ? { ...j, status: j.status === "disabled" ? "active" : "disabled" } : j))
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
