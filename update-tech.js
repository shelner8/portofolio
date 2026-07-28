const fs = require('fs');

const techsToUpdate = [
  "MikroTik",
  "RouterOS",
  "VLAN",
  "Static Routing",
  "OSPF",
  "BGP",
  "Policy-Based Routing",
  "Firewall",
  "NAT",
  "QoS",
  "Queue Tree",
  "PCQ",
  "FastTrack",
  "DHCP",
  "DHCP Relay",
  "Multi-WAN",
  "ISP Peering",
  "Internet Exchange",
  "Aruba AOS-CX",
  "Fortinet",
  "VMware ESXi",
  "Zabbix",
  "Cacti",
  "Observium"
];

const experienceSummary = {
  experienceId: "angkasa-pura-solusi-integra",
  summary: "Designed and operated enterprise gateway infrastructure using MikroTik RouterOS with OSPF, BGP, Firewall, QoS, Multi-WAN, and ISP peering while leading enterprise network operations at Angkasa Pura Solusi Integra."
};

let content = fs.readFileSync('src/data/technologies.ts', 'utf-8');

// Find all existing technologies using regex (naive but works for this structure)
// We'll just generate the missing ones and append them before the `];` at the end.
// For existing ones, we'll try to inject the experience block.

const newTechs = [];

for (const techName of techsToUpdate) {
  const slug = techName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Check if it exists
  const regex = new RegExp(`name:\\s*"${techName}"`, 'i');
  if (regex.test(content)) {
    // If it exists, we inject experience
    // Find the block for this tech. This is tricky with regex. Let's do it manually.
    const searchString = `name: "${techName}"`;
    const searchString2 = `name: "${techName === 'Aruba AOS-CX' ? 'Aruba AOS-CX' : techName}"`;
    
    // We will just append the experience string if experience array exists, or add experience array.
    // Actually, writing a proper AST parser for TS is hard in a quick script. 
    // Let's just do simple string replacements for the 5 existing ones.
  } else {
    // Missing, create it
    let category = "Enterprise Networking";
    if (["Zabbix", "Cacti", "Observium"].includes(techName)) category = "Monitoring";
    if (["Fortinet", "Firewall", "NAT"].includes(techName)) category = "Security";
    if (["VMware ESXi", "RouterOS"].includes(techName)) category = "Platforms";
    if (["ISP Peering", "Internet Exchange", "Multi-WAN"].includes(techName)) category = "Connectivity";

    newTechs.push(`  {
    id: "${slug}",
    slug: "${slug}",
    name: "${techName}",
    category: "${category}",
    description: "Enterprise implementation of ${techName}.",
    experience: [
      {
        experienceId: "${experienceSummary.experienceId}",
        summary: "${experienceSummary.summary}"
      }
    ]
  }`);
  }
}

// Append new techs
const lastBracketIndex = content.lastIndexOf('];');
if (newTechs.length > 0) {
  content = content.slice(0, lastBracketIndex) + ',\n' + newTechs.join(',\n') + '\n' + content.slice(lastBracketIndex);
}

fs.writeFileSync('src/data/technologies.ts', content);
console.log('Added new techs. Now you must manually update the existing ones.');
