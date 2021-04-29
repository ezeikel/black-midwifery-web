import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  p {
    font-size: 1.8rem;
    line-height: 24px;
    margin: 0;
  }
`;

const Heading = styled.h1`
  font-size: 4.8rem;
  line-height: 68px;
  font-family: var(--font-family-secondary);
  margin: 0 0 var(--spacing-large);
  position: relative;
  z-index: 2;

  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 6.4rem;
  }
`;

const PurchaseSuccessPage = () => {
  return (
    <Layout>
      <SEO title="Thank you" />
      <Wrapper>
        <Heading>Thank you for your purchase 🎉</Heading>
        <p>The "Birth Plan Assist" will be emailed to you shortly.</p>
      </Wrapper>
    </Layout>
  );
};

export default PurchaseSuccessPage;
