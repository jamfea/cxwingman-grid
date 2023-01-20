import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: 'cxwingman-grid',
      name: 'CXWingmanGrid',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
