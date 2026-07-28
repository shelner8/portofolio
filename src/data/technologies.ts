import { Technology } from "@/types";

export const technologies: Technology[] = [
  // --- Data Center ---
  {
    id: "evpn",
    slug: "evpn",
    name: "EVPN",
    category: "Data Center",
    featured: true,
    description: "Modern control-plane for VXLAN fabrics using MP-BGP.",
    overview: "Ethernet VPN (EVPN) is a BGP-based control plane that enables scalable MAC and IP address learning. It replaces legacy flood-and-learn mechanisms in VXLAN fabrics, drastically improving efficiency, minimizing broadcast traffic, and providing seamless multi-tenancy in modern data center environments.",
    concepts: ["Route Type-2", "Route Type-3", "Route Type-5", "VTEP", "Anycast Gateway", "L2VNI", "L3VNI", "MP-BGP"],
    bestPractices: [
      "Use Loopback interfaces for VTEP addresses.",
      "Keep Underlay and Overlay separated.",
      "Enable Jumbo Frames consistently.",
      "Use ECMP for Underlay routing.",
      "Validate MTU before enabling VXLAN."
    ],
    architectureDiagram: "fabric",
    experience: [
      {
        projectId: "kompas-gramedia",
        summary: "Production deployment using Aruba CX10000 Spine-Leaf architecture with EVPN-VXLAN overlay and MP-BGP control plane."
      }
    ],
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["vxlan", "mp-bgp"],
    icon: "network"
  },
  {
    id: "vxlan",
    slug: "vxlan",
    name: "VXLAN",
    category: "Data Center",
    featured: true,
    description: "Layer 2 overlay scheme over a Layer 3 network, offering scalable multi-tenancy.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["evpn", "anycast-gateway"],
    icon: "layers"
  },
  {
    id: "mp-bgp",
    slug: "mp-bgp",
    name: "MP-BGP",
    category: "Data Center",
    featured: true,
    description: "Multiprotocol BGP used to distribute MAC and IP reachability information.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["evpn", "bgp"],
    icon: "share-2"
  },
  {
    id: "ospf",
    slug: "ospf",
    name: "OSPF",
    category: "Data Center",
    featured: true,
    description: "Link-state routing protocol for robust underlay connectivity.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ],
    relatedProjects: ["kompas-gramedia", "gmf-aeroasia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc", "juniper-jncia-dc"],
    relatedTechnologies: ["bgp"],
    icon: "route"
  },
  {
    id: "bgp",
    slug: "bgp",
    name: "BGP",
    category: "Data Center",
    featured: true,
    description: "Core routing protocol used for both internet and data center IP fabrics.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ],
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["mp-bgp", "ospf"],
    icon: "globe"
  },
  {
    id: "anycast-gateway",
    slug: "anycast-gateway",
    name: "Anycast Gateway",
    category: "Data Center",
    description: "Distributed default gateway architecture providing optimal first-hop routing.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["evpn", "vxlan", "vrf"],
    icon: "milestone"
  },
  {
    id: "vrf",
    slug: "vrf",
    name: "VRF",
    category: "Data Center",
    featured: true,
    description: "Virtual Routing and Forwarding enables multiple routing tables for multi-tenancy.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc", "aruba-acsp"],
    relatedTechnologies: ["evpn", "anycast-gateway"],
    icon: "box"
  },
  {
    id: "spine-leaf",
    slug: "spine-leaf",
    name: "Spine-Leaf",
    category: "Data Center",
    description: "Two-tier network topology offering non-blocking, predictable east-west traffic flow.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["leaf-switch", "border-leaf", "evpn"],
    icon: "git-merge"
  },
  {
    id: "leaf-switch",
    slug: "leaf-switch",
    name: "Leaf Switch",
    category: "Data Center",
    description: "Access-layer switch in a Clos architecture providing endpoint connectivity.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["aruba-acsp"],
    relatedTechnologies: ["spine-leaf"],
    icon: "server"
  },
  {
    id: "border-leaf",
    slug: "border-leaf",
    name: "Border Leaf",
    category: "Data Center",
    description: "Gateway switches bridging the internal fabric to external networks and services.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncis-dc"],
    relatedTechnologies: ["spine-leaf"],
    icon: "shield-alert"
  },
  // --- Aruba ---
  {
    id: "aruba-aos-cx",
    slug: "aruba-aos-cx",
    name: "Aruba AOS-CX",
    category: "Aruba",
    featured: true,
    description: "Modern microservices-based, database-driven operating system for enterprise switching.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ],
    relatedProjects: ["kompas-gramedia", "gmf-aeroasia"],
    relatedArticles: [],
    relatedCertifications: ["aruba-acsp"],
    relatedTechnologies: ["aruba-vsx", "aruba-vsf"],
    icon: "hard-drive"
  },
  {
    id: "aruba-vsx",
    slug: "aruba-vsx",
    name: "Aruba VSX",
    category: "Aruba",
    featured: true,
    description: "Virtual Switching Extension provides high availability without shared control planes.",
    overview: "Aruba VSX (Virtual Switching Extension) is a high-availability technology designed for the core and aggregation layers. Unlike legacy stacking, VSX maintains independent control planes on each switch while presenting a unified active-active gateway to downstream devices, ensuring zero-downtime software upgrades.",
    concepts: ["ISL", "Keepalive", "Active Gateway", "MC-LAG", "Sync", "VSX Pair"],
    bestPractices: [
      "Dedicate high-bandwidth interfaces for the ISL.",
      "Route Keepalive over a separate out-of-band management network when possible.",
      "Enable 'vsx-sync' for critical control plane protocols to prevent drift.",
      "Use Active Gateway for first-hop routing redundancy."
    ],
    experience: [
      {
        projectId: "gmf-aeroasia",
        summary: "Implemented redundant Aruba VSX core pairs for seamless high availability and simplified MC-LAG connectivity to server racks."
      }
    ],
    relatedProjects: ["kompas-gramedia", "gmf-aeroasia"],
    relatedArticles: [],
    relatedCertifications: ["aruba-acsp"],
    relatedTechnologies: ["aruba-aos-cx", "lacp"],
    icon: "copy"
  },
  {
    id: "aruba-vsf",
    slug: "aruba-vsf",
    name: "Aruba VSF",
    category: "Aruba",
    description: "Virtual Switching Framework combines multiple switches into a single logical device.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: ["aruba-acsp"],
    relatedTechnologies: ["aruba-aos-cx"],
    icon: "link"
  },
  {
    id: "aruba-fabric-composer",
    slug: "aruba-fabric-composer",
    name: "Aruba Fabric Composer",
    category: "Automation",
    featured: true,
    description: "API-driven software-defined orchestration tool for data center fabrics.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: ["aruba-aos-cx", "spine-leaf", "evpn"],
    icon: "cpu"
  },
  {
    id: "aruba-cx10000",
    slug: "aruba-cx10000",
    name: "Aruba CX10000",
    category: "Aruba",
    featured: true,
    description: "Distributed services switch powered by Pensando DPU for stateful inspection.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: ["aruba-aos-cx"],
    icon: "server"
  },
  // --- Enterprise Networking ---
  {
    id: "vlan",
    slug: "vlan",
    name: "VLAN",
    category: "Enterprise Networking",
    description: "Virtual Local Area Network enabling Layer 2 segmentation.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ],
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: ["juniper-jncia-dc", "aruba-acsp"],
    relatedTechnologies: ["mstp"],
    icon: "layers"
  },
  {
    id: "lacp",
    slug: "lacp",
    name: "LACP",
    category: "Enterprise Networking",
    description: "Link Aggregation Control Protocol providing dynamic bandwidth bundling and redundancy.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: ["aruba-acsp"],
    relatedTechnologies: ["aruba-vsx"],
    icon: "git-commit"
  },
  {
    id: "stp",
    slug: "stp",
    name: "STP",
    category: "Enterprise Networking",
    description: "Spanning Tree Protocol preventing Layer 2 loops.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: ["mstp", "vlan"],
    icon: "git-pull-request"
  },
  {
    id: "mstp",
    slug: "mstp",
    name: "MSTP",
    category: "Enterprise Networking",
    description: "Multiple Spanning Tree Protocol mapping multiple VLANs to instances.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: ["aruba-acsp"],
    relatedTechnologies: ["stp", "vlan"],
    icon: "git-branch"
  },
  {
    id: "jumbo-frames",
    slug: "jumbo-frames",
    name: "Jumbo Frames",
    category: "Enterprise Networking",
    description: "Ethernet frames exceeding 1500 bytes MTU, optimizing data center throughput.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: [],
    icon: "maximize"
  },
  // --- Security ---
  {
    id: "cisco-firepower",
    slug: "cisco-firepower",
    name: "Cisco Firepower",
    category: "Enterprise Networking",
    featured: true,
    description: "Enterprise firewall integration with Aruba switching, enterprise routing, and production network infrastructure.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: ["border-leaf"],
    icon: "shield"
  },
  // --- Connectivity ---
  {
    id: "sd-wan",
    slug: "sd-wan",
    name: "SD-WAN",
    category: "Connectivity",
    description: "Software-Defined Wide Area Network orchestrating secure branch routing over internet transport.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: ["aruba-sdwan-expert"],
    relatedTechnologies: [],
    icon: "wifi"
  },
  {
    id: "tailscale",
    slug: "tailscale",
    name: "Tailscale",
    category: "Connectivity",
    description: "Zero-config VPN utilizing WireGuard for peer-to-peer mesh connectivity.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: [],
    icon: "network"
  },
  // --- Platforms ---
  {
    id: "mikrotik",
    slug: "mikrotik",
    name: "MikroTik",
    category: "Platforms",
    featured: true,
    description: "RouterOS platform providing cost-effective routing and switching capabilities.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ],
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: [],
    icon: "server"
  }
,
  {
    id: "routeros",
    slug: "routeros",
    name: "RouterOS",
    category: "Platforms",
    description: "Enterprise implementation of RouterOS.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "static-routing",
    slug: "static-routing",
    name: "Static Routing",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Static Routing.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "policy-based-routing",
    slug: "policy-based-routing",
    name: "Policy-Based Routing",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Policy-Based Routing.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "qos",
    slug: "qos",
    name: "QoS",
    category: "Enterprise Networking",
    description: "Enterprise implementation of QoS.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "queue-tree",
    slug: "queue-tree",
    name: "Queue Tree",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Queue Tree.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "pcq",
    slug: "pcq",
    name: "PCQ",
    category: "Enterprise Networking",
    description: "Enterprise implementation of PCQ.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "fasttrack",
    slug: "fasttrack",
    name: "FastTrack",
    category: "Enterprise Networking",
    description: "Enterprise implementation of FastTrack.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "dhcp",
    slug: "dhcp",
    name: "DHCP",
    category: "Enterprise Networking",
    description: "Enterprise implementation of DHCP.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "dhcp-relay",
    slug: "dhcp-relay",
    name: "DHCP Relay",
    category: "Enterprise Networking",
    description: "Enterprise implementation of DHCP Relay.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "multi-wan",
    slug: "multi-wan",
    name: "Multi-WAN",
    category: "Connectivity",
    description: "Enterprise implementation of Multi-WAN.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "isp-peering",
    slug: "isp-peering",
    name: "ISP Peering",
    category: "Connectivity",
    description: "Enterprise implementation of ISP Peering.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "internet-exchange",
    slug: "internet-exchange",
    name: "Internet Exchange",
    category: "Connectivity",
    description: "Enterprise implementation of Internet Exchange.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "fortinet",
    slug: "fortinet",
    name: "Fortinet",
    category: "Enterprise Networking",
    description: "Enterprise firewall integration supporting secure connectivity within enterprise network deployments.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "vmware-esxi",
    slug: "vmware-esxi",
    name: "VMware ESXi",
    category: "Platforms",
    description: "Enterprise implementation of VMware ESXi.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "zabbix",
    slug: "zabbix",
    name: "Zabbix",
    category: "Monitoring",
    description: "Enterprise implementation of Zabbix.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "cacti",
    slug: "cacti",
    name: "Cacti",
    category: "Monitoring",
    description: "Enterprise implementation of Cacti.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  },
  {
    id: "observium",
    slug: "observium",
    name: "Observium",
    category: "Monitoring",
    description: "Enterprise implementation of Observium.",
    experience: [
      {
        experienceId: "angkasa-pura-solusi-integra",
        summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
      }
    ]
  }
,
  {
    id: "ixia",
    slug: "ixia",
    name: "IXIA",
    category: "Enterprise Networking",
    description: "Enterprise implementation of IXIA.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "network-visibility",
    slug: "network-visibility",
    name: "Network Visibility",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Network Visibility.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "high-availability",
    slug: "high-availability",
    name: "High Availability",
    category: "Enterprise Networking",
    description: "Enterprise implementation of High Availability.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "bypass-switch",
    slug: "bypass-switch",
    name: "Bypass Switch",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Bypass Switch.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "traffic-monitoring",
    slug: "traffic-monitoring",
    name: "Traffic Monitoring",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Traffic Monitoring.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "enterprise-switching",
    slug: "enterprise-switching",
    name: "Enterprise Switching",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Enterprise Switching.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "layer-3-routing",
    slug: "layer-3-routing",
    name: "Layer 3 Routing",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Layer 3 Routing.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "stacking",
    slug: "stacking",
    name: "Stacking",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Stacking.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "bandwidth-management",
    slug: "bandwidth-management",
    name: "Bandwidth Management",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Bandwidth Management.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "ruckus",
    slug: "ruckus",
    name: "Ruckus",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Ruckus.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "alcatel",
    slug: "alcatel",
    name: "Alcatel",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Alcatel.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "enterprise-lan",
    slug: "enterprise-lan",
    name: "Enterprise LAN",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Enterprise LAN.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "aruba-wireless",
    slug: "aruba-wireless",
    name: "Aruba Wireless",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Aruba Wireless.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "access-point",
    slug: "access-point",
    name: "Access Point",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Access Point.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "isp",
    slug: "isp",
    name: "ISP",
    category: "Enterprise Networking",
    description: "Enterprise implementation of ISP.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "tunneling",
    slug: "tunneling",
    name: "Tunneling",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Tunneling.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "enterprise-routing",
    slug: "enterprise-routing",
    name: "Enterprise Routing",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Enterprise Routing.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "broadband",
    slug: "broadband",
    name: "Broadband",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Broadband.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "wireless-lan",
    slug: "wireless-lan",
    name: "Wireless LAN",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Wireless LAN.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  },
  {
    id: "internet-gateway",
    slug: "internet-gateway",
    name: "Internet Gateway",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Internet Gateway.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: []
  }
];
