import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "test/e2e/**/*.{cy,spec,test}.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: "test/component/**/*.{cy,spec,test}.{js,jsx,ts,tsx}",
  },
});
