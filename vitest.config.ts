import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  extends: "vite.config.ts",
  test: {
    globals: true,
    environment: "jsdom",
    isolate: false,
    pool: "forks",
    //setupFiles: "./vite.setup.ts",
    retry: 0,
    coverage: {
      provider: "v8",
      enabled: true,
      all: false,
      thresholds: { branches: 80, functions: 50, lines: 80, statements: 80 },
      exclude: [
        "coverage/**",
        "dist/**",
        "**/[.]**",
        "packages/*/test?(s)/**",
        "**/*.d.ts",
        "**/virtual:*",
        "**/__x00__*",
        "**/\x00*",
        "cypress/**",
        "test?(s)/**",
        "test?(-*).?(c|m)[jt]s?(x)",
        "**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)",
        "**/__tests__/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
        "**/vitest.{workspace,projects}.[jt]s?(on)",
        "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
        "**/index.ts",
        "**/mocks/**",
        "**/core/generated/**",
      ],
    },
    restoreMocks: true,
    clearMocks: true,
    mockReset: true,
    alias: {
      "react-redux": path.resolve("./src/mocks/externals/redux.tsx"),
    },
  },
});
