import * as React from "react"
import { Container } from "@/components/shared/Container"

export default function Loading() {
  return (
    <Container className="py-8 md:py-16 w-full">
      <div className="flex flex-col gap-16 w-full">
        {/* Hero Skeleton */}
        <div className="flex flex-col gap-6 pt-12 animate-pulse w-full">
          <div className="h-6 w-32 bg-surface rounded-full" />
          <div className="h-16 md:h-20 w-3/4 max-w-3xl bg-surface/80 rounded-lg" />
          <div className="h-24 w-full max-w-3xl bg-surface/50 rounded-lg mt-2" />
          <div className="flex gap-4 mt-6">
            <div className="h-12 w-36 bg-surface/80 rounded-lg" />
            <div className="h-12 w-36 bg-surface/50 rounded-lg" />
          </div>
        </div>
        
        {/* Sections Skeleton */}
        <div className="flex flex-col gap-8 w-full mt-8">
          <div className="h-8 w-48 bg-surface rounded-lg animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="h-64 bg-surface/20 rounded-[18px] border border-surface/50 animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }} 
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
