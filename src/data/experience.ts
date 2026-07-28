import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "current-enterprise-role",
    company: "Mitra Solusi Infokom",
    position: "Network Engineer",
    employmentType: "Full-time",
    location: "",
    startDate: "Sep 2023",
    current: true,
    summary: "Responsible for designing, implementing, operating and maintaining enterprise networking and modern data center infrastructure.",
    responsibilities: [
      "Led Enterprise Network Design and Data Center Network Design initiatives.",
      "Managed and deployed Aruba AOS-CX infrastructure.",
      "Implemented high-availability architectures using VSX.",
      "Designed and deployed EVPN-VXLAN data center fabrics.",
      "Orchestrated data center networks using Aruba Fabric Composer.",
      "Executed seamless network migrations and production deployments.",
      "Configured enterprise routing using OSPF and BGP.",
      "Implemented network segmentation utilizing VRF and VLANs.",
      "Developed comprehensive network documentation.",
      "Managed infrastructure monitoring and performance optimization.",
      "Conducted advanced network troubleshooting and incident resolution."
    ],
    achievements: [],
    technologies: [
      "Aruba AOS-CX", "Aruba CX10000", "VSX", "EVPN", 
      "VXLAN", "MC-LAG", "MP-BGP", "Spine-Leaf", "AFC", 
      "Linux", "Python", "Docker", "Git"
    ],
    projects: []
  },
  {
    id: "angkasa-pura-solusi-integra",
    company: "Angkasa Pura Solusi Integra",
    position: "Network Team Lead",
    employmentType: "Full-time",
    location: "Soekarno-Hatta International Airport",
    startDate: "Aug 2022",
    endDate: "Sep 2023",
    current: false,
    summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra.",
    responsibilities: [
      "Led network operations teams and acted as the technical authority for enterprise campus and data center network environments.",
      "Managed enterprise routing and switching infrastructure using MikroTik CCR1036/CCR1072 and Aruba devices, including: VLAN Segmentation, Layer 2 / Layer 3 Switching, Static Routing, OSPF, External BGP Peering, Policy-Based Routing (PBR), Firewall Filter, Firewall NAT, QoS, Queue Tree, PCQ, FastTrack Optimization, DHCP Server, DHCP Relay, and Bandwidth Management.",
      "Designed and managed ISP connectivity and Internet Exchange (Cyber APJII, IX, IIX) using multi-NAP BGP peering for high availability and redundant external connectivity.",
      "Implemented enterprise routing architecture using Static Routing, OSPF, and External BGP to provide resilient connectivity between sites and external providers.",
      "Designed, maintained, and optimized MikroTik RouterOS gateway services, including: Multi-WAN Routing, ISP Failover, Firewall Security Policies, Traffic Shaping, Address Lists, Routing Policies, Performance Optimization, and Network Troubleshooting.",
      "Designed and deployed Fortinet firewall solutions to secure enterprise network traffic and improve perimeter security.",
      "Implemented enterprise monitoring using Zabbix, Cacti, and Observium, enabling proactive monitoring, capacity planning, and faster incident response.",
      "Led Incident Management, Root Cause Analysis (RCA), and production recovery activities while maintaining SLA targets above 99%.",
      "Reviewed and approved Method of Procedure (MOP) documents for production network changes and developed contingency plans for routers, switches, fiber optic infrastructure, Metro-E services, and ISP connectivity.",
      "Managed VMware ESXi host configuration and supported enterprise virtualization environments."
    ],
    achievements: [],
    technologies: [
      "MikroTik", "RouterOS", "VLAN", "Static Routing", "OSPF", "BGP", "Policy-Based Routing", "Firewall", "NAT", "QoS", "Queue Tree", "PCQ", "FastTrack", "DHCP", "DHCP Relay", "Multi-WAN", "ISP Peering", "Internet Exchange", "Aruba AOS-CX", "Fortinet", "VMware ESXi", "Zabbix", "Cacti", "Observium"
    ],
    projects: ["angkasa-pura-solusi-integra"]
  },
  {
    id: "angkasa-pura-solusi-integra-technician",
    company: "Angkasa Pura Solusi Integra",
    position: "Network Operations Technician",
    employmentType: "Full-time",
    location: "Soekarno-Hatta International Airport",
    startDate: "Jul 2022",
    endDate: "Sep 2022",
    current: false,
    summary: "Provided operational support for enterprise campus networking, switching infrastructure, wireless environments, and day-to-day network operations while maintaining service availability.",
    responsibilities: [
      "Supported daily enterprise network operations across airport infrastructure.",
      "Managed and maintained switching infrastructure using Cisco, HPE, Aruba, and Alcatel-Lucent devices.",
      "Performed wireless infrastructure monitoring using Aruba Wireless solutions.",
      "Conducted Layer 1 and Layer 2 network troubleshooting.",
      "Assisted with network asset management and infrastructure maintenance.",
      "Supported preventive maintenance activities to ensure network availability."
    ],
    achievements: [],
    technologies: [
      "Cisco", "HPE", "Aruba", "Alcatel-Lucent", "Switching", "Wireless LAN", "Layer 2", "Network Monitoring"
    ],
    projects: []
  }
];
