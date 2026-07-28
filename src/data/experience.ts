import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "current-role",
    company: "Enterprise Corp",
    position: "Data Center Network Specialist & Enterprise Network Engineer",
    employmentType: "Full-time",
    location: "Indonesia",
    startDate: "2020-01-01",
    current: true,
    summary: "Design, deploy, operate, and continuously improve enterprise network infrastructure supporting business-critical services.",
    responsibilities: [
      "Design enterprise network architectures mapping to business requirements",
      "Deploy Aruba AOS-CX infrastructure in Spine-Leaf topologies",
      "Operate production data center environments and manage incidents",
      "Monitor infrastructure health and develop Python-based automation scripts"
    ],
    achievements: [
      "Successfully modernized enterprise network infrastructure using Aruba AOS-CX platforms.",
      "Implemented EVPN-VXLAN architecture to improve scalability and simplify future expansion."
    ],
    technologies: ["Aruba AOS-CX", "EVPN", "VXLAN", "BGP", "Python", "FastAPI"],
    projects: ["enterprise-dc-modernization", "evpn-vxlan-fabric"]
  },
  {
    id: "past-role",
    company: "Tech Solutions Integrator",
    position: "Network Engineer",
    employmentType: "Full-time",
    location: "Indonesia",
    startDate: "2016-06-01",
    endDate: "2019-12-31",
    current: false,
    summary: "Provided tier 2 and tier 3 network engineering support and implemented campus network refreshes for large enterprise clients.",
    responsibilities: [
      "Configured and deployed campus edge and core switching",
      "Implemented NAC solutions using 802.1X and RADIUS",
      "Troubleshot routing protocols (OSPF, BGP) in complex topologies",
      "Maintained firewall security policies and VPN tunnels"
    ],
    achievements: [
      "Led a 50-site campus network refresh completing 2 weeks ahead of schedule.",
      "Standardized switch configurations across all branch deployments."
    ],
    technologies: ["Aruba", "Cisco", "OSPF", "ClearPass", "Fortinet"],
    projects: ["zero-trust-campus"]
  }
];
