const nodeResolve = require('@rollup/plugin-node-resolve');
// eslint-disable-next-line
const commonjs = require('@rollup/plugin-commonjs');
// eslint-disable-next-line
const { dts } = require('rollup-plugin-dts');

module.exports = [{
    input: './src/index.js',
    output: [
        {
            file: './dist/index.cjs.js',
            format: 'cjs'
        },
        {
            file: './dist/index.esm.js',
            format: 'esm'
        },
        {
            name: '@themost/xml',
            file: './dist/index.js',
            format: 'umd'
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs({
            esmExternals: true
        }),
    ]
}, {
    input: './src/index.d.ts',
    output: [ { file: './dist/index.d.ts', format: 'es' } ],
    plugins: [
        dts()
    ],
}];
