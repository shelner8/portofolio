"use client"
import * as React from "react"
import { useEffect } from "react"
import { BaseCard } from "@/components/cards/BaseCard"
import { Button } from "@/components/ui/button"
import { ShieldAlert, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Next.js Error Boundary Caught:", error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <BaseCard className="p-10 flex flex-col items-center text-center gap-6 max-w-lg w-full border-accent-red/20" hoverable={false}>
        <div className="p-5 rounded-full bg-accent-red/10 text-accent-red mb-2">
          <ShieldAlert className="w-10 h-10" />
        </div>
        
        <div className="w-full">
          <h2 className="text-2xl font-bold text-primary mb-3">System Fault Detected</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            An unexpected runtime error occurred while attempting to render this interface.
          </p>
          <div className="bg-surface/50 p-4 rounded text-left overflow-auto text-xs font-mono text-muted/80 max-h-32 mb-2 w-full border border-surface">
            {error.message || "Unknown internal error"}
          </div>
        </div>
        
        <Button variant="primary" onClick={() => reset()} className="gap-2 mt-2">
          <RefreshCw className="w-4 h-4" />
          Reboot Interface
        </Button>
      </BaseCard>
    </div>
  )
}
