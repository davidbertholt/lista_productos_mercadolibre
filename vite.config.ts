import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const replacePlugin = mode => {
  return {
    name: "html-inject-env",
    transformIndexHtml: html => {
      if (mode === "production") {
        return html.replace(
          "<!-- REACT_ENV -->",
          '<script src="./config/frontend.env.js"></script>'
        );
      }
      return null;
    }
  };
};

export default defineConfig(({ mode }) => ({
  plugins: [react(), replacePlugin(mode)],
  server: {
    watch: {
      usePolling: true
    },
    host: "0.0.0.0",
    strictPort: true,
    port: 8080
  },
  resolve: {
    alias: [{ find: "0", replacement: path.resolve(__dirname, "src") }]
  }
}));
