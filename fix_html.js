const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix z-index
html = html.replace('z-index: 1;\r\n    }\r\n\r\n    .hero .container', 'z-index: 2;\r\n    }\r\n\r\n    .hero .container');
html = html.replace('z-index: 1;\n    }\n\n    .hero .container', 'z-index: 2;\n    }\n\n    .hero .container');

html = html.replace('z-index: 2;\r\n      background: radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(4, 11, 20, 0.5) 100%) !important;', 'z-index: 1;\r\n      background: radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(4, 11, 20, 0.3) 100%) !important;');
html = html.replace('z-index: 2;\n      background: radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(4, 11, 20, 0.5) 100%) !important;', 'z-index: 1;\n      background: radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(4, 11, 20, 0.3) 100%) !important;');

// Replace script
const startTag = '<!-- Particle Animation -->';
const endTag = '})();';
const startIdx = html.indexOf(startTag);
const endIdx = html.indexOf(endTag, startIdx);

if (startIdx > -1 && endIdx > -1) {
    const endScriptIdx = html.indexOf('</script>', endIdx) + 9;
    html = html.substring(0, startIdx) + '<!-- Particle Animation -->\r\n  <script src="assets/js/particles.js?v=5"></script>' + html.substring(endScriptIdx);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done');
