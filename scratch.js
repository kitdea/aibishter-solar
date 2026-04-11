const fs = require('fs');
const path = require('path');

const dirPaths = [
  path.join(__dirname, 'src/app'),
  path.join(__dirname, 'src/components')
];

const replacements = {
  'bg-slate-50': 'bg-slate-50 dark:bg-slate-950',
  'bg-white': 'bg-white dark:bg-slate-800',
  'bg-slate-100': 'bg-slate-100 dark:bg-slate-900',
  'text-slate-900': 'text-slate-900 dark:text-white',
  'text-slate-800': 'text-slate-800 dark:text-slate-200',
  'text-slate-700': 'text-slate-700 dark:text-slate-300',
  'text-slate-600': 'text-slate-600 dark:text-slate-400',
  'text-slate-500': 'text-slate-500 dark:text-slate-400',
  'text-slate-400': 'text-slate-400 dark:text-slate-500',
  'border-slate-100': 'border-slate-100 dark:border-slate-800',
  'border-slate-200': 'border-slate-200 dark:border-slate-700',
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const [key, val] of Object.entries(replacements)) {
        // Regex to find literal class name, ensuring it's not already followed by dark variant.
        // Negative lookahead to ensure we don't replace if it's already followed by ` dark:`
        // e.g. `bg-white dark:bg-slate-800`
        const regex = new RegExp(`\\b${key}\\b(?!\\s*dark:[a-zA-Z0-9/-]+)`, 'g');
        const matches = content.match(regex);
        if (matches) {
          content = content.replace(regex, val);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Modified', fullPath);
      }
    }
  }
}

dirPaths.forEach(processDir);
