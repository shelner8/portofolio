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
    keyConcepts: ["Route Type-2", "Route Type-3", "Route Type-5", "Anycast Gateway", "MAC/IP Advertisement", "BUM Replication"],
    useCases: ["VXLAN Fabric", "Multi-Tenant Data Center", "Layer-2 Extension", "Host Mobility"],
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
    keyConcepts: ["VNI", "VTEP", "UDP 4789", "Overlay", "Encapsulation", "Flood & Learn"],
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
    keyConcepts: ["Area 0", "LSA", "SPF", "Cost", "DR/BDR", "Neighbor States"],
    useCases: ["Enterprise Core Routing", "Campus Backbone", "WAN Underlay", "Internal Dynamic Routing"],
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
    keyConcepts: ["ASN", "iBGP", "eBGP", "Route Reflector", "Communities", "Local Preference"],
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
  {
    id: "mc-lag",
    slug: "mc-lag",
    name: "MC-LAG",
    category: "Data Center",
    featured: true,
    description: "Multi-Chassis Link Aggregation enabling active-active dual-homing, link redundancy, and high availability across enterprise data center fabrics.",
    icon: "git-merge"
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
    keyConcepts: ["ISL", "Keepalive", "MC-LAG", "Active Gateway", "Split Brain Protection"],
    useCases: ["Active-Active Core", "Dual-Homing", "High Availability", "Enterprise Data Center"],
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
  },
  
  // --- Self-Hosted & AI Platforms ---
  {
    id: "proxmox-ve",
    slug: "proxmox-ve",
    name: "Proxmox VE",
    category: "Platforms",
    description: "Open-source server virtualization management platform based on KVM and LXC.",
    icon: "server"
  },
  {
    id: "docker",
    slug: "docker",
    name: "Docker",
    category: "Platforms",
    description: "Platform for developing, shipping, and running containerized applications.",
    icon: "box"
  },
  {
    id: "docker-compose",
    slug: "docker-compose",
    name: "Docker Compose",
    category: "Platforms",
    description: "Tool for defining and running multi-container Docker applications.",
    icon: "box"
  },
  {
    id: "portainer",
    slug: "portainer",
    name: "Portainer",
    category: "Platforms",
    description: "Universal container management platform for deploying and managing Docker environments.",
    icon: "box"
  },
  {
    id: "ubuntu-server",
    slug: "ubuntu-server",
    name: "Ubuntu Server",
    category: "Platforms",
    description: "Enterprise open-source Linux operating system powering self-hosted infrastructure.",
    icon: "server"
  },
  {
    id: "ollama",
    slug: "ollama",
    name: "Ollama",
    category: "Platforms",
    description: "Framework for running, managing, and interacting with large language models locally.",
    icon: "cpu"
  },
  {
    id: "hermes-ui",
    slug: "hermes-ui",
    name: "Hermes UI",
    category: "Platforms",
    description: "Self-hosted Web UI platform for conversational interactions with local LLMs.",
    icon: "layout"
  },
  {
    id: "9router",
    slug: "9router",
    name: "9Router",
    category: "Platforms",
    description: "Local AI routing service for distributing requests to self-hosted models.",
    icon: "network"
  },
  {
    id: "gemini-api",
    slug: "gemini-api",
    name: "Gemini API",
    category: "Platforms",
    description: "Integration with Google's advanced language model API for infrastructure documentation.",
    icon: "cpu"
  },
  {
    id: "adguard-home",
    slug: "adguard-home",
    name: "AdGuard Home",
    category: "Platforms",
    description: "Network-wide software for blocking ads and tracking acting as an enterprise DNS server.",
    icon: "shield"
  },
  {
    id: "nginx-reverse-proxy",
    slug: "nginx-reverse-proxy",
    name: "Nginx Reverse Proxy",
    category: "Platforms",
    description: "High-performance reverse proxy for internal routing and local domain resolution.",
    icon: "server"
  },
  {
    id: "agent-dvr",
    slug: "agent-dvr",
    name: "Agent DVR CCTV",
    category: "Platforms",
    description: "Advanced video surveillance and CCTV recording platform.",
    icon: "server"
  },
  {
    id: "site-to-site-vpn",
    slug: "site-to-site-vpn",
    name: "Site-to-Site VPN",
    category: "Connectivity",
    description: "Encrypted point-to-point tunnels securely bridging remote private networks.",
    icon: "lock"
  },
  {
    id: "beszel",
    slug: "beszel",
    name: "Beszel",
    category: "Monitoring",
    description: "Lightweight, modern dashboard for monitoring server metrics and Docker containers.",
    icon: "activity"
  },
  {
    id: "snmp",
    slug: "snmp",
    name: "SNMP",
    category: "Monitoring",
    description: "Simple Network Management Protocol for collecting hardware telemetry from enterprise devices.",
    icon: "activity"
  },
  {
    id: "linux-monitoring",
    slug: "linux-monitoring",
    name: "Linux Monitoring",
    category: "Monitoring",
    description: "Comprehensive telemetry and health monitoring for Linux-based servers.",
    icon: "activity"
  },
  {
    id: "eve-ng",
    slug: "eve-ng",
    name: "EVE-NG",
    category: "Platforms",
    description: "Emulated Virtual Environment Next Generation for simulating complex network topologies.",
    icon: "network"
  },
  {
    id: "pnetlab",
    slug: "pnetlab",
    name: "PNETLab",
    category: "Platforms",
    description: "Network simulation and emulation platform for testing data center topologies.",
    icon: "network"
  }
];
