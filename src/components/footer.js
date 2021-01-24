import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import SignupForm from "./signupForm";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-large);
  background-color: var(--color-black);
  color: var(--color-white);

  > div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacing-huge);
  }

  @media (min-width: 768px) {
    > div:first-of-type {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-large);
  align-items: center;

  > span {
    font-family: var(--secondary-font-family);
    font-size: 2.4rem;
    line-height: 39px;
    margin-bottom: var(--spacing-medium);
  }
  > ul {
    display: flex;
    flex-direction: row;
    li + li {
      margin-left: 27px;
    }
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Copyright = styled.div`
  display: flex;
  font-size: 1.4rem;
  line-height: 23px;
  color: #666666;
  justify-self: end;
`;

const LogoText = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3.2rem;
  margin: 0 0 var(--spacing-huge);
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

const StyledSignupForm = styled(SignupForm)`
  flex: 1 0 auto;
`;

const Footer = () => {
  return (
    <Wrapper className="full">
      <LogoText>Black Midwifery</LogoText>
      <div>
        <SocialLinks>
          <span>Get in touch</span>
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
            <li>
              <OutboundLink href="mailto:dumebi@blackmidwidery.co">
                <Icon name="envelope" size="3x" color="var(--color-white)" />
              </OutboundLink>
            </li>
          </ul>
        </SocialLinks>
        <StyledSignupForm />
      </div>
      <Copyright>
        &copy; {new Date().getFullYear()} Black Midwifery, all rights reserved.
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
