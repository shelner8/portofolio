import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "data-center-networking",
    name: "Data Center Networking",
    category: "Data Center",
    description: "Designing resilient and scalable enterprise data center infrastructure using modern architectures and Aruba Networking solutions.",
    technologies: [
      "Aruba AOS-CX", "Aruba CX10000", "VSX", "EVPN", 
      "VXLAN", "MP-BGP", "VTEP", "Spine-Leaf", 
      "Border Leaf", "Aruba Fabric Composer"
    ]
  },
  {
    id: "enterprise-networking",
    name: "Enterprise Networking",
    category: "Networking",
    description: "Building highly available enterprise campus and core networks with routing, switching and segmentation best practices.",
    technologies: [
      "Routing", "Switching", "OSPF", "BGP", 
      "VLAN", "VRF", "ACL", "High Availability", 
      "Network Segmentation"
    ]
  },
  {
    id: "network-automation",
    name: "Network Automation",
    category: "Automation",
    description: "Improving operational efficiency through automation, scripting and infrastructure-as-code practices.",
    technologies: [
      "Python", "FastAPI", "REST API", "Docker", 
      "Linux", "Git", "Infrastructure Automation"
    ]
  },
  {
    id: "operations-infrastructure",
    name: "Operations & Infrastructure",
    category: "Operations",
    description: "Delivering stable enterprise infrastructure through migration planning, troubleshooting and operational excellence.",
    technologies: [
      "Migration", "Troubleshooting", "Monitoring", 
      "Capacity Planning", "Documentation", "Operational Excellence"
    ]
  }
];
