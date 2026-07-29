import { HeroContent } from "@/types";
import { statistics } from "./statistics";

export const hero: HeroContent = {
  title: "Building and Operating Data Center & Enterprise Networks",
  subtitle: "Data Center & Enterprise Network Engineer",
  description: "Deploying and maintaining resilient network infrastructure, scalable data center fabrics, and self-hosted environments through practical engineering and automation.",
  highlights: [
    "Aruba Fabric Composer",
    "High Availability",
    "EVPN",
    "VXLAN",
    "MP-BGP",
    "Spine-Leaf",
    "Border Leaf",
    "Automation",
    "Enterprise Networking",
    "Self-Hosted Lab"
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
