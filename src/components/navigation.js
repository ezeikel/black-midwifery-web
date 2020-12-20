import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  font-size: 2rem;
  a + a {
    margin-left: var(--spacing-large);
  }
`;

const Navigation = () => (
  <Wrapper>
    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </Wrapper>
);

export default Navigation;
