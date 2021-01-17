import React from "react";
import styled from "styled-components";
import ArticlePreviewList from "./articlePreviewList";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: var(--spacing-large);
`;

const Heading = styled.h1`
  font-size: 4.2rem;
  font-family: var(--font-family-secondary);
  margin: 0 0 var(--spacing-large);
`;

const RecentPosts = ({ posts }) => {
  return (
    <Wrapper>
      <Heading>Recent Posts</Heading>
      <ArticlePreviewList posts={posts} />
    </Wrapper>
  );
};

export default RecentPosts;
