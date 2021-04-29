import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Navigation from "./navigation";
import BuyGuide from "./buyGuide";

const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-large);
  margin-top: -32px;
`;

const LogoText = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3.2rem;
  margin: 0;
`;

const StyedLink = styled(Link)`
  margin-top: 32px;
`;

const StyledBuyGuide = styled(BuyGuide)`
  margin-top: 32px;
`;

const StyledNavigation = styled(Navigation)`
  margin-top: 32px;
`;

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Wrapper>
      <StyedLink to="/">
        <LogoText>{isMobile ? "BM" : "Black Midwifery"}</LogoText>
      </StyedLink>
      <StyledNavigation />
      <StyledBuyGuide />
    </Wrapper>
  );
};

export default Header;
