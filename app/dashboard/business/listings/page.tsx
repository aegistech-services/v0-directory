"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Plus } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

type UserRole = 'ADMIN' | 'BUSINESS_OWNER'

interface BusinessListingItem {
  id: string
  ownerId: number
  name: string
  brn?: string
  address: string
  phone: string
  email: string
  tags: string[]
  disabled?: boolean
}

const initialData: BusinessListingItem[] = [
  { id: "1", ownerId: 1, name: "Langkawi Tours", brn: "LLP0012345", address: "123 Beach Rd", phone: "+60 12-345 6789", email: "info@lktours.com", tags: ["travel","tour"], disabled: false },
  { id: "2", ownerId: 2, name: "Island Cleaners", brn: "S1234567-X", address: "45 Palm Ave", phone: "+60 12-555 1122", email: "contact@islandcleaners.my", tags: ["services","home"], disabled: false },
]

export default function BusinessListingsCrud() {
  const [items, setItems] = useState<BusinessListingItem[]>(initialData)
  const [editing, setEditing] = useState<BusinessListingItem | null>(null)
  const [currentUser, setCurrentUser] = useState<{ id: number; role: UserRole }>({ id: 1, role: 'BUSINESS_OWNER' })
  const [form, setForm] = useState<BusinessListingItem>({ id: "", ownerId: 1, name: "", brn: "", address: "", phone: "", email: "", tags: [] })
  const [selected, setSelected] = useState<string[]>([])
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'disabled'>("all")

  const startCreate = () => {
    setEditing(null)
    setForm({ id: "", ownerId: currentUser.id, name: "", brn: "", address: "", phone: "", email: "", tags: [] })
  }

  const startEdit = (item: BusinessListingItem) => {
    setEditing(item)
    setForm(item)
  }

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
    if (editing?.id === id) setEditing(null)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editing) {
      setItems((prev) => prev.map((i) => (i.id === editing.id ? form : i)))
      setEditing(null)
    } else {
      const newItem = { ...form, id: String(Date.now()), ownerId: currentUser.id, disabled: false }
      setItems((prev) => [newItem, ...prev])
    }
    setForm({ id: "", ownerId: currentUser.id, name: "", brn: "", address: "", phone: "", email: "", tags: [] })
  }

  const visibleItems = (currentUser.role === 'ADMIN' ? items : items.filter((i) => i.ownerId === currentUser.id))
    .filter((i) => {
      const matchesQuery = query
        ? (
            (i.name + ' ' + (i.brn || '') + ' ' + i.phone + ' ' + i.email + ' ' + i.address + ' ' + i.tags.join(' '))
              .toLowerCase()
              .includes(query.toLowerCase())
          )
        : true
      const matchesStatus = statusFilter === 'all' ? true : statusFilter === 'active' ? !i.disabled : i.disabled
      return matchesQuery && matchesStatus
    })
  const allVisibleIds = visibleItems.map((i) => i.id)
  const allSelected = visibleItems.length > 0 && selected.length === visibleItems.length
  const anySelected = selected.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
      <div className="mb-6">
        <div>
          <h1 className="text-2xl font-bold">Business Listings (Mock)</h1>
          <p className="text-muted-foreground">In-memory CRUD for demo — role-scoped view</p>
        </div>
        
        {/* Search, Filters, and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Input 
              placeholder="Search name, BRN, contact, address, tags" 
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
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">Role:</div>
              <Button 
                variant={currentUser.role === 'BUSINESS_OWNER' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => { setCurrentUser({ id: 1, role: 'BUSINESS_OWNER' }); setForm((f)=>({ ...f, ownerId: 1 })) }}
              >
                Owner
              </Button>
              <Button 
                variant={currentUser.role === 'ADMIN' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => { setCurrentUser({ id: 0, role: 'ADMIN' }); }}
              >
                Admin
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={!anySelected}
              onClick={() => {
                setItems(prev => prev.map(i => selected.includes(i.id) ? { ...i, disabled: true } : i))
                setSelected([])
              }}
            >
              Disable Selected
            </Button>
            <Button onClick={startCreate} className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> New
            </Button>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editing ? "Edit Listing" : "Create Listing"}</CardTitle>
          <CardDescription>Mock form — no backend yet</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={submit}>
            {currentUser.role === 'ADMIN' && (
              <div>
                <label className="block text-sm font-medium mb-1">Owner ID</label>
                <Input type="number" value={form.ownerId} onChange={(e) => setForm({ ...form, ownerId: Number(e.target.value) })} />
              </div>
            )}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Business Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">BRN (Business Registration Number)</label>
              <Input value={form.brn || ""} onChange={(e) => setForm({ ...form, brn: e.target.value })} placeholder="e.g., LLP0012345 / SSM number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                {["travel","tour","home","services","food","event"].map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => setForm({ ...form, tags: form.tags.includes(tag) ? form.tags.filter((t) => t !== tag) : [...form.tags, tag] })}
                    className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                      form.tags.includes(tag) ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 flex gap-3">
              <Button type="submit" className="flex-1">{editing ? "Save Changes" : "Create"}</Button>
              <Button type="button" variant="outline" className="flex-1" onClick={() => { setEditing(null); setForm({ id: "", ownerId: currentUser.id, name: "", brn: "", address: "", phone: "", email: "", tags: [] }) }}>Reset</Button>
            </div>
          </form>
        </CardContent>
      </Card>

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
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">BRN</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Tags</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">
                  <input
                    aria-label={`Select ${item.name}`}
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={(e) => setSelected(prev => e.target.checked ? [...prev, item.id] : prev.filter(id => id !== item.id))}
                  />
                </td>
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.brn || '-'}</td>
                <td className="px-4 py-3">{item.phone}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.address}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${item.disabled ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {item.disabled ? 'Disabled' : 'Active'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => startEdit(item)}><Edit className="h-4 w-4" /></Button>
                    <Button size="sm" variant="destructive" onClick={() => remove(item.id)}><Trash2 className="h-4 w-4" /></Button>
                    <button
                      className="text-xs text-muted-foreground hover:text-foreground"
                      onClick={() => setItems((prev) => prev.map((i) => i.id === item.id ? { ...i, disabled: !i.disabled } : i))}
                    >
                      {item.disabled ? 'Enable' : 'Disable'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {visibleItems.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-muted-foreground" colSpan={8}>No listings available for this user.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
