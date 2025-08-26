"use client"

import { useMemo, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AdminSubscriptionItem {
  id: string
  plan: string
  user?: string
  period?: string
  startDate?: string
  endDate?: string
  status?: "active" | "disabled"
}

const MOCK_SUBS: AdminSubscriptionItem[] = [
  { id: "sub1", plan: "Business Pro", user: "John Doe", period: "Jan 1 - Dec 31, 2024", startDate: "2024-01-01", endDate: "2024-12-31", status: "active" },
  { id: "sub2", plan: "Freelancer Basic", user: "Alice Lee", period: "Mar 1 - Aug 31, 2024", startDate: "2024-03-01", endDate: "2024-08-31", status: "disabled" },
  { id: "sub3", plan: "Advertiser Premium", user: "Acme Co.", period: "May 1 - Oct 31, 2024", startDate: "2024-05-01", endDate: "2024-10-31", status: "active" },
]

export default function AdminSubscriptionsPage() {
  const [subs, setSubs] = useState<AdminSubscriptionItem[]>(MOCK_SUBS)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled" | "past">("all")
  const [selected, setSelected] = useState<string[]>([])
  const [editing, setEditing] = useState<AdminSubscriptionItem | null>(null)
  const [form, setForm] = useState<AdminSubscriptionItem>({ id: "", plan: "", user: "", startDate: "", endDate: "", status: "active" })

  const rows = useMemo(() => {
    const enriched = subs.map((s) => {
      const isPast = s.endDate ? new Date(s.endDate) < new Date() : false
      return { ...s, isPast }
    })
      .filter((s) => {
        const matchesQuery = query
          ? (s.plan + " " + (s.user || "") + " " + (s.period || "")).toLowerCase().includes(query.toLowerCase())
          : true
        const matchesStatus =
          statusFilter === "all" ? true :
          statusFilter === "past" ? s.isPast :
          statusFilter === "active" ? s.status !== "disabled" && !s.isPast :
          statusFilter === "disabled" ? s.status === "disabled" : true
        return matchesQuery && matchesStatus
      })
    return enriched.sort((a, b) => {
      if (a.isPast !== b.isPast) return a.isPast ? 1 : -1
      const aDate = a.endDate ? new Date(a.endDate).getTime() : 0
      const bDate = b.endDate ? new Date(b.endDate).getTime() : 0
      return aDate - bDate
    })
  }, [subs, query, statusFilter])

  const allVisibleIds = useMemo(() => rows.map((r) => r.id), [rows])
  const allSelected = rows.length > 0 && selected.length === rows.length
  const anySelected = selected.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        {/* CRUD form */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{editing ? "Edit Subscription" : "Create New Subscription"}</CardTitle>
                <CardDescription>
                  {editing ? "Update subscription details" : "Add a new subscription to the system"}
                </CardDescription>
              </div>
              {editing && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { 
                    setEditing(null); 
                    setForm({ id: "", plan: "", user: "", startDate: "", endDate: "", status: "active" }) 
                  }}
                >
                  Cancel Edit
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (editing) {
                  setSubs(prev => prev.map(s => s.id === editing.id ? { ...editing, ...form, id: editing.id } : s))
                  setEditing(null)
                } else {
                  const id = `sub_${Date.now()}`
                  setSubs(prev => [{ ...form, id }, ...prev])
                }
                setForm({ id: "", plan: "", user: "", startDate: "", endDate: "", status: "active" })
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Plan Name *</label>
                  <Input 
                    placeholder="e.g., Premium Plan" 
                    value={form.plan || ""} 
                    onChange={(e) => setForm({ ...form, plan: e.target.value })} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">User Email *</label>
                  <Input 
                    type="email"
                    placeholder="user@example.com" 
                    value={form.user || ""} 
                    onChange={(e) => setForm({ ...form, user: e.target.value })} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Status</label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={form.status || "active"}
                    onChange={(e) => setForm({ ...form, status: e.target.value as any })}
                  >
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Start Date</label>
                  <Input 
                    type="date" 
                    value={form.startDate || ""} 
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">End Date</label>
                  <Input 
                    type="date" 
                    value={form.endDate || ""} 
                    onChange={(e) => setForm({ ...form, endDate: e.target.value })} 
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="min-w-[120px]">
                  {editing ? "Save Changes" : "Create Subscription"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setForm({ id: "", plan: "", user: "", startDate: "", endDate: "", status: "active" })}
                >
                  Reset Form
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mb-6">
          <div>
            <h1 className="text-2xl font-bold">Subscriptions</h1>
            <p className="text-sm text-muted-foreground">All subscriptions in the directory</p>
          </div>
          
          {/* Search, Filters, and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input 
                placeholder="Search plan, user" 
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
                  setSubs((prev) => prev.map((s) => (selected.includes(s.id) ? { ...s, status: "disabled" } : s)))
                  setSelected([])
                }}
              >
                Disable Selected
              </Button>
              <Button variant="outline" disabled>
                Create Subscription (mock)
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
                <th className="px-4 py-2 text-left">Plan</th>
                <th className="px-4 py-2 text-left">User</th>
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
                      aria-label={`Select ${row.plan}`}
                      type="checkbox"
                      checked={selected.includes(row.id)}
                      onChange={(e) =>
                        setSelected((prev) => (e.target.checked ? [...prev, row.id] : prev.filter((id) => id !== row.id)))
                      }
                    />
                  </td>
                  <td className="px-4 py-3 font-medium">{row.plan}</td>
                  <td className="px-4 py-3">{row.user || "-"}</td>
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
                        onClick={() => {
                          const current = subs.find(s => s.id === row.id)
                          if (current) { setEditing(current); setForm(current) }
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => setSubs(prev => prev.filter(s => s.id !== row.id))}
                      >
                        Delete
                      </button>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setSubs((prev) => prev.map((s) => (s.id === row.id ? { ...s, status: s.status === "disabled" ? "active" : "disabled" } : s)))
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
