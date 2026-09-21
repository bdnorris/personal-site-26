import work from "../data/work.json";

export type WorkCategory =
  | "Client"
  | "Freelance"
  | "Personal"
  | "Education"
  | "Tools / Experiments";

export type WorkShot = {
  src?: string;
  hint: string;
  alt: string;
};

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkDecision = {
  title: string;
  body: string;
};

export type WorkVisual =
  | {
      kind: "shots";
      shots: WorkShot[];
      caption?: string;
    }
  | {
      kind: "code";
      filename: string;
      html: string;
    }
  | {
      kind: "compare";
      before: WorkShot;
      after: WorkShot;
      caption?: string;
    };

export type WorkCase = {
  client?: string;
  role?: string;
  roleDetail?: string;
  lede?: string;
  hero?: string;
  context?: string[];
  decisions?: WorkDecision[];
  visuals?: WorkVisual[];
  outcome?: string[];
  stats?: { n: string; label: string }[];
  reflections?: string[];
  nextId?: string;
};

export type WorkHero = {
  hint: string;
  alt: string;
  src?: string | null;
};

export type WorkItem = {
  id: string;
  title: string;
  blurb: string;
  category: WorkCategory;
  year: string;
  stack: string[];
  links?: WorkLink[];
  featured?: boolean;
  hero?: WorkHero;
  case?: WorkCase;
};

const items = work as WorkItem[];

export const CATEGORIES: Array<"All" | WorkCategory> = [
  "All",
  "Client",
  "Freelance",
  "Personal",
  "Education",
  "Tools / Experiments",
];

const SAFE_HREF_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

export function isSafeHref(href: string): boolean {
  const value = href.trim();
  if (!value) return false;
  if (value.startsWith("/") && !value.startsWith("//")) return true;
  try {
    const url = new URL(value);
    return SAFE_HREF_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
}

export function workHeroHint(item: WorkItem): string {
  return item.hero?.hint?.trim() || item.title;
}

export function workHeroAlt(item: WorkItem): string {
  return item.hero?.alt?.trim() || item.title;
}

export function getWork(): WorkItem[] {
  return items;
}

export function getWorkById(id: string): WorkItem | undefined {
  return items.find((item) => item.id === id);
}

export function getFeatured(): WorkItem[] {
  const featured = items.filter((item) => item.featured);
  return (featured.length ? featured : items).slice(0, 3);
}

export function getCategories(): Array<"All" | WorkCategory> {
  return CATEGORIES;
}

export function countByCategory(category: "All" | WorkCategory): number {
  if (category === "All") return items.length;
  return items.filter((item) => item.category === category).length;
}

export function getNextWork(item: WorkItem): WorkItem | undefined {
  const nextId = item.case?.nextId?.trim();
  if (nextId) {
    const named = getWorkById(nextId);
    if (named && named.id !== item.id) return named;
  }
  const index = items.findIndex((entry) => entry.id === item.id);
  if (index < 0) return undefined;
  const next = items[(index + 1) % items.length];
  if (!next || next.id === item.id) return undefined;
  return next;
}

export function yearLabel(year: string): "Dates" | "Year" {
  return /\d\s*[–-]\s*\d/.test(year) ? "Dates" : "Year";
}
