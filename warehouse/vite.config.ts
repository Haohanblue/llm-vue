// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0', // 可选：允许外部访问
    port: 3000,      // 可选：开发服务器端口
    proxy: {
      '/run': {
        target: 'http://localhost:8000', // 后端服务器地址
        changeOrigin: true,
        // 移除 rewrite
      },
      '/ask': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        // 移除 rewrite
      },
    },
  }
})
