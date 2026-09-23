import { baseService } from "astro/assets";
import type { ExternalImageService, ImageTransform } from "astro";
import { isESMImportedImage } from "astro/assets/utils";
import { AstroError } from "astro/errors";

const SUPPORTED_FORMATS = ["avif", "jpg", "png", "webp"] as const;
const QUALITY_NAMES = { low: 25, mid: 50, high: 90, max: 100 } as const;
const NETLIFY_FITS = new Set(["contain", "cover", "fill"]);
const NETLIFY_POSITIONS = new Set(["center", "top", "bottom", "left", "right"]);

function removeLeadingForwardSlash(path: string) {
  return path.startsWith("/") ? path.substring(1) : path;
}

function netlifyFit(fit: unknown) {
  if (typeof fit !== "string") return undefined;
  const value = fit.trim().toLowerCase();
  return NETLIFY_FITS.has(value) ? value : undefined;
}

function netlifyPosition(position: unknown) {
  if (typeof position !== "string") return undefined;
  const tokens = position
    .toLowerCase()
    .split(/[\s-]+/)
    .filter(Boolean);
  const directional = tokens.find(
    (token) => token !== "center" && NETLIFY_POSITIONS.has(token),
  );
  if (directional) return directional;
  if (tokens.includes("center")) return "center";
  return undefined;
}

const service: ExternalImageService = {
  getURL(options: ImageTransform) {
    if (isESMImportedImage(options.src) && options.src.format === "svg") {
      return options.src.src;
    }
    const query = new URLSearchParams();
    const fileSrc = isESMImportedImage(options.src)
      ? removeLeadingForwardSlash(options.src.src)
      : options.src;
    query.set("url", fileSrc);
    if (options.format) query.set("fm", options.format);
    if (options.width) query.set("w", `${options.width}`);
    if (options.height) query.set("h", `${options.height}`);
    if (options.quality) query.set("q", `${options.quality}`);
    const fit = netlifyFit(options.fit);
    const position = netlifyPosition(options.position);
    if (fit) query.set("fit", fit);
    if (position) query.set("position", position);
    return `/.netlify/images?${query}`;
  },
  getHTMLAttributes: baseService.getHTMLAttributes,
  getSrcSet: baseService.getSrcSet,
  validateOptions(options: ImageTransform) {
    if (
      options.format &&
      !(SUPPORTED_FORMATS as readonly string[]).includes(options.format)
    ) {
      throw new AstroError(
        `Unsupported image format "${options.format}"`,
        `Use one of ${SUPPORTED_FORMATS.join(", ")} instead.`,
      );
    }
    if (options.quality) {
      const named =
        typeof options.quality === "string" && options.quality in QUALITY_NAMES
          ? QUALITY_NAMES[options.quality as keyof typeof QUALITY_NAMES]
          : options.quality;
      options.quality = named;
      if (typeof named !== "number" || named < 1 || named > 100) {
        throw new AstroError(
          `Invalid quality for picture "${String(options.src)}"`,
          "Quality needs to be between 1 and 100.",
        );
      }
    }
    return options;
  },
};

export default service;
