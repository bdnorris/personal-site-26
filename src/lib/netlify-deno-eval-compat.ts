import type { Plugin } from "vite";

/**
 * Deno 2.9.6+ dropped `--allow-scripts` from `deno eval`, but
 * `@netlify/edge-functions-dev` still passes it. That breaks `astro dev`
 * with an unhandled rejection even on static sites that never use edge
 * functions. Strip the flag before Netlify boots its Deno eval server.
 */
export function netlifyDenoEvalCompat(): Plugin {
  let patched = false;

  return {
    name: "netlify-deno-eval-compat",
    enforce: "pre",
    async config() {
      if (patched) return;
      patched = true;

      try {
        const { DenoBridge } = await import("@netlify/edge-bundler");
        const original = DenoBridge.prototype.runInBackground;

        DenoBridge.prototype.runInBackground = function runInBackground(
          this: InstanceType<typeof DenoBridge>,
          args: string[],
          ref?: { ps?: unknown },
          options?: Parameters<typeof original>[2],
        ) {
          const nextArgs =
            args[0] === "eval"
              ? args.filter((arg) => arg !== "--allow-scripts")
              : args;
          return original.call(this, nextArgs, ref, options);
        };
      } catch {
        /* Package layout can change; leave Netlify's default behavior alone. */
      }
    },
  };
}
