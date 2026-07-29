import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "data-center-networking",
    name: "Data Center Networking",
    category: "Data Center",
    description: "Practical engineering, deployment, and management of highly available data center infrastructure, VSX, and operational reliability.",
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
    description: "Deploying enterprise routing, switching, and network segmentation with a focus on high availability and operational stability.",
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
    description: "Improving efficiency and reducing errors through automation, scripting, and repeatable operational workflows.",
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
