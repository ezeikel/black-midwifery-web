import React from "react";
import styled from "styled-components";
import SignupForm from "./signupForm";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: var(--spacing-large);
  > div {
    flex: 0 0 50%;
  }
`;

const Heading = styled.h1`
  font-size: 6.4rem;
  line-height: 68px;
  font-family: var(--font-family-secondary);
  margin: 0 0 var(--spacing-huge);
  position: relative;
  z-index: 2;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  p {
    font-size: 1.6rem;
    line-height: 22px;
    margin: 0 0 var(--spacing-large);
    width: 50%;
  }
`;

const Illustration = styled.div`
  position: absolute;
  top: calc(var(--spacing-huge) * -1);
  right: calc(var(--spacing-large) * -1);
  bottom: 0;
  z-index: 1;
  width: 100%;
  background-image: url("./black-woman-pregnant.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
`;

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <Heading>A platform for maternal health related information</Heading>
        <FormWrapper>
          <p>Sign up to our newsletter to get the latest news and updates.</p>
          <SignupForm />
        </FormWrapper>
      </div>
      <Illustration />
    </Wrapper>
  );
};

export default Hero;
