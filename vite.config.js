import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    build: {
        rollupOptions: {
            input: {
                main: 'src/index.js'
            },
            output: {
                entryFileNames: 'deview.js',
                assetFileNames: 'deview.css'
            }
        }
    }
});
