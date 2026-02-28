import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import { device } from '../utils/breakpoints'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
max-width: 100vw;
min-height: 100vh;
min-height: 100dvh;
position: relative;
overflow-x: hidden;
overflow-y: auto;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}

@media ${device.tablet} {
  width: 25vw;
  top: 8%;
  right: 3%;
}

@media ${device.mobileL} {
  width: 30vw;
  top: 5%;
  right: 2%;
}

@media ${device.mobileM} {
  width: 35vw;
  top: 4%;
}

  @media ${device.mobileS} {
  width: 40vw;
  top: 3%;
  right: 0;
}
`

const SocialIconsWrapper = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  overflow: auto;

  @media ${device.tablet} {
    width: 65vw;
    left: calc(3rem + 5vw);
    top: 8rem;
    padding: 1.5rem;
    font-size: calc(0.6rem + 1.2vw);
  }

  @media ${device.mobileL} {
    width: 88vw;
    left: 50%;
    transform: translateX(-50%);
    top: 8rem;
    height: auto;
    min-height: 55vh;
    max-height: 70vh;
    overflow: auto;
    padding: 1.5rem 1.25rem;
    font-size: calc(0.65rem + 2vw);
  }

  @media ${device.mobileM} {
    width: 92vw;
    top: 7rem;
    font-size: calc(0.7rem + 1.5vw);
  }

  @media ${device.mobileS} {
    width: 94vw;
    left: 50%;
    transform: translateX(-50%);
    top: 6rem;
    padding: 1.25rem 1rem;
    font-size: 0.85rem;
    min-height: 50vh;
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIconsWrapper>
                    <SocialIcons theme='dark' />
                </SocialIconsWrapper>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                    Hello, I’m Gourav Mishra from New Delhi, India — a passionate MERN Stack Developer focused on building scalable, high-performance web applications.

                    <br /><br />

                    I specialize in creating clean, efficient, and user-centric digital experiences. My approach combines strong backend architecture with intuitive frontend design to deliver products that are not just functional, but impactful.

                    <br /><br />

                    I enjoy working across the full development cycle — from designing APIs and optimizing databases to crafting responsive interfaces that provide seamless user experiences.

                    <br /><br />

                    Beyond coding, I constantly explore new technologies, research better solutions, and refine my skills to stay ahead in the evolving tech ecosystem. When I’m not building applications, you’ll find me gaming — another space where strategy, logic, and creativity come together.
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
