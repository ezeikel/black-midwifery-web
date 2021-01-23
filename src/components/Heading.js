import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  font-size: 4.2rem;
  font-family: var(--font-family-secondary);
  margin: 0 0 var(--spacing-huge);
`;

const Heading = ({ text }) => <Wrapper>{text}</Wrapper>;

export default Heading;
