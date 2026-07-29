import { RESUME_URL } from "@/lib/constants";

export const footer = {
  brandStatement: "Deploying and operating reliable infrastructure for enterprise networks and data centers.",
  quote: "Reliable infrastructure is engineered through practical implementation, continuous validation, and proper documentation.",
  copyright: `© ${new Date().getFullYear()} Enterprise Network Engineer. All rights reserved.`,
  deploymentNote: "This portfolio is deployed on a self-hosted Ubuntu Server using Docker, Nginx Reverse Proxy, and Tailscale for secure remote administration.",
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
