import { Architecture } from "@/types";

export const architectures: Architecture[] = [
  {
    id: "aruba-aos-cx-data-center",
    title: "Aruba AOS-CX Data Center",
    category: "Data Center",
    description: "Practical deployment and operation of Aruba AOS-CX data center infrastructure including high-availability design, routing, switching, and production migration.",
    technologies: ["Aruba AOS-CX", "High Availability", "OSPF", "BGP", "Aruba Fabric Composer"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Lab validation significantly reduces production risk.", "Thorough documentation simplifies future maintenance and troubleshooting."],
    bestPractices: ["Validate all configurations in EVE-NG or PNETLab before production deployment whenever practical.", "Perform staged deployment with rollback planning."]
  },
  {
    id: "evpn-vxlan-multisite",
    title: "EVPN-VXLAN Data Center Fabric",
    category: "Data Center",
    description: "Production deployment of EVPN-VXLAN Spine-Leaf fabrics within enterprise data center environments using scalable Layer 2 and Layer 3 overlay architecture.",
    technologies: ["EVPN", "VXLAN", "MP-BGP", "Spine-Leaf", "Border Leaf"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Routing consistency is more important than deployment speed.", "Production changes should always include rollback procedures."],
    bestPractices: ["Verify routing convergence before maintenance windows.", "Validate redundancy and failover after deployment."]
  },
  {
    id: "enterprise-network-infrastructure",
    title: "Enterprise Network Infrastructure",
    category: "Enterprise Networking",
    description: "Production implementation of enterprise campus networks including routing, switching, ACLs, Device Policy, Policy-Based Routing (PBR), segmentation, and operational migration.",
    technologies: ["Routing", "Switching", "ACL", "Device Policy", "PBR", "Network Segmentation"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Configuration review prevents most operational mistakes.", "Lab validation significantly reduces production risk."],
    bestPractices: ["Document configuration changes before implementation.", "Validate all configurations in EVE-NG or PNETLab before production deployment whenever practical."]
  }
];
