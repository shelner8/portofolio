import { HeroContent } from "@/types";
import { statistics } from "./statistics";

export const hero: HeroContent = {
  title: "Building and Operating Data Center & Enterprise Networks",
  subtitle: "Data Center & Enterprise Network Engineer",
  description: "Deploying, operating, and maintaining enterprise networks and data center infrastructure while validating changes through practical engineering, automation, and continuous testing.",
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
