import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

import '../css/main.css';

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`;

export default IndexPage;
