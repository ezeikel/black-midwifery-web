import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-large);
  background-color: var(--color-black);
  color: var(--color-white);
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-large);
  > span {
    font-family: var(--secondary-font-family);
    font-size: 3.2rem;
    margin-bottom: var(--spacing-large);
    text-align: center;
  }
  > ul {
    display: flex;
    flex-direction: row;
    li + li {
      margin-left: 27px;
    }
  }
`;

const Copyright = styled.div`
  display: flex;
  font-size: 1.4rem;
  color: var(--color-grey-muted);
  justify-self: end;
`;

const Footer = () => {
  return (
    <Wrapper className="full">
      <SocialLinks>
        <span>Follow us</span>
        <ul>
          <li>
            <OutboundLink href="https://www.instagram.com/blackmidwifery">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                color="var(--color-white)"
                size="3x"
              />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://twitter.com/blackmidwifery">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                color="var(--color-white)"
                size="3x"
              />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                color="var(--color-white)"
                size="3x"
              />
            </OutboundLink>
          </li>
        </ul>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Black Midwifery, all rights reserved.
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
