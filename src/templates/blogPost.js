import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const HeroImage = styled.div`
  margin-bottom: var(--spacing-huge);
`;

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 3.2rem;
`;

const PublishDate = styled.p`
  font-size: 1.4rem;
  color: #666666;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  line-height: 1.5;

  * {
    color: #000f1c;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--secondary-font-family);
    font-weight: 400;
  }

  p {
    display: inline-block;
    justify-content: center;
    margin: 0;
    & + p {
      margin-top: var(--spacing-medium);
    }
  }

  ul {
    list-style-type: disc;
  }

  ul,
  ol {
    padding-left: var(--spacing-large);
    margin: var(--spacing-large) 0;
  }

  a {
    text-decoration: underline;
  }
`;

const BlogPost = ({ data }) => {
  const post = get(data, "contentfulBlogPost");

  return (
    <Layout>
      <div>
        <SEO title={post.title} />
        <HeroImage>
          <Img
            alt={post.title}
            fluid={post.heroImage.fluid}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </HeroImage>
        <div>
          <Heading>{post.title}</Heading>
          <PublishDate>{post.publishDate}</PublishDate>
          <Content
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
