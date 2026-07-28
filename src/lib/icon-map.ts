import { Circle, Server, Network, Code, Briefcase, Clock, Award, Box, Cpu } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  briefcase: Briefcase,
  server: Server,
  network: Network,
  award: Award,
  cpu: Cpu,
  code: Code,
  box: Box,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name.toLowerCase()] || Circle;
}
