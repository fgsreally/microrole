import type { Options } from "tsup";

export const tsup: Options = {
  entry: ["src/core/*.ts", "src/helper/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  clean: true,
  shims: false,
};
