const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, '../lib');

const indexPath = path.join(srcDir, 'index.ts');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else if (file.endsWith('.ts') && !file.includes("Example")) {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(srcDir);

const __exports = files.map(file => {
    const relativePath = './' + path.relative(srcDir, file).replace(/\\/g, '/').replace(/\.ts$/, '');
    return `export * from '${relativePath}';`;
});

fs.writeFileSync(indexPath, __exports.join('\n'), 'utf-8');
