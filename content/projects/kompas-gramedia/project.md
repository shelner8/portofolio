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
| Role | Platform |
|---|---|
| Core Layer | Aruba CX 8325 (VSX Pair) |
| Border Leaf | Aruba CX 8360-48XT4C (VSX Pair) |
| Leaf Layer | Aruba CX10000 |
| Spine Layer | Aruba CX 8360-12C (Two Standalone Switches) |

#### Network Design
- Spine-Leaf Architecture
- EVPN-VXLAN Fabric
- Aruba Fabric Composer (AFC)

### Network Architecture Summary
The data center network utilizes a high-performance Spine-Leaf topology integrated with an EVPN-VXLAN overlay to enable scalable Layer-2 extension and robust Layer-3 routing. The Core layer is powered by an Aruba CX 8325 VSX pair, while the Spine layer consists of two standalone Aruba CX 8360-12C switches. The Leaf layer utilizes Aruba CX10000 switches. External connectivity is handled by an Aruba CX 8360-48XT4C VSX pair acting as the Border Leaf. Centralized provisioning and automation are handled by Aruba Fabric Composer.

### Security Architecture

#### East-West Traffic
- Cisco Firepower is deployed for east-west security inspection of internal workload communication.
- Aruba Policy-Based Routing (PBR) is implemented to selectively steer workload traffic through the inspection path.

#### North-South Traffic
- External connectivity and entry/exit traffic passes through the Border Leaf switches.
- Cisco Firepower operates in Transparent Mode, providing essential security inspection while preserving existing network addressing and routing architectures.

### Project Scope
- Data Center Fabric Deployment
- EVPN-VXLAN Deployment
- Security Integration
- Validation
- Documentation

### Responsibilities
- Participated in Aruba CX10000 fabric deployment.
- Implemented EVPN-VXLAN networking.
- Configured Aruba Fabric Composer.
- Configured VSX for high availability.
- Configured Border Leaf connectivity.
- Configured Policy-Based Routing (PBR) for traffic steering.
- Integrated Cisco Firepower.
- Performed validation and troubleshooting.
- Assisted with implementation documentation.

### Technologies
- Aruba CX 8325
- Aruba CX 8360-48XT4C
- Aruba CX 8360-12C
- Aruba CX10000
- Aruba Fabric Composer
- EVPN
- VXLAN
- VSX
- OSPF
- Policy-Based Routing (PBR)
- Cisco Firepower
- Spine-Leaf Architecture

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
