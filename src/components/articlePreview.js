import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  .gatsby-image-wrapper {
    margin: 0 0 var(--spacing-medium);
  }
  h3 {
    margin: 0 0 var(--spacing-small);
    font-size: 2.4rem;
    line-height: 1.5;
    font-weight: bold;
  }
`;

const ReadTime = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #666666;
  margin-bottom: var(--spacing-small);
`;

const Excerpt = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0 0 var(--spacing-medium);
`;

const ReadMore = styled.span`
  font-size: 1.4rem;
  a {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;

const ArticlePreview = ({ article, noexcerpt }) => {
  let firstParagraph;

  if (!noexcerpt) {
    // TODO: imporove this - doing this to remove heading from excerpt
    const paragraphs = article.body.childMarkdownRemark?.excerptAst.children.filter(
      (element) => element.tagName === "p"
    );

    if (paragraphs.length) {
      firstParagraph = paragraphs[0].children[0].value;
    }
  }

  return (
    <Wrapper>
      <Img
        fluid={article.heroImage.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
      <h3>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <ReadTime>
        {`This is a ${article.body.childMarkdownRemark.fields.readingTime.text}`}
      </ReadTime>
      {!noexcerpt && (
        <Excerpt
          dangerouslySetInnerHTML={{
            // __html: article.body.childMarkdownRemark.excerpt,
            __html: firstParagraph,
          }}
        />
      )}
      <ReadMore>
        <Link to={`/blog/${article.slug}`}>Read Post</Link>
      </ReadMore>
    </Wrapper>
  );
};

export default ArticlePreview;
