export type Contact = {
  k: string;
  v: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Philosophy = {
  n: string;
  title: string;
  body: string;
};

export type Job = {
  dates: string;
  role: string;
  org: string;
  body: string;
};

export type ResumeSkillGroup = {
  title: string;
  items: { k: string; v: string }[];
};

export type SiteData = {
  name: string;
  location: string;
  role: string;
  contacts: Contact[];
  toolkit: string[];
  skills: SkillGroup[];
  philosophy: Philosophy[];
  about: {
    intro: string[];
    portraitHint: string;
    portrait?: string;
  };
  education: {
    dates: string;
    degree: string;
    school: string;
    note: string;
  };
  jobs: Job[];
  resumeSkills: ResumeSkillGroup[];
};

import site from "../data/site.json";

export function getSite(): SiteData {
  return site as SiteData;
}
