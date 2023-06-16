export const options = {
  setting: {
    site_url: process.env.NEXT_PUBLIC_SITE_URL || "https://namnh198.com",
    site_name: process.env.NEXT_PUBLIC_SITE_NAME || "",
    site_desc: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "",
    site_theme: process.env.NEXT_PUBLIC_SITE_THEME || false,
    emailjs: {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    },
  },
  menu: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Works", url: "/works" },
    { title: "Contact", url: "/contact" },
  ],
};
