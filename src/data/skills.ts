import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "data-center-networking",
    name: "Data Center Networking",
    category: "Data Center",
    description: "Practical engineering, deployment, and operation of highly available enterprise data center infrastructure using modern Layer 2 and Layer 3 architectures.",
    technologies: [
      "Aruba AOS-CX", "High Availability", "EVPN", "VXLAN", 
      "MP-BGP", "Spine-Leaf", "Border Leaf", "Aruba Fabric Composer"
    ]
  },
  {
    id: "enterprise-networking",
    name: "Enterprise Networking",
    category: "Networking",
    description: "Deploying enterprise routing, switching, and network segmentation with a focus on high availability and operational stability.",
    technologies: [
      "Routing", "Switching", "OSPF", "BGP", 
      "VLAN", "VRF", "ACL", "Device Policy", 
      "PBR", "High Availability", "Network Segmentation"
    ]
  },
  {
    id: "network-automation",
    name: "Network Automation & Tooling",
    category: "Automation",
    description: "Developing operational utilities, monitoring integrations, API services, and infrastructure scripting to support day-to-day network operations.",
    technologies: [
      "Python", "FastAPI", "REST API", "Docker", 
      "Linux", "Git", "Infrastructure Automation"
    ]
  },
  {
    id: "operations-infrastructure",
    name: "Network Operations",
    category: "Operations",
    description: "Ensuring stability through migration planning, troubleshooting, monitoring, capacity planning, documentation, and operational excellence.",
    technologies: [
      "Migration", "Troubleshooting", "Monitoring", 
      "Capacity Planning", "Documentation", "Operational Excellence"
    ]
  }
];
