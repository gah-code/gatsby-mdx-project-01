// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   plugins: [
//     `gatsby-plugin-mdx`,
//     `gatsby-plugin-image`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-styled-components`,
//     `gatsby-plugin-mdx`,
//     `gatsby-remark-images`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `assets`,
//         path: `${__dirname}/src/assets`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `posts`,
//         path: `${__dirname}/src/posts`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-mdx`,
//       options: {
//         extensions: [`.mdx`, `.md`, `.markdown`],
//         gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
//       },
//     },
//   ],
// };
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200, // Adjust to your needs
              path: `${__dirname}/src/pages/post`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`, // Add this if using prism-react-renderer
            options: {
              classPrefix: 'language-', // Add language classes for PrismJS
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
