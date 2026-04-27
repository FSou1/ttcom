import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "TtcomComponents",
      fileName: "ttcom-components",
      cssFileName: "style"
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime"
        }
      }
    }
  }
});
