import { Technology } from "@/types";

export const technologies: Technology[] = [
  // --- Data Center ---
  {
    id: "evpn",
    slug: "evpn",
    name: "EVPN",
    category: "Data Center",
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
    description: "Link-state routing protocol for robust underlay connectivity.",
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
    description: "Core routing protocol used for both internet and data center IP fabrics.",
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
    description: "Modern microservices-based, database-driven operating system for enterprise switching.",
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
    category: "Security",
    description: "Next-generation firewall platform providing deep packet inspection.",
    relatedProjects: ["kompas-gramedia"],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: ["border-leaf"],
    icon: "shield"
  },
  {
    id: "palo-alto",
    slug: "palo-alto",
    name: "Palo Alto",
    category: "Security",
    description: "Enterprise next-generation firewalls focusing on zero-trust and application security.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: [],
    icon: "lock"
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
    description: "RouterOS platform providing cost-effective routing and switching capabilities.",
    relatedProjects: [],
    relatedArticles: [],
    relatedCertifications: [],
    relatedTechnologies: [],
    icon: "server"
  }
];
