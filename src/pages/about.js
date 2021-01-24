import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import styled from "styled-components";

const PageWrap = styled.div`
  padding-top: var(--spacing-huge);
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageWrap>
      <About />
    </PageWrap>
  </Layout>
);

export default AboutPage;
