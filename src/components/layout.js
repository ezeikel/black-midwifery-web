import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Header from "./header";
import Footer from "./footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/pro-light-svg-icons";

library.add(faFacebookF, faTwitter, faInstagram, faWhatsapp, faEnvelope);

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  position: relative;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  grid-row-gap: var(--spacing-huge);
  margin-bottom: var(--spacing-huge);

  > * {
    grid-column: 2 / -2;
  }
  > .full {
    grid-column: 1 / -1;
  }
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  .toast {
    background-color: var(--color-primary);
    margin: 0;
    cursor: auto;
  }
  button[aria-label="close"] {
    display: none;
  }
  .toast {
    background-color: var(--color-primary);
    border-radius: 0;
  }
  .body {
    background: var(--color-primary);
    color: var(--color-white);
    font-family: var(--font-family-primary);
    margin: 0;
    display: flex;
    place-content: center;
    font-size: 1.6rem;
    padding: var(--spacing-medium);
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <StyledToastContainer
        position="top-right"
        draggable
        hideProgressBar
        pauseOnHover
        autoClose={3000}
        closeOnClick={false}
      />
    </Wrapper>
  </>
);

export default Layout;
