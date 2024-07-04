// import { graphql } from 'gatsby';
// import React from 'react';
// import Hero from '../components/Hero';
// import Layout from '../components/Layout';
// import Posts from '../components/Posts';
// const PostsPage = ({ data }) => {
//   const {
//     allMdx: { nodes: posts },
//   } = data;

//   return (
//     <Layout>
//       <Hero />
//       <Posts posts={posts} title='all posts' />
//     </Layout>
//   );
// };

// export const query = graphql`
//   {
//     allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//       nodes {
//         excerpt
//         frontmatter {
//           title
//           author
//           category
//           readTime
//           date(formatString: "MMMM, Do YYYY")
//           slug
//           image {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//         id
//       }
//     }
//   }
// `;

// export default PostsPage;
// import React from 'react';
// import Layout from '../components/Layout';
// import Hero from '../components/Hero';
// import { graphql } from 'gatsby';
// import Posts from '../components/Posts';

// const PostsPage = () => {
//   return (
//     <Layout>
//       <h4>post Page</h4>
//       <Posts posts={posts} title='all posts' />
//     </Layout>
//   );
// };

// export default PostsPage;
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data; // Destructure posts from data

  return (
    <Layout>
      <Hero /> {/* Assuming Hero component is defined to display */}
      <h4>Post Page</h4> {/* Placeholder text */}
      <Posts posts={posts} title='all posts' />{' '}
      {/* Pass posts as prop to Posts component */}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          readTime
          date(formatString: "MMMM, Do YYYY")
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export default PostsPage;
