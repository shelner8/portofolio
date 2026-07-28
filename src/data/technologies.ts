import { Technology } from "@/types";

export const technologies: Technology[] = [
  // --- Data Center ---
  {
    id: "vxlan-evpn-fabric",
    slug: "vxlan-evpn-fabric",
    name: "VXLAN EVPN Fabric",
    category: "Data Center",
    featured: true,
    description: "Enterprise spine-leaf fabric architecture combining EVPN control-plane and VXLAN overlay networking for scalable modern data center deployments.",
    icon: "layers"
  },
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
    icon: "network"
  },
  {
    id: "vxlan",
    slug: "vxlan",
    name: "VXLAN",
    category: "Data Center",
    featured: true,
    description: "Layer 2 overlay scheme over a Layer 3 network, offering scalable multi-tenancy.",
    icon: "layers"
  },
  {
    id: "mp-bgp",
    slug: "mp-bgp",
    name: "MP-BGP",
    category: "Data Center",
    featured: true,
    description: "Multiprotocol BGP used to distribute MAC and IP reachability information.",
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
    icon: "globe"
  },
  {
    id: "anycast-gateway",
    slug: "anycast-gateway",
    name: "Anycast Gateway",
    category: "Data Center",
    description: "Distributed default gateway architecture providing optimal first-hop routing.",
    icon: "milestone"
  },
  {
    id: "vrf",
    slug: "vrf",
    name: "VRF",
    category: "Data Center",
    featured: true,
    description: "Virtual Routing and Forwarding enables multiple routing tables for multi-tenancy.",
    icon: "box"
  },
  {
    id: "spine-leaf",
    slug: "spine-leaf",
    name: "Spine-Leaf",
    category: "Data Center",
    description: "Two-tier network topology offering non-blocking, predictable east-west traffic flow.",
    icon: "git-merge"
  },
  {
    id: "leaf-switch",
    slug: "leaf-switch",
    name: "Leaf Switch",
    category: "Data Center",
    description: "Access-layer switch in a Clos architecture providing endpoint connectivity.",
    icon: "server"
  },
  {
    id: "border-leaf",
    slug: "border-leaf",
    name: "Border Leaf",
    category: "Data Center",
    description: "Gateway switches bridging the internal fabric to external networks and services.",
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
    icon: "copy"
  },
  {
    id: "aruba-vsf",
    slug: "aruba-vsf",
    name: "Aruba VSF",
    category: "Aruba",
    description: "Virtual Switching Framework combines multiple switches into a single logical device.",
    icon: "link"
  },
  {
    id: "aruba-cx10000",
    slug: "aruba-cx10000",
    name: "Aruba CX10000",
    category: "Aruba",
    featured: true,
    description: "Distributed services switch powered by Pensando DPU for stateful inspection.",
    icon: "server"
  },

  // --- Automation ---
  {
    id: "aruba-fabric-composer",
    slug: "aruba-fabric-composer",
    name: "Aruba Fabric Composer",
    category: "Automation",
    featured: true,
    description: "Automation platform for Aruba CX Data Center lifecycle management, configuration orchestration, and fabric provisioning.",
    icon: "cpu"
  },

  // --- Enterprise Networking ---
  {
    id: "vlan",
    slug: "vlan",
    name: "VLAN",
    category: "Enterprise Networking",
    description: "Virtual Local Area Network enabling Layer 2 segmentation.",
    icon: "layers"
  },
  {
    id: "lacp",
    slug: "lacp",
    name: "LACP",
    category: "Enterprise Networking",
    description: "Link Aggregation Control Protocol providing dynamic bandwidth bundling and redundancy.",
    icon: "git-commit"
  },
  {
    id: "stp",
    slug: "stp",
    name: "STP",
    category: "Enterprise Networking",
    description: "Spanning Tree Protocol preventing Layer 2 loops.",
    icon: "git-pull-request"
  },
  {
    id: "static-routing",
    slug: "static-routing",
    name: "Static Routing",
    category: "Enterprise Networking",
    description: "Manual configuration of network routes for deterministic traffic flow.",
    icon: "route"
  },
  {
    id: "policy-based-routing",
    slug: "policy-based-routing",
    name: "Policy-Based Routing",
    category: "Enterprise Networking",
    description: "Forwarding and routing data packets based on defined policies rather than strictly destination IP.",
    icon: "route"
  },
  {
    id: "qos",
    slug: "qos",
    name: "QoS",
    category: "Enterprise Networking",
    description: "Quality of Service strategies for bandwidth management and traffic prioritization.",
    icon: "layers"
  },
  {
    id: "queue-tree",
    slug: "queue-tree",
    name: "Queue Tree",
    category: "Enterprise Networking",
    description: "Hierarchical bandwidth management and traffic shaping mechanism.",
    icon: "layers"
  },
  {
    id: "pcq",
    slug: "pcq",
    name: "PCQ",
    category: "Enterprise Networking",
    description: "Per Connection Queue for dynamic and equitable bandwidth allocation.",
    icon: "layers"
  },
  {
    id: "dhcp",
    slug: "dhcp",
    name: "DHCP",
    category: "Enterprise Networking",
    description: "Dynamic Host Configuration Protocol for automated IP assignment.",
    icon: "network"
  },
  {
    id: "dhcp-relay",
    slug: "dhcp-relay",
    name: "DHCP Relay",
    category: "Enterprise Networking",
    description: "Forwarding DHCP packets between clients and servers on different subnets.",
    icon: "share-2"
  },
  {
    id: "ruckus",
    slug: "ruckus",
    name: "Ruckus",
    category: "Enterprise Networking",
    description: "Enterprise wireless LAN infrastructure deployment and optimization.",
    icon: "wifi"
  },
  {
    id: "alcatel",
    slug: "alcatel",
    name: "Alcatel",
    category: "Enterprise Networking",
    description: "Enterprise switching integration for LAN architectures.",
    icon: "server"
  },
  {
    id: "aruba-wireless",
    slug: "aruba-wireless",
    name: "Aruba Wireless",
    category: "Enterprise Networking",
    description: "Enterprise implementation of Aruba Wireless infrastructure.",
    icon: "wifi"
  },
  {
    id: "isp",
    slug: "isp",
    name: "ISP",
    category: "Enterprise Networking",
    description: "Internet Service Provider circuit integration and gateway management.",
    icon: "globe"
  },
  {
    id: "tunneling",
    slug: "tunneling",
    name: "Tunneling",
    category: "Enterprise Networking",
    description: "Site-to-site network tunneling for secure remote interconnectivity.",
    icon: "network"
  },
  {
    id: "enterprise-routing",
    slug: "enterprise-routing",
    name: "Enterprise Routing",
    category: "Enterprise Networking",
    description: "Design and deployment of highly available enterprise routing architectures.",
    icon: "route"
  },
  {
    id: "internet-gateway",
    slug: "internet-gateway",
    name: "Internet Gateway",
    category: "Enterprise Networking",
    description: "Production gateway deployment securing and routing enterprise internet traffic.",
    icon: "globe"
  },

  // MikroTik Enhancements (Enterprise Networking)
  {
    id: "nat",
    slug: "nat",
    name: "NAT",
    category: "Enterprise Networking",
    description: "Enterprise gateway deployment and Network Address Translation for production network operations.",
    icon: "share-2"
  },
  {
    id: "firewall-filter",
    slug: "firewall-filter",
    name: "Firewall Filter",
    category: "Enterprise Networking",
    description: "Access control and security policies for enterprise gateway deployments.",
    icon: "shield"
  },
  {
    id: "mangle",
    slug: "mangle",
    name: "Mangle",
    category: "Enterprise Networking",
    description: "Advanced packet marking and routing policies for enterprise bandwidth management.",
    icon: "layers"
  },
  {
    id: "fasttrack",
    slug: "fasttrack",
    name: "FastTrack",
    category: "Enterprise Networking",
    description: "Traffic acceleration technique for optimizing enterprise gateway performance.",
    icon: "maximize"
  },

  // --- Connectivity ---
  {
    id: "tailscale",
    slug: "tailscale",
    name: "Tailscale",
    category: "Connectivity",
    description: "Zero-config VPN utilizing WireGuard for peer-to-peer mesh connectivity.",
    icon: "network"
  },
  {
    id: "multi-wan",
    slug: "multi-wan",
    name: "Multi-WAN",
    category: "Connectivity",
    description: "Redundant wide area network connectivity for enterprise reliability.",
    icon: "network"
  },
  {
    id: "isp-peering",
    slug: "isp-peering",
    name: "ISP Peering",
    category: "Connectivity",
    description: "BGP peering implementation with Internet Service Providers.",
    icon: "globe"
  },
  {
    id: "ix-iix-peering",
    slug: "ix-iix-peering",
    name: "IX & IIX Peering",
    category: "Connectivity",
    description: "Internet Exchange connectivity using public IX infrastructure and BGP peering.",
    icon: "globe"
  },

  // --- Platforms ---
  {
    id: "mikrotik",
    slug: "mikrotik",
    name: "MikroTik",
    category: "Platforms",
    featured: true,
    description: "Enterprise hardware platform providing robust routing, switching, and gateway capabilities.",
    icon: "server"
  },
  {
    id: "vmware-esxi",
    slug: "vmware-esxi",
    name: "VMware ESXi",
    category: "Platforms",
    description: "Enterprise bare-metal hypervisor for compute virtualization and data center workloads.",
    icon: "server"
  },

  // --- Monitoring ---
  {
    id: "zabbix",
    slug: "zabbix",
    name: "Zabbix",
    category: "Monitoring",
    description: "Enterprise-class open source distributed monitoring solution.",
    icon: "network"
  },
  {
    id: "cacti",
    slug: "cacti",
    name: "Cacti",
    category: "Monitoring",
    description: "Network graphing solution leveraging RRDTool for telemetry visualization.",
    icon: "network"
  },
  {
    id: "observium",
    slug: "observium",
    name: "Observium",
    category: "Monitoring",
    description: "Auto-discovering network monitoring platform tailored for broad device support.",
    icon: "network"
  }
];
