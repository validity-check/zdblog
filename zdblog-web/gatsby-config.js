require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "zdblog-web",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiUrl: process.env.API_URL || "https://localhost:1337",
        collectionTypes: ["Articles", "Categories", "Writers"],
        singleTypes: ["Global", "Homepage"],
      },
      queryLimit: 1000,
    },
  ],
};
