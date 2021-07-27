import { defineConfig } from "vite";
import path from "path";
import { nodeResolve} from '@rollup/plugin-node-resolve';

export default defineConfig({
  cacheDir: "../../node_modules/.vite",
  resolve: {
    // conditions: ["main"], // Doesn't work -- option 1
    // mainFields: ["main"], // Doesn't work -- option 2
    // alias: [                 // This worked  -- option 4
    //   {
    //     find: "axios-cache-adapter",
    //     replacement: path.join(
    //       path.resolve(__dirname),
    //       "/node_modules/axios-cache-adapter/dist/cache.node.js"
    //     ),
    //   },
    // ],
  },
  build: {
    target: "node14", // tried with es2020 also but no luck
    emptyOutDir: true,
    minify: false,
    // ssr: true // We don't want to use this since, this is experimental and also doesn't create bundle with deps -- option 4
    lib: {
      name: "test",
      entry: "./src/main.ts",
      fileName: "main",
      formats: ["esm", "cjs"],
    },
    rollupOptions: {
      input: "./src/main.ts",
      output: {
        dir: "./dist/bundles",
      },
      plugins: [
        //   nodeResolve({ // This too doesn't works -- option 3
        //       browser: false,
        //       mainFields: ['main']
        //   })
      ]
    },
  },
});
