import React from "react";
import styled from "styled-components";
import ArticlePreview from "./articlePreview";

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--spacing-large);
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
