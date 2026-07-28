import { HeroContent } from "@/types";
import { statistics } from "./statistics";

export const hero: HeroContent = {
  title: "Designing Enterprise-Scale Data Center Networks with Modern Architecture",
  subtitle: "Data Center Network Specialist & Enterprise Network Engineer",
  description: "Building resilient, scalable, and highly available infrastructure using Aruba Networking, EVPN-VXLAN Fabric, Enterprise Routing & Switching, and Network Automation.",
  highlights: [
    "Aruba AOS-CX",
    "CX10000",
    "Spine Leaf",
    "Border Leaf",
    "MP-BGP EVPN",
    "VTEP",
    "EVPN",
    "VXLAN",
    "VSX",
    "AFC",
    "Enterprise Networking",
    "Linux",
    "Docker",
    "Python",
    "FastAPI",
    "Tailscale",
    "Automation"
  ],
  statistics: statistics,
  actions: [
    {
      label: "Download Resume",
      href: "/resume.pdf",
      variant: "primary"
    },
    {
      label: "Explore Projects",
      href: "/projects",
      variant: "secondary"
    }
  ]
};
