import { Facebook, GitHub, Instagram, LinkedIn, YouTube } from "iconoir-react";
const socials = {
  facebook: {
    title: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/namnh198",
  },
  github: {
    title: "Github",
    icon: GitHub,
    url: "https://github.com/namnh198",
  },
  instagram: {
    title: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/namnh198",
  },
  linkedin: {
    title: "LinkedIn",
    icon: LinkedIn,
    url: "https://linkedin.com/in/namnh198",
  },
  youtube: {
    title: "YouTube",
    icon: YouTube,
    url: "https://youtube.com/@namnh198",
  },
};

export const getSocial = (...icons) => {
  if (!icons.length) {
    return socials;
  }
  return icons.map((icon) => {
    if (socials[icon]) {
      return socials[icon];
    }
  });
};
