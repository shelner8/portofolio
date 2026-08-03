const { execSync } = require('child_process');
const fs = require('fs');

const slugs = [
  'docker', 'ubuntu-server', 'proxmox-ve', 'vmware-esxi', 'mikrotik',
  'eve-ng', 'pnetlab', 'portainer', 'adguard-home', 'nginx-reverse-proxy',
  'zabbix', 'beszel', 'tailscale', 'hermes-ui', 'agent-dvr', '9router'
];

function extractOldDescription(slug) {
  try {
    const raw = execSync(`git show 82a0941:src/app/technology/${slug}/page.tsx`).toString();
    const descMatch = raw.match(/<div className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4 flex flex-col gap-4">([\s\S]*?)<\/div>/);
    if (descMatch) {
      return descMatch[1]
        .split('\n')
        .map(s => s.trim().replace(/<\/?p>/g, ''))
        .filter(s => s.length > 0)
        .join('\\n\\n'); // use literal \n\n for the JS output
    }
  } catch (e) {}
  return null;
}

let content = fs.readFileSync('src/data/technologies.ts', 'utf8');

for (const slug of slugs) {
  const oldDesc = extractOldDescription(slug);
  if (oldDesc) {
    // Find the description line inside the slug's object
    // using a more targeted regex: id: "slug", ... description: "...",
    const regex = new RegExp(`(id:\\s*"${slug}",[\\s\\S]*?description:\\s*)"([^"]+)"`);
    content = content.replace(regex, `$1"${oldDesc}"`);
  }
}

fs.writeFileSync('src/data/technologies.ts', content);
console.log('Descriptions fixed.');
