const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://namnh198.com";
const sitemap = "sitemap.xml";
const sitemapUrl = baseUrl + "/" + sitemap;

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [sitemap],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/post/[slug]", "/tag/[tag]"],
      },
    ],
    additionalSitemaps: [sitemapUrl],
  },
};
