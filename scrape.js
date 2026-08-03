const fs = require('fs');
const path = require('path');

const techDir = 'src/app/technology';
const folders = fs.readdirSync(techDir).filter(f => fs.statSync(path.join(techDir, f)).isDirectory() && f !== '[slug]');

const data = {};

folders.forEach(folder => {
  const pagePath = path.join(techDir, folder, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;
  
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Extract useCases
  const useCasesMatch = content.match(/const useCases = \[([\s\S]*?)\];?/);
  let useCases = [];
  if (useCasesMatch) {
    useCases = useCasesMatch[1].split(',')
      .map(s => s.trim().replace(/^"|"$/g, ''))
      .filter(s => s.length > 0);
  }
  
  // Extract integrations
  const intMatch = content.match(/const integrations = \[([\s\S]*?)\];?/);
  let integrations = [];
  if (intMatch) {
    integrations = intMatch[1].split(',')
      .map(s => s.trim().replace(/^"|"$/g, ''))
      .filter(s => s.length > 0);
  }
  
  // Extract description (Hero)
  const descMatch = content.match(/<div className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4 flex flex-col gap-4">([\s\S]*?)<\/div>/);
  let description = '';
  if (descMatch) {
    description = descMatch[1].trim()
      .split('\n')
      .map(s => s.trim().replace(/<\/?p>/g, ''))
      .filter(s => s.length > 0)
      .join('\n\n');
  }

  // Extract overview
  const overMatch = content.match(/<div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed">([\s\S]*?)<\/div>/);
  let overview = '';
  if (overMatch) {
    overview = overMatch[1].trim()
      .split('\n')
      .map(s => s.trim().replace(/<\/?p>/g, ''))
      .filter(s => s.length > 0)
      .join('\n\n');
  }

  // Extract DeploymentEvidence
  const evMatch = content.match(/<DeploymentEvidence\s+title="([^"]+)"\s+subtitle="([^"]+)"\s+imagePath="([^"]+)"\s+altText="([^"]+)"\s+caption="([^"]+)"\s*\/>/);
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
  const footerMatch = content.match(/<p className="text-lg text-accent-blue\/90 leading-relaxed font-medium">([\s\S]*?)<\/p>/);
  let footerNote = '';
  if (footerMatch) {
    footerNote = footerMatch[1].trim();
  }

  data[folder] = {
    useCases,
    integrations,
    description,
    overview,
    deploymentEvidence,
    footerNote
  };
});

fs.writeFileSync('migration_data.json', JSON.stringify(data, null, 2));
console.log('Migration data extracted to migration_data.json');
