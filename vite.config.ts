import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    // Remotion needs this
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
