// vite.config.js
import { defineConfig } from "file:///D:/PF-Empli/empli-www/client/node_modules/.pnpm/vite@4.2.0/node_modules/vite/dist/node/index.js";
import react from "file:///D:/PF-Empli/empli-www/client/node_modules/.pnpm/@vitejs+plugin-react@3.1.0_vite@4.2.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
import jsconfigPaths from "file:///D:/PF-Empli/empli-www/client/node_modules/.pnpm/vite-jsconfig-paths@2.0.1_vite@4.2.0/node_modules/vite-jsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\PF-Empli\\empli-www\\client";
var vite_config_default = defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  server: {
    routes: [{ path: "/sign-in", redirect: "/" }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQRi1FbXBsaVxcXFxlbXBsaS13d3dcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQRi1FbXBsaVxcXFxlbXBsaS13d3dcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9QRi1FbXBsaS9lbXBsaS13d3cvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBqc2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtanNjb25maWctcGF0aHMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwganNjb25maWdQYXRocygpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfV0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHJvdXRlczogW3sgcGF0aDogJy9zaWduLWluJywgcmVkaXJlY3Q6ICcvJyB9XSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThRLFNBQVMsb0JBQW9CO0FBQzNTLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxtQkFBbUI7QUFIMUIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7QUFBQSxFQUNsQyxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixRQUFRLENBQUMsRUFBRSxNQUFNLFlBQVksVUFBVSxJQUFJLENBQUM7QUFBQSxFQUM5QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
