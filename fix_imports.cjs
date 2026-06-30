const fs = require('fs');
const files = [
  './src/pages/AiSolutions.jsx',
  './src/pages/Manufacturing.jsx',
  './src/pages/RenewableEnergy.jsx',
  './src/pages/Defense.jsx',
  './src/pages/SmartHospitals.jsx',
  './src/pages/Customization.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import PageBreadcrumb')) {
    content = "import PageBreadcrumb from '../components/PageBreadcrumb';\n" + content;
    fs.writeFileSync(file, content, 'utf8');
    console.log("Fixed import in", file);
  }
});
