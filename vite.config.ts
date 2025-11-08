import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
    plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    build: {
        // Optimize build output
        target: "es2020",
        minify: "esbuild",
        cssMinify: true,
        rollupOptions: {
            output: {
                // Manual chunks for better caching
                manualChunks: {
                    vendor: ["react", "react-dom", "react-router-dom"],
                    ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
                    motion: ["motion"],
                },
            },
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        // Source maps for production debugging (optional, disable for smaller bundle)
        sourcemap: false,
    },
    // Performance optimizations
    optimizeDeps: {
        include: ["react", "react-dom", "react-router-dom"],
    },
}));
