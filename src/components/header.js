import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Navigation from "./navigation";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-large);
`;

const LogoText = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3.2rem;
  margin: 0;
`;

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Wrapper>
      <Link to="/">
        <LogoText>{isMobile ? "BM" : "Black Midwifery"}</LogoText>
      </Link>
      <Navigation />
    </Wrapper>
  );
};

export default Header;
