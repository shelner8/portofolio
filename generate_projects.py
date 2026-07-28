import os
import json

projects = [
    {
        "id": "pusintek",
        "title": "Data Center Pusat Sistem Informasi dan Teknologi Keuangan (PUSINTEK) Kementerian Keuangan",
        "duration": "Jan 2025 - Present",
        "category": "Enterprise Data Center",
        "environment": "Government Data Center",
        "technologies": ["SDN", "IXIA"],
        "skills": ["Multi-Tenant VRF", "BGP"],
        "status": "In Progress",
        "featured": True,
        "futureCaseStudy": True,
        "summary": "Implementation of SDN and network testing using IXIA in a Government Data Center."
    },
    {
        "id": "kompas-gramedia",
        "title": "Kompas Gramedia - Installation Data Center Network",
        "duration": "Jan 2025 - Present",
        "category": "Enterprise Data Center",
        "environment": "Data Center",
        "associatedWith": "Mitra Solusi Infokom (MSInfokom)",
        "responsibilities": ["Deploy Spine-Leaf (CX10000)", "Deploy Border Leaf", "Implement Aruba Fabric Composer", "Deploy Pensando CX10000"],
        "technologies": ["Aruba CX10000", "EVPN", "VXLAN", "Spine-Leaf", "Border Leaf", "AFC", "Pensando"],
        "skills": ["VTEP Design", "OSPF"],
        "status": "In Progress",
        "featured": True,
        "futureCaseStudy": True,
        "summary": "Designed and deployed a state-of-the-art Spine-Leaf EVPN-VXLAN architecture using Aruba CX10000 and Pensando DPU for localized firewalling."
    },
    {
        "id": "gmf-aeroasia",
        "title": "GMF AeroAsia - Soekarno Hatta International Airport",
        "duration": "Jul 2024 - Apr 2025",
        "category": "Airport Enterprise Network",
        "responsibilities": ["Enterprise L2/L3 Operations", "VSX Core", "OSPF", "Troubleshooting", "Performance Optimization"],
        "technologies": ["Aruba VSX", "OSPF", "Enterprise Switching"],
        "status": "Completed",
        "featured": True,
        "futureCaseStudy": True,
        "summary": "Managed enterprise Layer 2 and Layer 3 operations and Aruba VSX Core routing optimizations for GMF AeroAsia."
    },
    {
        "id": "mayapada-hospital",
        "title": "Implementing Network Mayapada Hospital",
        "duration": "Apr 2024 - Jun 2024",
        "category": "Enterprise Network",
        "technologies": ["Routing", "Switching"],
        "status": "Completed",
        "featured": True,
        "futureCaseStudy": False,
        "summary": "Implemented highly available enterprise networking infrastructure for Mayapada Hospital."
    },
    {
        "id": "g-town-square",
        "title": "G-Town Square Serpong",
        "duration": "Apr 2023 - Sep 2023",
        "category": "Campus Network",
        "responsibilities": ["Network Infrastructure Design", "Fiber Backbone", "Ruckus Wireless", "Implementation"],
        "technologies": ["Ruckus", "Fiber Backbone", "Routing", "Switching"],
        "status": "Completed",
        "featured": True,
        "futureCaseStudy": False,
        "summary": "Designed and implemented campus network infrastructure including fiber backbone and Ruckus wireless deployments."
    },
    {
        "id": "airport-learning-center",
        "title": "Airport Learning Center Soekarno Hatta",
        "duration": "May 2023 - Jul 2023",
        "category": "Enterprise Wireless",
        "technologies": ["Aruba Wireless"],
        "status": "Completed",
        "featured": True,
        "futureCaseStudy": False,
        "summary": "Deployed and optimized Aruba Wireless enterprise infrastructure for the Airport Learning Center."
    },
    {
        "id": "kualanamu-international",
        "title": "Kualanamu International Airport",
        "duration": "Mar 2023 - Apr 2023",
        "category": "Airport Network",
        "responsibilities": ["Enterprise Backbone", "BGP", "ISP Connectivity", "Network Monitoring"],
        "technologies": ["BGP", "Cacti"],
        "status": "Completed",
        "featured": False,
        "futureCaseStudy": False,
        "summary": "Configured enterprise backbone routing with BGP and established comprehensive network monitoring."
    },
    {
        "id": "angkasa-pura-solusi-integra",
        "title": "PT Angkasa Pura Solusi Integra",
        "duration": "Feb 2023 - Mar 2023",
        "category": "Enterprise Network",
        "technologies": ["Alcatel"],
        "status": "Completed",
        "featured": False,
        "futureCaseStudy": False,
        "summary": "Deployed Alcatel enterprise networking solutions across corporate infrastructure."
    },
    {
        "id": "sapphire-plaza-premium",
        "title": "Sapphire Plaza Premium Lounge Soekarno Hatta",
        "duration": "Jan 2023 - Feb 2023",
        "category": "Airport Network",
        "technologies": ["VoIP", "IPTV", "Alcatel"],
        "status": "Completed",
        "featured": False,
        "futureCaseStudy": False,
        "summary": "Integrated complex VoIP, IPTV and Alcatel networking solutions for premium lounge operations."
    },
    {
        "id": "angkasa-pura-solusi-soekarno-hatta",
        "title": "PT Angkasa Pura Solusi Soekarno-Hatta",
        "duration": "Dec 2022 - Jan 2023",
        "category": "Enterprise Network",
        "technologies": ["Fortinet", "Aruba Wireless"],
        "status": "Completed",
        "featured": False,
        "futureCaseStudy": False,
        "summary": "Implemented Fortinet perimeter security and Aruba Wireless connectivity for enterprise operations."
    },
    {
        "id": "airasia-soekarno-hatta",
        "title": "AirAsia Soekarno Hatta International Airport",
        "duration": "Aug 2022 - Nov 2022",
        "category": "Airport Network",
        "technologies": ["Alcatel", "Enterprise Network"],
        "status": "Completed",
        "featured": False,
        "futureCaseStudy": False,
        "summary": "Provided extensive airport networking support and Alcatel infrastructure implementations for AirAsia."
    }
]

def to_yaml(data):
    lines = []
    for k, v in data.items():
        if isinstance(v, list):
            lines.append(f"{k}:")
            for item in v:
                lines.append(f"  - '{item}'")
        elif isinstance(v, bool):
            lines.append(f"{k}: {'true' if v else 'false'}")
        else:
            lines.append(f"{k}: '{v}'")
    return "\n".join(lines)

for p in projects:
    d = "content/projects/" + p["id"]
    os.makedirs(d, exist_ok=True)
    with open(d + "/project.md", "w") as f:
        f.write("---\n")
        f.write(to_yaml(p))
        f.write("\n---\n")
        f.write("\nDetailed case study content will be published here in the future.\n")

print("Created 11 project folders successfully.")
