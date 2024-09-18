const path = require('path');

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  // Check for errors in the GraphQL query
  if (result.errors) {
    console.error('Error fetching MDX data:', result.errors);
    return; // Exit if there are errors
  }

  // Create pages for each post
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    });
  });

  // Create pages for each unique category
  result.data.categories.distinct.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    });
  });
};
