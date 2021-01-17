import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import RecentPosts from "../components/recentPosts";

const IndexPage = ({ data }) => {
  const posts = get(data, "allContentfulBlogPost.edges");

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <RecentPosts posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          body {
            childMarkdownRemark {
              # excerpt(pruneLength: 180)
              excerptAst(pruneLength: 180)
              fields {
                readingTime {
                  text
                }
              }
            }
          }
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 300, maxHeight: 300, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
