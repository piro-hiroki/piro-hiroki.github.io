import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://piro-log.github.io",
  author: "piro",
  desc: "This is a blog by piro, a software engineer living in Tokyo. I love darts and archery :).",
  title: "PiroLog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/piro-hiroki",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/archer_hiro1112",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
