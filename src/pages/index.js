import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import styled from "styled-components";
import Layout from "../components/layout";
import ArticlePreviewList from "../components/articlePreviewList";
import SEO from "../components/seo";

const SubHeading = styled.h2`
  font-size: 3.2rem;
  font-family: var(--secondary-font-family);
`;

const IndexPage = ({ data }) => {
  const posts = get(data, "allContentfulBlogPost.edges");

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div>
          <SubHeading>Recent Posts</SubHeading>
          <ArticlePreviewList posts={posts} />
        </div>
      </div>
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
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
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
