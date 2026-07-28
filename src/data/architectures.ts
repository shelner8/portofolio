import { Architecture } from "@/types";

export const architectures: Architecture[] = [
  {
    id: "aruba-aos-cx-data-center",
    title: "Aruba AOS-CX Data Center",
    category: "Data Center",
    description: "Modern data center deployments built around Aruba AOS-CX switching platforms designed for enterprise environments requiring high performance, stability, and operational visibility.",
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
    description: "Scalable overlay architecture extending Layer 2 and Layer 3 connectivity across physical locations without relying on legacy Spanning Tree Protocol, enabling seamless workload mobility.",
    technologies: ["EVPN", "VXLAN", "MP-BGP", "Anycast Gateway", "Symmetric IRB"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Underlay routing stability directly impacts overlay performance", "Route targets require careful capacity planning across tenants"],
    bestPractices: ["Use eBGP for the underlay routing protocol", "Implement Route Reflectors for fabric scalability"]
  },
  {
    id: "zero-trust-campus",
    title: "Zero Trust Campus Network",
    category: "Enterprise Networking",
    description: "A secure-by-default architecture that assumes breach and strictly verifies every device and user attempting to access network resources, utilizing microsegmentation and dynamic role assignment.",
    technologies: ["802.1X", "RADIUS", "ClearPass", "Microsegmentation", "Dynamic Segmentation"],
    environment: "Production",
    diagrams: [],
    lessonsLearned: ["Device profiling accuracy is the hardest challenge", "Start with visibility mode before enforcing block policies"],
    bestPractices: ["Implement fail-open policies for critical infrastructure", "Map user roles tightly to business functions"]
  }
];
