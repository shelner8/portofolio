import { HeroContent } from "@/types";
import { statistics } from "./statistics";

export const hero: HeroContent = {
  title: "Designing Enterprise-Scale Data Center Networks with Modern Architecture",
  subtitle: "Data Center & Enterprise Network Engineer",
  description: "Designing and operating resilient enterprise networks, modern data center fabrics, and self-hosted infrastructure through practical engineering, automation, and continuous learning.",
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
