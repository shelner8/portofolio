import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "data-center-networking",
    name: "Data Center Networking",
    category: "Data Center",
    description: "Designing and deploying highly available, scalable enterprise data center fabrics using modern architectures.",
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
    description: "Building robust enterprise campus networks and routing topologies to support seamless, secure business operations.",
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
    description: "Creating programmatic workflows and infrastructure-as-code deployments to eliminate manual misconfigurations.",
    technologies: [
      "Python", "FastAPI", "REST API", "Docker", 
      "Linux", "Git", "Infrastructure Automation"
    ]
  },
  {
    id: "operations-infrastructure",
    name: "Operations & Infrastructure",
    category: "Operations",
    description: "Ensuring 24/7 uptime through rigorous capacity planning, proactive monitoring, and meticulous migration strategies.",
    technologies: [
      "Migration", "Troubleshooting", "Monitoring", 
      "Capacity Planning", "Documentation", "Operational Excellence"
    ]
  }
];
