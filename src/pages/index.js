import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

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

//download mdx plugin and set folder (posts) using filesystem for mdx

//ALL DATA APART FROM EXCERPT WHERE GOTTEN FROM FRONTMATTER i.e
//---
//title: ""
//image: ""
//---

//excerpts refers to the body or markdown after the FRONTMATTER apart from "imports"

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          author
          category
          readTime
          date(formatString: "MM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
        id
      }
    }
  }
`;

export default IndexPage;
