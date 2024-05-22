import tsconfigPaths from "vite-tsconfig-paths";

import { defineConfig } from "vite";
import { installGlobals } from "@remix-run/node";
import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*"],

      async routes(defineRoutes) {
        return flatRoutes("routes", defineRoutes);
      },
    }),

    tsconfigPaths(),
  ],
});
