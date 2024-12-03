/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        functions: 100,
        branches: 100,
        lines: 100,
        statements: 100,
      }
    }
  },
})