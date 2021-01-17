import React from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "./button";
import TextInput from "./textInput";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email doesn't look quite right")
    .required("Enter an email"),
});

const Wrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const InputWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  button {
    margin-left: var(--spacing-medium);
  }
`;

const SignupForm = ({ openModal }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (
          { email },
          { setSubmitting, setErrors, resetForm }
        ) => {
          // extra info to send to mailchimp
          const listData = {};

          try {
            const result = await addToMailchimp(email, listData);

            if (result.result === "error") {
              const errorMessage = result.msg.includes("is already subscribed")
                ? "You're already on the list"
                : result.msg;
              setErrors({
                email: errorMessage,
              });

              setSubmitting(false);
            } else {
              setSubmitting(false);
              resetForm();

              // open thank you modal
              openModal();
            }
          } catch (e) {
            if (e.message === "Timeout") {
              setErrors({
                email:
                  "Looks like you are using an add blocking browser that's preventing this form from being submitted - please temporarily toggle off the 'Ads and trackers blocked' settings and then re-submit the form.",
              });
            }
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, setErrors }) => (
          <StyledForm>
            <InputWrapper>
              <TextInput
                name="email"
                placeholder="dumebi@blackmidwifery.co"
                type="email"
              />
            </InputWrapper>
            <Button
              primary
              type="submit"
              disabled={isSubmitting}
              text={`Subscrib${isSubmitting ? "ing" : ""}e`}
            />
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignupForm;