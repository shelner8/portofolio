import { Architecture } from "@/types";

export const architectures: Architecture[] = [
  {
    id: "aruba-aos-cx-data-center",
    title: "Aruba AOS-CX Data Center",
    category: "Data Center",
    description: "Practical deployment experience using Aruba AOS-CX, VSX, routing, and switching to ensure strict operational reliability in enterprise environments.",
    technologies: ["Aruba AOS-CX", "VSX", "OSPF", "BGP", "Aruba Fabric Composer"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Pre-deployment validation is critical for success", "Automation significantly reduces configuration drift"],
    bestPractices: ["Always implement VSX for high availability", "Segment routing domains at the core"]
  },
  {
    id: "evpn-vxlan-multisite",
    title: "EVPN-VXLAN Multi-Site",
    category: "Data Center",
    description: "Real implementation experience deploying scalable EVPN-VXLAN fabrics for robust Layer 2 and Layer 3 connectivity.",
    technologies: ["EVPN", "VXLAN", "MP-BGP", "Anycast Gateway", "Symmetric IRB"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Underlay routing stability directly impacts overlay performance", "Route targets require careful capacity planning across tenants"],
    bestPractices: ["Use eBGP for the underlay routing protocol", "Implement Route Reflectors for fabric scalability"]
  },
  {
    id: "enterprise-security",
    title: "Enterprise Network Security & Segmentation",
    category: "Enterprise Networking",
    description: "Real production implementation experience involving ACLs, Device Policy, Policy-Based Routing (PBR), network segmentation, and strict enterprise access control.",
    technologies: ["ACL", "Device Policy", "PBR", "Network Segmentation", "Access Control", "Security Policy"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Testing security policies in simulation prevents production outages", "Clear documentation is required for complex routing policies"],
    bestPractices: ["Enforce least privilege access control", "Maintain strict network segmentation"]
  }
];
