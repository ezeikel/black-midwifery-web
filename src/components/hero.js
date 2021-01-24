import React from "react";
import styled from "styled-components";
import SignupForm from "./signupForm";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: var(--spacing-large);
  padding: var(--spacing-large);
  background-color: rgba(243, 205, 194, 0.5);

  @media (min-width: 768px) {
    min-height: 75vh;
    background-image: url("./black-woman-pregnant.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    > div {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const Heading = styled.h1`
  font-size: 6.4rem;
  line-height: 68px;
  font-family: var(--font-family-secondary);
  margin: 0 0 var(--spacing-huge);
  position: relative;
  z-index: 2;

  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  p {
    font-size: 1.8rem;
    line-height: 24px;
    margin: 0 0 var(--spacing-large);
  }
  @media (min-width: 768px) {
    p {
      width: 50%;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper className="full">
      <div>
        <Heading>A platform for maternal health related information</Heading>
        <FormWrapper>
          <p>Subscribe to our mailing list for updates.</p>
          <SignupForm />
        </FormWrapper>
      </div>
    </Wrapper>
  );
};

export default Hero;
