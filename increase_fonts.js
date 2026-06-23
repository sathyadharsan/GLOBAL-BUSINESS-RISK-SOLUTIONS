const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        let pending = list.length;
        if (!pending) return callback(null);
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        if (!--pending) callback(null);
                    });
                } else {
                    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                        processFile(file);
                    }
                    if (!--pending) callback(null);
                }
            });
        });
    });
}

function processFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace text-sm with text-base
    content = content.replace(/\btext-sm\b/g, 'text-base');
    // Replace text-xs with text-sm
    content = content.replace(/\btext-xs\b/g, 'text-sm');
    // Replace small custom sizes
    content = content.replace(/\btext-\[10px\]\b/g, 'text-xs');
    content = content.replace(/\btext-\[11px\]\b/g, 'text-sm');
    content = content.replace(/\btext-\[12px\]\b/g, 'text-sm');
    content = content.replace(/\btext-\[13px\]\b/g, 'text-base');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}

walk(path.join(__dirname, 'src'), function(err) {
    if (err) throw err;
    console.log('Done replacing fonts.');
});
