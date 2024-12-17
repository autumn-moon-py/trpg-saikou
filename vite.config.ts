import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// function getBase() {
//   const { TARGET_ENV, NODE_ENV } = process.env;
//   switch (TARGET_ENV) {
//     case 'sox-mini':
//       return '/';
//     default:
//       return NODE_ENV === 'production' ? '/trpg-saikou/' : '/';
//   }
// }

// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [ vue(), electron( {
        entry: 'electron/main/index.js',
    } ) ],
    //   base: getBase(),
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath( new URL( './src', import.meta.url ) ),
        },
        extensions: [ '.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.example.ts' ],
    },
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
    build: {
        assetsInlineLimit: 8192,
    },
} )
