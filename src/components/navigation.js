import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  font-size: 2rem;
  a {
    font-family: var(--font-family-primary);
    border-bottom: 2px solid transparent;
    &.active {
      border-color: var(--color-primary);
    }
    & + a {
      margin-left: var(--spacing-large);
    }
  }
`;

const Navigation = ({ className }) => (
  <Wrapper className={className}>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </Wrapper>
);

export default Navigation;
