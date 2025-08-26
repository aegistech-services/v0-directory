"use client"

import { Loader2 } from "lucide-react"

interface CenteredSpinnerProps {
  label?: string
}

export function CenteredSpinner({ label = "Loading..." }: CenteredSpinnerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
    </div>
  )
}
