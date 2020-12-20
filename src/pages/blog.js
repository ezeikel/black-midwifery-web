import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../components/layout";
import ArticlePreviewList from "../components/articlePreviewList";

const Heading = styled.h1`
  font-size: 3.2rem;
  font-family: var(--secondary-font-family);
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogPage = ({ data }) => {
  const posts = get(data, "allContentfulBlogPost.edges");

  return (
    <Layout>
      <div>
        <SEO title="Blog" />
        <Heading>Blog</Heading>
        <Posts>
          <ArticlePreviewList posts={posts} noexcerpts />
        </Posts>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          body {
            childMarkdownRemark {
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
