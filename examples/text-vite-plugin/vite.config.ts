import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePlugin from '../../dist/index.mjs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePlugin()],
});
