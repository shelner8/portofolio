import os
import yaml

content_updates = {
    "pusintek": {
        "summary": "Engineered Software-Defined Networking (SDN) solutions and validated infrastructure resilience using IXIA for a secure government data center.",
        "body": """### Overview
Engineered Software-Defined Networking (SDN) solutions tailored for a secure government data center environment.

### Responsibilities
- Architected multi-tenant VRF separation to ensure strict logical isolation across critical government domains.
- Designed and optimized BGP routing policies for robust inter-tenant communication.
- Validated network performance and infrastructure resilience through rigorous IXIA load testing.

### Technologies
SDN, IXIA, Multi-Tenant VRF, BGP"""
    },
    "kompas-gramedia": {
        "summary": "Architected a scalable Spine-Leaf EVPN-VXLAN fabric utilizing Aruba CX10000 switches and distributed Pensando DPU firewalling.",
        "body": """### Overview
Architected a state-of-the-art Spine-Leaf EVPN-VXLAN fabric designed to provide scalable Layer-2 extension and modern data center segmentation.

### Responsibilities
- Deployed Aruba CX10000 switches at the spine and leaf layers to establish a high-performance network foundation.
- Configured Border Leaf nodes to facilitate secure and efficient external routing.
- Implemented Aruba Fabric Composer (AFC) to centralize data center automation and lifecycle management.
- Integrated Pensando DPUs to enable distributed, localized firewalling directly at the top-of-rack level.

### Technologies
Aruba CX10000, EVPN, VXLAN, Spine-Leaf, Border Leaf, Aruba Fabric Composer, Pensando, OSPF"""
    },
    "gmf-aeroasia": {
        "summary": "Optimized enterprise network operations and configured highly available Aruba VSX core switching infrastructure for an aviation facility.",
        "body": """### Overview
Maintained and optimized enterprise network infrastructure for a major aviation maintenance facility, ensuring high availability and seamless data flow.

### Responsibilities
- Managed complex Layer 2 and Layer 3 enterprise network operations across the campus infrastructure.
- Configured Aruba VSX to provide resilient and highly available core switching infrastructure.
- Designed and optimized OSPF routing to ensure efficient dynamic path selection and rapid network convergence.
- Troubleshot critical network anomalies and applied performance optimizations to sustain operational continuity.

### Technologies
Aruba VSX, OSPF, Enterprise Switching"""
    },
    "mayapada-hospital": {
        "summary": "Delivered a robust and highly available enterprise network architecture to support critical healthcare operations.",
        "body": """### Overview
Delivered a robust and highly available enterprise network architecture to support critical healthcare operations and data communications.

### Responsibilities
- Deployed and configured advanced routing and switching topologies across the hospital campus.
- Validated network reliability to ensure uninterrupted access to medical and administrative systems.

### Technologies
Routing, Switching"""
    },
    "g-town-square": {
        "summary": "Architected a comprehensive campus network integrating a high-speed fiber backbone with pervasive Ruckus wireless coverage.",
        "body": """### Overview
Architected a comprehensive campus network infrastructure, integrating high-speed backbone connectivity with extensive wireless coverage.

### Responsibilities
- Designed the core network infrastructure to support high-density campus environments.
- Deployed a resilient fiber optic backbone for high-bandwidth internal communication.
- Implemented Ruckus wireless solutions to deliver seamless, pervasive Wi-Fi coverage across the premises.
- Configured foundational routing and switching hardware to ensure stable data delivery.

### Technologies
Ruckus, Fiber Backbone, Routing, Switching"""
    },
    "airport-learning-center": {
        "summary": "Engineered and optimized high-density Aruba Wireless enterprise infrastructure for an educational airport facility.",
        "body": """### Overview
Engineered an enterprise-grade wireless network designed to support high-density concurrent connectivity for an educational airport facility.

### Responsibilities
- Deployed Aruba Wireless infrastructure tailored for learning environments.
- Optimized radio frequency (RF) tuning and access point placement to maximize coverage and minimize interference.

### Technologies
Aruba Wireless"""
    },
    "kualanamu-international": {
        "summary": "Modernized critical airport backbone routing via BGP and established centralized monitoring systems using Cacti.",
        "body": """### Overview
Modernized critical airport enterprise routing and established centralized monitoring systems to enhance infrastructure visibility.

### Responsibilities
- Architected the enterprise backbone network to handle large-scale data aggregation.
- Configured BGP routing policies to ensure resilient and optimal ISP connectivity.
- Integrated Cacti network monitoring to provide continuous visibility into traffic patterns and hardware health.

### Technologies
BGP, Cacti"""
    },
    "angkasa-pura-solusi-integra": {
        "summary": "Integrated Alcatel enterprise networking hardware to support reliable corporate communications and infrastructure.",
        "body": """### Overview
Integrated enterprise networking hardware to support reliable corporate communications and data infrastructure.

### Responsibilities
- Deployed and configured Alcatel enterprise networking equipment.
- Validated network topology to ensure secure and efficient inter-departmental connectivity.

### Technologies
Alcatel"""
    },
    "sapphire-plaza-premium": {
        "summary": "Delivered a converged network infrastructure supporting premium VoIP and IPTV services for a high-end airport lounge.",
        "body": """### Overview
Delivered a converged network infrastructure supporting premium multimedia and voice services for a high-end airport lounge.

### Responsibilities
- Integrated reliable VoIP architecture for clear and continuous voice communications.
- Deployed network infrastructure specifically optimized for low-latency IPTV streaming.
- Configured Alcatel networking hardware to serve as the stable foundation for all multimedia services.

### Technologies
VoIP, IPTV, Alcatel"""
    },
    "angkasa-pura-solusi-soekarno-hatta": {
        "summary": "Enhanced enterprise network security via Fortinet perimeters and expanded wireless mobility using Aruba Wireless.",
        "body": """### Overview
Enhanced enterprise network security and expanded wireless mobility across critical airport operational zones.

### Responsibilities
- Deployed Fortinet perimeter security solutions to enforce strict access control and threat mitigation.
- Configured Aruba Wireless access points to provide secure and robust mobility for operational staff.

### Technologies
Fortinet, Aruba Wireless"""
    },
    "airasia-soekarno-hatta": {
        "summary": "Engineered and maintained dedicated Alcatel network infrastructure to facilitate seamless airline operations.",
        "body": """### Overview
Engineered and maintained dedicated network infrastructure to facilitate seamless airline operations within a major international airport.

### Responsibilities
- Implemented Alcatel network infrastructure tailored to airline operational requirements.
- Delivered extensive enterprise networking support and rapid troubleshooting for mission-critical systems.

### Technologies
Alcatel, Enterprise Network"""
    }
}

base_dir = "content/projects"

for project_id, content in content_updates.items():
    file_path = os.path.join(base_dir, project_id, "project.md")
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, "r") as f:
        full_text = f.read()
        
    # Split by '---' to get frontmatter
    parts = full_text.split("---")
    if len(parts) >= 3:
        frontmatter_str = parts[1]
        frontmatter = yaml.safe_load(frontmatter_str)
        
        # Update summary
        frontmatter['summary'] = content['summary']
        
        # Re-dump YAML
        new_frontmatter_str = yaml.dump(frontmatter, sort_keys=False)
        
        # Write back
        with open(file_path, "w") as f:
            f.write("---\n")
            f.write(new_frontmatter_str)
            f.write("---\n\n")
            f.write(content['body'])
            f.write("\n")

print("Project rewrites completed successfully.")
