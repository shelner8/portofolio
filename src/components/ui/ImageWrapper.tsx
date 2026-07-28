import * as React from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWrapperProps extends Omit<ImageProps, "alt"> {
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide";
}

export function ImageWrapper({ alt, className, aspectRatio = "video", ...props }: ImageWrapperProps) {
  return (
    <div className={cn(
      "relative w-full overflow-hidden rounded-lg bg-surface/50 border border-surface",
      aspectRatio === "square" && "aspect-square",
      aspectRatio === "video" && "aspect-video",
      aspectRatio === "wide" && "aspect-[21/9]",
      className
    )}>
      <Image
        alt={alt}
        className="object-cover transition-transform duration-500 hover:scale-105"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}
