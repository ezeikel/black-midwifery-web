import React from "react";
import styled from "styled-components";
import ArticlePreview from "./articlePreview";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  li + li {
    margin-top: var(--spacing-large);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--spacing-large);
    li + li {
      margin-top: 0;
    }
  }
`;

const ArticlePreviewList = ({ posts, noexcerpts }) => (
  <Wrapper>
    {posts.map(({ node }) => {
      return (
        <li key={node.slug}>
          <ArticlePreview article={node} noexcerpt={noexcerpts} />
        </li>
      );
    })}
  </Wrapper>
);

export default ArticlePreviewList;
