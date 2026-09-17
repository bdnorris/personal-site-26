export type WorkCategory =
  | "Client"
  | "Freelance"
  | "Personal"
  | "Tools / Experiments";

export type WorkShot = {
  src?: string;
  hint: string;
};

export type WorkCase = {
  client?: string;
  role?: string;
  lede?: string;
  hero?: string;
  problem?: string[];
  quote?: string;
  approach?: { body: string; bullets?: string[] };
  shots?: WorkShot[];
  shotsCaption?: string;
  interesting?: {
    body: string;
    code?: { filename: string; html: string };
  };
  stats?: { n: string; label: string }[];
  nextId?: string;
};

export type WorkItem = {
  id: string;
  title: string;
  blurb: string;
  category: WorkCategory;
  year: string;
  stack: string[];
  featured?: boolean;
  image?: string;
  imageHint?: string;
  case?: WorkCase;
};

import work from "../data/work.json";

const items = work as WorkItem[];

export const CATEGORIES: Array<"All" | WorkCategory> = [
  "All",
  "Client",
  "Freelance",
  "Personal",
  "Tools / Experiments",
];

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
  const nextId = item.case?.nextId;
  if (nextId) return getWorkById(nextId);
  const index = items.findIndex((entry) => entry.id === item.id);
  if (index < 0) return undefined;
  return items[(index + 1) % items.length];
}
