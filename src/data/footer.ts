import { RESUME_URL } from "@/lib/constants";

export const footer = {
  brandStatement: "Designing reliable infrastructure for modern enterprises through architecture, automation, and operational excellence.",
  quote: "Reliable infrastructure is not built by chance. It is engineered through thoughtful architecture, continuous improvement, and operational excellence.",
  copyright: `© ${new Date().getFullYear()} Enterprise Network Engineer. All rights reserved.`,
  navigation: [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "#expertise" },
    { name: "Professional Profile", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    // { name: "Articles", href: "/articles" },
    { name: "Resume", href: RESUME_URL },
    { name: "Contact", href: "#contact" },
  ],
  technologies: [
    "Aruba AOS-CX",
    "EVPN",
    "VXLAN",
    "VSX",
    "Aruba Fabric Composer",
    "Python",
    "Linux",
    "Docker",
    "FastAPI",
    "Tailscale",
    "Enterprise Networking"
  ]
};
