import * as React from "react"
import Link from "next/link"
import { BaseCard } from "@/components/cards/BaseCard"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center p-6 w-full">
      <BaseCard className="p-12 flex flex-col items-center justify-center text-center gap-6 max-w-lg w-full" hoverable={false}>
        <div className="p-6 rounded-full bg-accent-orange/10 text-accent-orange mb-2">
          <AlertCircle className="w-12 h-12" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">404: Packet Dropped</h2>
          <p className="text-muted leading-relaxed text-lg">
            We couldn't resolve the requested URL. The route might have been deleted, or the destination host is unreachable.
          </p>
        </div>
        
        <Button variant="primary" size="lg" className="mt-6 gap-2" asChild>
          <Link href="/">
            <Home className="w-5 h-5" />
            Return to Gateway
          </Link>
        </Button>
      </BaseCard>
    </div>
  )
}
