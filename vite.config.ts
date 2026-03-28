import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

export default defineConfig({
  base: process.env.BUILD_MODE === 'prod' ? '/aboutme/' : './',
  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: process.env.BUILD_MODE !== 'prod',
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
