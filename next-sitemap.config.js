const SITE_URL = process.env.SITE_URL;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
};
