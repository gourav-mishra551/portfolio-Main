import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import { Work, Experience } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import { device } from "../utils/breakpoints";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem;
  padding-top: 6rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 1.5rem;
    padding-top: 5rem;
  }

  @media ${device.mobileL} {
    padding: 1rem;
    padding-top: 4rem;
  }

  @media ${device.mobileS} {
    padding: 0.75rem;
    padding-top: 3.5rem;
  }
`;

const SocialIconsWrapper = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto 3rem;

  @media ${device.mobileL} {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  color: ${(props) => props.theme.text};
  font-family: "Karla", sans-serif;
  font-size: calc(1.25rem + 0.8vw);
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.05em;

  @media ${device.mobileL} {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ExperienceCard = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: transparent;
  padding: 1.25rem 1.5rem;
  border-radius: 0 24px 0 24px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media ${device.mobileS} {
    padding: 1rem 1.25rem;
    border-radius: 0 16px 0 16px;
  }
`;

const ExpHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
`;

const ExpCompany = styled.span`
  font-weight: 700;
  font-size: calc(1rem + 0.3vw);
`;

const ExpRole = styled.span`
  font-size: calc(0.85rem + 0.2vw);
  opacity: 0.95;
`;

const ExpMeta = styled.div`
  font-size: calc(0.75rem + 0.15vw);
  opacity: 0.85;
  margin-bottom: 0.6rem;
`;

const ExpPoints = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  font-size: calc(0.8rem + 0.15vw);
  line-height: 1.5;

  @media ${device.mobileS} {
    font-size: 0.8rem;
    padding-left: 1rem;
  }
`;

const ExpPoint = styled.li`
  margin-bottom: 0.35rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Main = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  color: ${(props) => props.theme.text};
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media ${device.mobileS} {
    gap: 1rem;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  & svg {
    width: 100%;
    height: 100%;
  }

  @media ${device.mobileL} {
    width: 56px;
    height: 56px;
    right: 0.75rem;
    bottom: 0.75rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIconsWrapper>
          <SocialIcons theme="dark" />
        </SocialIconsWrapper>
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Section>
          <SectionTitle variants={fadeIn} initial="hidden" animate="show">
            Experience
          </SectionTitle>
          <ExperienceList>
            {Experience.map((exp) => (
              <ExperienceCard
                key={exp.id}
                variants={fadeIn}
                initial="hidden"
                animate="show"
              >
                <ExpHeader>
                  <ExpCompany>{exp.company}</ExpCompany>
                  <ExpRole>{exp.role}</ExpRole>
                </ExpHeader>
                <ExpMeta>
                  {exp.period} · {exp.location}
                </ExpMeta>
                <ExpPoints>
                  {exp.points.map((point, i) => (
                    <ExpPoint key={i}>{point}</ExpPoint>
                  ))}
                </ExpPoints>
              </ExperienceCard>
            ))}
          </ExperienceList>
        </Section>

        <Section>
          <SectionTitle variants={fadeIn} initial="hidden" animate="show">
            Projects
          </SectionTitle>
          <Main variants={container} initial="hidden" animate="show">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
        </Section>

        <Rotate>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
