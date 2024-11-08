import path from "path"
import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig, UserConfig } from "vite"

export default defineConfig(() => {
  const server = "http://localhost:8080"

  return {
    plugins: [
      react(),
      TanStackRouterVite({
        generatedRouteTree: "./src/route-tree.gen.ts",
        routeToken: "_layout",
      })
    ],
    server: {
      proxy: {
        "/api": {
          target: server,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  } satisfies UserConfig
})
