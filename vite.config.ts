import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

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
  }
}));
