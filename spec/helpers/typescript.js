const path = require('path');
require('ts-node').register({
    project: path.resolve(process.cwd(), 'tsconfig.json'),
    transpileOnly: true
});