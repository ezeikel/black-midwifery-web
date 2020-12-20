import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Header from "./header";
import Footer from "./footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faTwitter, faInstagram, faWhatsapp);

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  grid-row-gap: var(--spacing-huge);
  min-height: 100vh;

  > * {
    grid-column: 2 / -2;
  }
  > .full {
    grid-column: 1 / -1;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </>
);

export default Layout;
