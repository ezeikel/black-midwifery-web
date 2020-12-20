import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  .gatsby-image-wrapper {
    margin: 0 0 var(--spacing-large);
  }
  h3 {
    font-family: var(--secondary-font-family);
    margin: 0 0 var(--spacing-medium);
    font-size: 2.4rem;
  }
`;

const ReadTime = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #666666;
  margin-bottom: 10px;
`;

const Excerpt = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0 0 var(--spacing-small);
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
      <Img alt="" fluid={article.heroImage.fluid} />
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
    </Wrapper>
  );
};

export default ArticlePreview;
