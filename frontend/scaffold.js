
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'folder-structure.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const appRoot = path.join(__dirname, 'app');

function createDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function createFile(filePath, content = '') {
    const dirname = path.dirname(filePath);
    createDirectory(dirname);
    fs.writeFileSync(filePath, content);
    console.log(`Created/Updated file: ${filePath}`);
}

function sanitizeComponentName(name) {
    let sanitized = name.replace(/[^a-zA-Z0-9]/g, '_');
    if (!sanitized) sanitized = 'Component';
    if (/^\d/.test(sanitized)) {
        sanitized = 'Page' + sanitized;
    }
    return sanitized;
}

function getPageContent(name, description) {
    const componentName = sanitizeComponentName(name) + '_Page';
    return `export default function ${componentName}() {
  return (
    <div>
      <h1>${description}</h1>
    </div>
  );
}
`;
}

function getLayoutContent(name, description) {
    const componentName = sanitizeComponentName(name) + '_Layout';
    return `export default function ${componentName}({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Layout: ${description} */}
      {children}
    </div>
  );
}
`;
}

function traverse(node, currentPath, keyName = '') {
    if (typeof node === 'string') return;

    for (const key in node) {
        if (key === 'description') continue;

        const child = node[key];

        if (key === 'layout' && typeof child === 'string') {
            // Cleanup junk if exists
            const junkPath = path.join(currentPath, 'layout');
            if (fs.existsSync(junkPath) && fs.lstatSync(junkPath).isFile()) {
                fs.unlinkSync(junkPath);
                console.log(`Removed junk file: ${junkPath}`);
            }

            const layoutPath = path.join(currentPath, 'layout.tsx');
            if (!fs.existsSync(layoutPath)) {
                createFile(layoutPath, getLayoutContent(currentPath.split(path.sep).pop(), child));
            }
            continue;
        }

        if (key === 'routeGroups' || key === 'pages') {
            traverse(child, currentPath);
        } else {
            if (typeof child === 'string') {
                const filePath = path.join(currentPath, key);
                const description = child;

                if (key.endsWith('layout.tsx')) {
                    createFile(filePath, getLayoutContent(currentPath.split(path.sep).pop(), description));
                    continue;
                }

                if (key.endsWith('page.tsx')) {
                    createFile(filePath, getPageContent(currentPath.split(path.sep).pop(), description));
                } else if (key.endsWith('.tsx') || key.endsWith('.ts')) {
                    const compName = sanitizeComponentName(key.replace('.tsx', '').replace('.ts', ''));
                    createFile(filePath, `export default function ${compName}() { return <div>${description}</div>; }`);
                } else if (key.endsWith('.css')) {
                    if (key === 'globals.css' && fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8').length > 50) {
                        // skip
                    } else {
                        createFile(filePath, `/* ${description} */`);
                    }
                } else {
                    createFile(filePath, `// ${description}`);
                }
            } else {
                if (key === 'layout') {
                } else {
                    const newPath = path.join(currentPath, key);
                    createDirectory(newPath);
                    traverse(child, newPath, key);
                }
            }
        }
    }
}

const appConfig = config.root.app;
try {
    traverse(appConfig, appRoot);
    console.log('Sanitized component names applied.');
} catch (e) {
    console.error(e);
}
