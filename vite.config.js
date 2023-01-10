import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { babel } from "@rollup/plugin-babel";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/food-waste-fyp-app/' : '/',
  plugins: [
    babel({
      plugins: [
        [
          "@babel/plugin-transform-react-jsx",
          {
            runtime: "automatic",
            importSource: "@antv/f2",
          },
        ],
      ],
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});