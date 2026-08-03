const { execSync } = require('child_process');
const fs = require('fs');

const slugs = [
  'docker', 'ubuntu-server', 'proxmox-ve', 'vmware-esxi', 'mikrotik',
  'eve-ng', 'pnetlab', 'portainer', 'adguard-home', 'nginx-reverse-proxy',
  'zabbix', 'beszel', 'tailscale', 'hermes-ui', 'agent-dvr', '9router'
];

function normalize(str) {
  if (!str) return '';
  return str.replace(/\\"/g, '"')
            .replace(/<\/?p>/g, '')
            .replace(/\\n/g, ' ')
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
}

function extractOldStatic(slug) {
  try {
    const raw = execSync(`git show 82a0941:src/app/technology/${slug}/page.tsx`).toString();
    
    // Extract useCases
    const useCasesMatch = raw.match(/const useCases = \[([\s\S]*?)\];?/);
    let useCases = [];
    if (useCasesMatch) {
      useCases = useCasesMatch[1].split(',')
        .map(s => s.trim().replace(/^"|"$/g, ''))
        .filter(s => s.length > 0);
    }
    
    // Extract integrations
    const intMatch = raw.match(/const integrations = \[([\s\S]*?)\];?/);
    let integrations = [];
    if (intMatch) {
      integrations = intMatch[1].split(',')
        .map(s => s.trim().replace(/^"|"$/g, ''))
        .filter(s => s.length > 0);
    }
    
    // Extract description (Hero)
    const descMatch = raw.match(/<div className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4 flex flex-col gap-4">([\s\S]*?)<\/div>/);
    let description = '';
    if (descMatch) {
      description = descMatch[1];
    }

    // Extract overview
    const overMatch = raw.match(/<div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed">([\s\S]*?)<\/div>/);
    let overview = '';
    if (overMatch) {
      overview = overMatch[1];
    }

    // Extract DeploymentEvidence
    const evMatch = raw.match(/<DeploymentEvidence\s+title="([^"]+)"\s+subtitle="([^"]+)"\s+imagePath="([^"]+)"\s+altText="([^"]+)"\s+caption="([^"]+)"\s*\/>/);
    let deploymentEvidence = null;
    if (evMatch) {
      deploymentEvidence = {
        title: evMatch[1],
        subtitle: evMatch[2],
        imagePath: evMatch[3],
        altText: evMatch[4],
        caption: evMatch[5]
      };
    }

    // Extract Footer Note
    const footerMatch = raw.match(/<p className="text-lg text-accent-blue\/90 leading-relaxed font-medium">([\s\S]*?)<\/p>/);
    let footerNote = '';
    if (footerMatch) {
      footerNote = footerMatch[1].trim();
    }
    
    // Extract Hero Title
    const titleMatch = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    let heroTitle = '';
    if (titleMatch) {
      heroTitle = titleMatch[1].trim();
    }

    return {
      heroTitle: normalize(heroTitle),
      description: normalize(description),
      overview: normalize(overview),
      useCases: useCases.map(normalize),
      deploymentEvidence,
      integrations: integrations.map(normalize),
      footerNote: normalize(footerNote)
    };
  } catch (e) {
    return null;
  }
}

function extractNewData(slug) {
  const content = fs.readFileSync('src/data/technologies.ts', 'utf8');
  
  // Use eval to safely parse the array since it's just an exported array of objects
  const sandbox = `
    const FileText = 'FileText';
    const Database = 'Database';
    const Cloud = 'Cloud';
    const Network = 'Network';
    const Shield = 'Shield';
    const Code = 'Code';
    const Terminal = 'Terminal';
    const Cpu = 'Cpu';
    const Globe = 'Globe';
    const Box = 'Box';
    const Layout = 'Layout';
    const Settings = 'Settings';
    const Tool = 'Tool';
    const Server = 'Server';
    const Lock = 'Lock';
    const Layers = 'Layers';
    const Activity = 'Activity';
    
    const data = ${content.replace(/import.*?['"];?/g, '').replace('export const technologies: Technology[] = ', '')};
    data;
  `;
  try {
    const dataArray = eval(sandbox);
    const tech = dataArray.find(t => t.id === slug);
    if (!tech) return null;
    
    return {
      heroTitle: normalize(tech.name),
      description: normalize(tech.description),
      overview: normalize(tech.overview),
      useCases: (tech.useCases || []).map(normalize),
      deploymentEvidence: tech.deploymentEvidence || null,
      integrations: (tech.integrations || []).map(normalize),
      footerNote: normalize(tech.footerNote)
    };
  } catch (e) {
    console.error("Eval failed: " + e.message);
    return null;
  }
}

function compare() {
  for (const slug of slugs) {
    console.log(`\n--- ${slug.toUpperCase()} ---`);
    const old = extractOldStatic(slug);
    const curr = extractNewData(slug);
    
    if (!old || !curr) {
      console.log('Failed to extract data for comparison.');
      continue;
    }
    
    let differences = 0;
    
    if (old.heroTitle !== curr.heroTitle) {
      console.log(`[Hero Title]`);
      console.log(`OLD:\n${old.heroTitle}`);
      console.log(`NEW:\n${curr.heroTitle}`);
      differences++;
    }
    
    if (old.description !== curr.description) {
      console.log(`[Hero Description]`);
      console.log(`OLD:\n${old.description}`);
      console.log(`NEW:\n${curr.description}`);
      differences++;
    }
    
    if (old.overview !== curr.overview) {
      console.log(`[Overview]`);
      console.log(`OLD:\n${old.overview}`);
      console.log(`NEW:\n${curr.overview}`);
      differences++;
    }
    
    if (old.useCases.join('|') !== curr.useCases.join('|')) {
      console.log(`[Primary Use Cases]`);
      console.log(`OLD:\n${old.useCases.join('\\n')}`);
      console.log(`NEW:\n${curr.useCases.join('\\n')}`);
      differences++;
    }
    
    if (old.integrations.join('|') !== curr.integrations.join('|')) {
      console.log(`[Integrated With]`);
      console.log(`OLD:\n${old.integrations.join('\\n')}`);
      console.log(`NEW:\n${curr.integrations.join('\\n')}`);
      differences++;
    }
    
    if (old.footerNote !== curr.footerNote) {
      console.log(`[Footer Note]`);
      console.log(`OLD:\n${old.footerNote}`);
      console.log(`NEW:\n${curr.footerNote}`);
      differences++;
    }
    
    if (JSON.stringify(old.deploymentEvidence) !== JSON.stringify(curr.deploymentEvidence)) {
      console.log(`[Deployment Evidence]`);
      console.log(`OLD:\n${JSON.stringify(old.deploymentEvidence, null, 2)}`);
      console.log(`NEW:\n${JSON.stringify(curr.deploymentEvidence, null, 2)}`);
      differences++;
    }
    
    if (differences === 0) {
      console.log("No content changes detected.");
    }
  }
}

compare();
