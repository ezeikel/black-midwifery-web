require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const typekitConfig = {
  typekit: {
    id: process.env.TYPEKIT_ID,
  },
};

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Black Midwifery - Maternal health",
    description: "A platform for Maternal health related information.",
    author: "Dumebi Pemberton <dumebi@blackmidwifery.co>",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [process.env.GA_MEASUREMENT_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-reading-time"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: typekitConfig,
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://blackmidwifery.us7.list-manage.com/subscribe/post?u=77a381229eec52e92e3d237f1&amp;id=4ec3b9974e",
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "PSl97FR38n7Y4Mkpy8zYnyioa",
          consumer_secret: "VtIpPIqZawiqSWJSf0Sok4VflLfjzwGsMjLHZBnsvFWRPT0J72",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAADfYJAEAAAAAiz8VRT7AioRbaEiFm3Tvu7j6SMI%3D4kXOV14hLNYkYTwkRAFF6RT0nR5vThNUZrRfAQuPvDZJQtQJbC",
        },
        queries: {
          endSARSHashtag: {
            endpoint: "search/tweets",
            params: {
              q: "#endSARS",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Black Midwifery - Maternal health`,
        short_name: `Black Midwifery - Maternal health`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#E69882`,
        display: `standalone`,
        icon: "src/images/favicon.png",
      },
    },
  ],
};
