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
    lessonsLearned: ["Configuration validation reduces deployment risk.", "Documentation simplifies future operations."],
    bestPractices: ["Use high-availability architectures appropriate to deployment requirements.", "Perform staged deployment and rollback planning."]
  },
  {
    id: "evpn-vxlan-multisite",
    title: "EVPN-VXLAN Data Center Fabric",
    category: "Data Center",
    description: "Practical implementation experience deploying EVPN-VXLAN fabrics using Spine-Leaf architecture to provide scalable Layer 2 and Layer 3 connectivity within enterprise data center environments.",
    technologies: ["EVPN", "VXLAN", "MP-BGP", "Anycast Gateway", "Symmetric IRB"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Routing consistency is critical for scalable environments.", "Testing before production minimizes operational impact."],
    bestPractices: ["Validate redundancy before production deployment.", "Validate routing consistency before migration."]
  },
  {
    id: "enterprise-security",
    title: "Enterprise Network Security & Segmentation",
    category: "Enterprise Networking",
    description: "Real production implementation experience involving ACLs, Device Policy, Policy-Based Routing (PBR), network segmentation, and strict enterprise access control.",
    technologies: ["ACL", "Device Policy", "PBR", "Network Segmentation", "Access Control", "Security Policy"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Testing before production minimizes operational impact.", "Configuration validation reduces deployment risk."],
    bestPractices: ["Validate redundancy before production deployment.", "Perform staged deployment and rollback planning."]
  }
];
