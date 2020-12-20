import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-large);
`;

const LogoText = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 5.4rem;
  margin: 0;
`;

const Header = () => (
  <Wrapper>
    <Link to="/">
      <LogoText>Black Midwifery</LogoText>
    </Link>
    <Navigation />
  </Wrapper>
);

export default Header;
