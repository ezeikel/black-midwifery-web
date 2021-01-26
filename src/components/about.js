import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Heading from "./heading";

const Wrapper = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;

  h3 {
    font-size: 3.4rem;
    font-family: var(--font-family-secondary);
    margin: 0 0 var(--spacing-large);
  }

  p + h3 {
    margin-top: var(--spacing-huge);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 8px solid var(--color-primary);
    margin-bottom: var(--spacing-huge);
  }
`;

const Content = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      dumebiImage: file(relativePath: { eq: "dumebi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Content>
        <Img
          fluid={data.dumebiImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <h3>Dumebi</h3>
        <p>
          Hello, my name is Dumebi Pemberton and I am the founder of Black
          Midwifery. I am a registered midwife in the UK and a mother to two
          amazing young children.
        </p>
        <p>
          I always wanted to be in the medical field from as young as I can
          remember, my mother recalls me as a toddler playing with my toy doctor
          kit and administering pretend injections to my family members.
        </p>
        <p>
          In my secondary school work experience placement at age 15 was where I
          fell in love with midwifery. I was allocated in the maternity ward in
          my local hospital and since then I knew I wanted to become a midwife.
        </p>
        <p>
          I have been practicing midwifery for over 7 years, working for the NHS
          in one of London’s teaching hospitals. I have worked across the
          department: antenatal clinic, maternity inpatients and labour ward -
          where I currently work.
        </p>
        <p>
          I am also an Adult registered nurse, I qualified over 10 years ago and
          have a background in gynaecology nursing; working in gynae oncology,
          fertility and TOP clinics and assisting in hystreroscopy, colposcopy
          and LLETZ procedures.
        </p>
        <p>
          I have always been passionate about women’s health and consider myself
          a champion for women’s and maternal health which initiated me to start
          Black Midwifery’s Instagram page.
        </p>
        <h3>Black Midwifery</h3>
        <p>
          I created this platform in January 2020 to provide maternal health
          information to everyone from expectant parents, fellow midwives and
          midwifery/nursing students.
        </p>
        <p>
          Apart from sharing knowledge, my aim for BM is to ensure
          representation of Black Women. In my first pregnancy, I researched a
          lot of pregnancy blogs, pregnancy IG pages and even pregnancy and
          birth apps and I felt they lacked in showing representation of black
          women and families. Black Midwifery is here to make a difference!
        </p>
      </Content>
    </Wrapper>
  );
};

export default About;
