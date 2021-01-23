import React from "react";
import styled from "styled-components";
import ArticlePreviewList from "./articlePreviewList";
import Heading from "./Heading";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: var(--spacing-large);
`;

const RecentPosts = ({ posts }) => {
  return (
    <Wrapper className="full">
      <Heading text="Our Recent Posts" />
      <ArticlePreviewList posts={posts} />
    </Wrapper>
  );
};

export default RecentPosts;
