const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('migration_data.json', 'utf8'));
let content = fs.readFileSync('src/data/technologies.ts', 'utf8');

for (const [slug, fields] of Object.entries(data)) {
  // Find the start of the object
  const regexStr = `(id:\\s*"${slug}",[\\s\\S]*?)(  },)`;
  const regex = new RegExp(regexStr);
  
  const match = content.match(regex);
  if (match) {
    let injection = '';
    
    if (fields.overview) {
      injection += `\n    overview: ${JSON.stringify(fields.overview)},`;
    }
    
    if (fields.useCases && fields.useCases.length > 0) {
      injection += `\n    useCases: ${JSON.stringify(fields.useCases)},`;
    }
    
    if (fields.deploymentEvidence) {
      injection += `\n    deploymentEvidence: ${JSON.stringify(fields.deploymentEvidence, null, 2).split('\n').join('\n    ')},`;
    }
    
    if (fields.integrations && fields.integrations.length > 0) {
      injection += `\n    integrations: ${JSON.stringify(fields.integrations)},`;
    }
    
    if (fields.footerNote) {
      injection += `\n    footerNote: ${JSON.stringify(fields.footerNote)},`;
    }
    
    // Inject right before the closing brace
    content = content.replace(regex, `$1${injection}\n$2`);
  } else {
    console.warn(`Could not find entry for slug: ${slug}`);
  }
}

fs.writeFileSync('src/data/technologies.ts', content);
console.log('Data patched successfully!');
