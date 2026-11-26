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
//       return NODE_ENV === 'production' ? '/trpg-autumnmoon/' : '/';
//   }
// }

// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [
        vue(),
        electron( [
            { entry: 'electron/main/index.js' },
            {
                entry: 'electron/preload/index.js',
                // 主进程与 preload 同名为 index，需单独指定输出文件名，避免互相覆盖
                vite: {
                    build: {
                        lib: {
                            entry: 'electron/preload/index.js',
                            formats: [ 'cjs' ],
                            fileName: () => 'preload.js',
                        },
                    },
                },
            },
        ] ),
    ],
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
