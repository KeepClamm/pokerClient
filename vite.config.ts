import { fileURLToPath, URL } from 'node:url'
import postCssPxToRem from 'postcss-pxtorem';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 设计稿尺寸 1rem大小
          propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    },
  }
})
