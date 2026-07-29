import { HeroContent } from "@/types";
import { statistics } from "./statistics";

export const hero: HeroContent = {
  title: "Designing Enterprise-Scale Data Center Networks with Modern Architecture",
  subtitle: "Data Center Network Specialist & Enterprise Network Engineer",
  description: "Building resilient, scalable, and highly available infrastructure using Aruba Networking, EVPN-VXLAN Fabric, Enterprise Routing & Switching, Network Automation, and Modern Data Center Architecture.",
  highlights: [
    "Aruba Fabric Composer",
    "VSX",
    "EVPN",
    "VXLAN",
    "MP-BGP",
    "VTEP",
    "Spine-Leaf",
    "Border Leaf",
    "Linux",
    "Python",
    "Docker",
    "Automation",
    "Enterprise Networking"
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
      href: "/#projects",
      variant: "secondary"
    }
  ]
};
