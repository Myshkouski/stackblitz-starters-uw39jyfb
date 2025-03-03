import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'server.mjs',
	output: {
		file: 'dist/bundle.mjs',
		format: 'es',
        inlineDynamicImports: true
	},
    plugins: [
        commonjs(),
        nodeResolve(),
        json()
    ],
    external: [
        'node:http'
    ]
}
