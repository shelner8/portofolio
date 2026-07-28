---
id: kompas-gramedia
title: Kompas Gramedia - Installation Data Center Network
duration: Jan 2025 - Present
category: Enterprise Data Center
environment: Data Center
associatedWith: Mitra Solusi Infokom (MSInfokom)
responsibilities:
- Deploy Spine-Leaf (CX10000)
- Deploy Border Leaf
- Implement Aruba Fabric Composer
- Deploy Pensando CX10000
technologies:
- Aruba CX10000
- EVPN
- VXLAN
- Spine-Leaf
- Border Leaf
- AFC
- Pensando
skills:
- VTEP Design
- OSPF
status: In Progress
featured: true
futureCaseStudy: true
diagrams:
  - fabric
  - security
summary: Architected a scalable Spine-Leaf EVPN-VXLAN fabric utilizing Aruba CX10000
  switches and distributed Pensando DPU firewalling.
---

### Overview
Architected a state-of-the-art Spine-Leaf EVPN-VXLAN fabric designed to provide scalable Layer-2 extension and modern data center segmentation.

### Background
TODO

### Project Objectives
TODO

### Infrastructure Environment

#### Hardware
- Core Layer
  - Aruba CX 8325 (VSX Pair)
- Border Leaf
  - Aruba CX 8360-48XT4C (VSX Pair)
- Leaf Layer
  - Aruba CX10000
- Spine Layer
  - Aruba CX 8360-12C
  - Two Standalone Switches

#### Network Design
- Spine-Leaf Architecture
- EVPN-VXLAN Fabric
- Aruba Fabric Composer (AFC)
- OSPF Underlay
- BGP EVPN Overlay
- VSX High Availability
- Multi-VRF Segmentation

### Network Architecture Summary
The data center network utilizes a high-performance Spine and Leaf topology featuring Core VSX and Border Leaf VSX clusters. The architecture integrates an EVPN-VXLAN overlay with Multi-VRF segmentation to enable scalable Layer-2 and Layer-3 routing, orchestrated via Aruba Fabric Composer (AFC).

```diagram
fabric
```

### Security Architecture

#### East-West Traffic
- Cisco Firepower is deployed for east-west security inspection of internal workload communication.
- Aruba Policy-Based Routing (PBR) is implemented to selectively steer workload traffic through the inspection path.

#### North-South Traffic
- External connectivity and entry/exit traffic passes through the Border Leaf switches.
- Cisco Firepower operates in Transparent Mode, providing essential security inspection while preserving existing network addressing and routing architectures.

```diagram
security
```

### Project Scope
- Data Center Fabric Deployment
- EVPN-VXLAN Deployment
- Security Integration
- Validation
- Documentation

### Responsibilities
- Aruba CX10000 deployment
- EVPN-VXLAN implementation
- VSX configuration
- Aruba Fabric Composer provisioning
- Multi-VRF implementation
- VTEP configuration
- L2VNI implementation
- L3VNI implementation
- Border Leaf integration
- Policy Based Routing (PBR)
- Cisco Firepower integration
- Validation
- Troubleshooting

### Technologies

#### Networking
- Aruba CX 8325
- Aruba CX 8360-48XT4C
- Aruba CX 8360-12C
- Aruba CX10000
- Spine-Leaf Architecture

#### Protocols
- EVPN
- VXLAN
- OSPF

#### Automation
- Aruba Fabric Composer

#### Security
- Policy-Based Routing (PBR)
- Cisco Firepower

#### High Availability
- VSX

#### Segmentation
- Multi-VRF

### Implementation Highlights
- Spine-Leaf deployment
- EVPN-VXLAN implementation
- VSX deployment
- AFC provisioning
- Border Leaf integration
- Firepower integration
- PBR implementation
- Validation testing

### Traffic Flow

#### East-West
Internal workload communication is carried through the EVPN-VXLAN fabric. Traffic requiring security inspection is matched against Aruba Policy-Based Routing (PBR) policies and dynamically steered to the Cisco Firepower appliances for deep packet inspection before returning to the fabric for final delivery.

#### North-South
External traffic enters and exits the fabric via the Border Leaf switches. The traffic transparently passes through Cisco Firepower operating in Transparent Mode, ensuring continuous security inspection at the perimeter without altering the underlying IP routing tables or addressing schemes.

### Challenges
TODO

### Solution
TODO

### Validation
- Connectivity verification
- High Availability verification
- EVPN validation
- VXLAN validation
- Operational testing

### Operational Notes
TODO

### Lessons Learned
TODO

### Future Improvements
TODO
