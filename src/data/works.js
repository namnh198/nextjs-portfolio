import { Glamira, MicrosoftClarity, SmsNotification } from "@/assets/images";

export const projects = [
  {
    title: "Glamira",
    type: "e-Commerce",
    image: Glamira,
    client: "Glamira",
    description: "",
    url: "https://glamira.co.uk/",
  },
  {
    title: "Microsoft Clairity",
    type: "Extension",
    image: MicrosoftClarity,
    client: "MySelf",
    description: "",
    url: "https://github.com/namnh198/magento-microsoft-clarity",
  },
  {
    title: "Sms Notification",
    type: "Extension",
    image: SmsNotification,
    client: "MySelf",
    description: "",
    url: "https://github.com/namnh198/magento-sms-notification",
  },
];

const galleries = {
  left: [],
  right: [],
};

for (let i = 0; i < projects.length; i += 3) {
  galleries.left.push(projects[i]);
  if (i + 1 < projects.length) {
    const subProject = [projects[i + 1]];
    if (i + 2 < projects.length) {
      subProject.push(projects[i + 2]);
    }
    galleries.right.push(subProject);
  }
}

export const works = galleries;
