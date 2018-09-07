import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'js/main.js',
  output: {
   file: 'dist/main.js',
   format: 'iife',
   sourcemap: 'inline'},
   plugins: [
 		commonjs(),
 		nodeResolve({
 			// pass custom options to the resolve plugin
 			customResolveOptions: {
 			moduleDirectory: 'node_modules'
 			},
 			jsnext: true,
 			main: true,
 			browser: true
 		})
 	]
 };
