import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "modern-data-center",
    name: "Modern Data Center",
    category: "Data Center",
    description: "Design and implementation of enterprise-grade data center infrastructure using modern leaf-spine architecture and EVPN-VXLAN technologies.",
    technologies: ["Aruba AOS-CX", "EVPN", "VXLAN", "MP-BGP", "VSX"]
  },
  {
    id: "enterprise-networking",
    name: "Enterprise Networking",
    category: "Networking",
    description: "Building reliable enterprise campus and backbone networks to support business-critical applications with high availability.",
    technologies: ["OSPF", "BGP", "VRF", "QoS", "Spanning Tree"]
  },
  {
    id: "network-automation",
    name: "Network Automation",
    category: "Automation",
    description: "Automating network provisioning, configuration management, and operational state validation to reduce human error.",
    technologies: ["Python", "Ansible", "FastAPI", "Netmiko", "REST APIs"]
  },
  {
    id: "infrastructure-security",
    name: "Infrastructure Security",
    category: "Security",
    description: "Securing network perimeters and lateral movement through microsegmentation, precise access controls, and secure tunneling.",
    technologies: ["Firewalls", "802.1X", "IPsec", "Tailscale", "Zero Trust"]
  }
];
