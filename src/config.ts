import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://exc.my.id/", // replace this with your deployed domain
  author: "ErZ",
  desc: "Web koleksi dari ErZ.",
  title: "Lagu",
  lightAndDarkMode: false,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Eriza-Z",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ezgrxs",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  }
];
