import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: JSON.stringify(process.env.VITE_VERCEL_ENV),
    __DOCUMENTS_DIR__: JSON.stringify(process.env.VITE_DOCUMENTS),
    __PROJECT_DRON_IMAGES_DIRECTORY__: JSON.stringify(
      process.env.VITE_PROJECT_DRON_DIR
    ),
    __PROJECT_ARENA_IMAGES_DIRECTORY__: JSON.stringify(
      process.env.VITE_PROJECT_ARENA_DIR
    ),
    __PROJECT_MOMENTUM_IMAGES_DIRECTORY__: JSON.stringify(
      process.env.VITE_PROJECT_MOMENTUM_DIR
    ),
    __PROJECT_BATTLEFIELD_IMAGES_DIRECTORY__: JSON.stringify(
      process.env.VITE_PROJECT_BATTLEFIELD_DIR
    ),
    __DIGITAL_PORTFOLIO_IMAGES_DIRECTORY__: JSON.stringify(
      process.env.VITE_DIGITAL_PORTFOLIO_DIR
    ),
  },
});
