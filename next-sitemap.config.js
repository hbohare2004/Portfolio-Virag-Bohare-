module.exports = {
  siteUrl: "https://viragbohare.in",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://viragbohare.in/sitemap.xml"],
  },
};