const fs = require('fs');

const file = fs.readFileSync('./dist/lib/package.json');

const package = JSON.parse(file);

package.scripts = {
  postinstall: 'node postinstall.js',
};

fs.writeFileSync('./dist/lib/package.json', JSON.stringify(package, null, 2));
