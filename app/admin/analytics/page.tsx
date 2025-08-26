"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"

interface MetricRow {
  id: string
  title: string
  value: number | string
  extra?: string
}

const MOCK_BOOKMARKS: MetricRow[] = [
  { id: "1", title: "Bali Adventure Tour", value: 124 },
  { id: "3", title: "Senior React Developer", value: 98 },
  { id: "4", title: "Home Cleaning Service", value: 67 },
]

const MOCK_RATINGS: MetricRow[] = [
  { id: "7", title: "Mountain Hiking Retreat", value: 4.9, extra: "(2,345 reviews)" },
  { id: "1", title: "Bali Adventure Tour", value: 4.8, extra: "(1,987 reviews)" },
  { id: "2", title: "Tech Conference 2024", value: 4.7, extra: "(1,203 reviews)" },
]

const MOCK_KEYWORDS: MetricRow[] = [
  { id: "k1", title: "langkawi tour", value: 534 },
  { id: "k2", title: "jobs remote", value: 412 },
  { id: "k3", title: "home cleaning", value: 301 },
]

const MOCK_CLICKS: MetricRow[] = [
  { id: "2", title: "Tech Conference 2024", value: 1823 },
  { id: "5", title: "Express Train to Paris", value: 1542 },
  { id: "8", title: "Marketing Manager Position", value: 1330 },
]

const MOCK_INQUIRIES: MetricRow[] = [
  { id: "4", title: "Home Cleaning Service", value: 245 },
  { id: "6", title: "Jazz Festival Weekend", value: 198 },
  { id: "1", title: "Bali Adventure Tour", value: 176 },
]

export default function AdminAnalyticsPage() {
  const [range, setRange] = useState<"7d" | "30d" | "90d">("30d")

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-sm text-muted-foreground">Key engagement metrics across the directory</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={range === "7d" ? "default" : "outline"} size="sm" onClick={() => setRange("7d")}>7d</Button>
            <Button variant={range === "30d" ? "default" : "outline"} size="sm" onClick={() => setRange("30d")}>30d</Button>
            <Button variant={range === "90d" ? "default" : "outline"} size="sm" onClick={() => setRange("90d")}>90d</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AnalyticsTable title="Top Bookmarked" rows={MOCK_BOOKMARKS} valueLabel="Bookmarks" />
          <AnalyticsTable title="Highest Rated" rows={MOCK_RATINGS} valueLabel="Rating" />
          <AnalyticsTable title="Top Keywords" rows={MOCK_KEYWORDS} valueLabel="Searches" />
          <AnalyticsTable title="Most Clicked" rows={MOCK_CLICKS} valueLabel="Clicks" />
          <AnalyticsTable title="Most Inquiries" rows={MOCK_INQUIRIES} valueLabel="Inquiries" />
        </div>
      </div>
    </div>
  )
}

function AnalyticsTable({ title, rows, valueLabel }: { title: string; rows: MetricRow[]; valueLabel: string }) {
  return (
    <div className="overflow-x-auto rounded-md border bg-background">
      <div className="px-4 py-3 border-b">
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      <table className="min-w-full text-sm">
        <thead className="bg-muted/50 text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-right">{valueLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="px-4 py-3">
                <div className="font-medium">{row.title}</div>
                {row.extra && <div className="text-xs text-muted-foreground">{row.extra}</div>}
              </td>
              <td className="px-4 py-3 text-right font-medium">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
