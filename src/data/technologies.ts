import { Technology } from "@/types";

export const technologies: Technology[] = [
  {
    id: "aruba-cx",
    name: "Aruba AOS-CX",
    category: "Data Center",
    vendor: "Aruba",
    level: "Expert",
    description: "Modern enterprise switching platform.",
    featured: true,
    icon: "server"
  },
  {
    id: "evpn",
    name: "EVPN",
    category: "Data Center",
    vendor: "Standard",
    level: "Advanced",
    description: "Ethernet VPN control plane for overlay networks.",
    featured: true,
    icon: "network"
  },
  {
    id: "python",
    name: "Python",
    category: "Automation",
    vendor: "Open Source",
    level: "Intermediate",
    description: "Programming language for network automation.",
    featured: true,
    icon: "code"
  }
];
