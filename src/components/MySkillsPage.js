import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import { device } from '../utils/breakpoints'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
max-width: 100vw;
min-height: 100vh;
min-height: 100dvh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
overflow-x: hidden;
overflow-y: auto;
padding: 2rem;
box-sizing: border-box;

@media ${device.tablet} {
  padding: 1.5rem;
  padding-top: 5rem;
  align-items: flex-start;
}

@media ${device.mobileL} {
  padding: 1rem;
  padding-top: 4rem;
}

@media ${device.mobileS} {
  padding: 0.75rem;
  padding-top: 3.5rem;
}
`

const SocialIconsWrapper = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 100%;
max-width: 720px;
min-height: 320px;
z-index: 3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: flex-start;
box-sizing: border-box;
overflow: auto;

@media ${device.tablet} {
  padding: 1.5rem;
}

@media ${device.mobileL} {
  padding: 1.25rem;
}

@media ${device.mobileS} {
  padding: 1rem;
}

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.95em + 0.8vw);
text-align: center;
flex-wrap: wrap;
gap: 0.5rem;
margin-bottom: 1rem;

@media ${device.mobileL} {
  font-size: calc(0.9em + 0.6vw);
}

@media ${device.mobileS} {
  font-size: 0.9rem;
}

${Main}:hover & {
  & > * {
    fill: ${props => props.theme.body};
  }
}

& > *:first-child {
  margin-right: 0.5rem;
  flex-shrink: 0;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.55em + 0.7vw);
padding: 0.35rem 0;

@media ${device.mobileS} {
  font-size: 0.75rem;
}

${Main}:hover & {
  color: ${props => props.theme.body};
}

strong {
  display: block;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  font-size: 0.85em;
}
strong:first-child {
  margin-top: 0;
}
ul, p {
  margin: 0 0 0 1.25rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIconsWrapper>
  <SocialIcons theme='light'/>
</SocialIconsWrapper>
<PowerButton />
<ParticleComponent theme='light' />

            <Main>
<Title>
    <Develope width={40} height={40} /> Full Stack (MERN) & Blockchain Developer
</Title>
<Description>
<strong>Programming Languages</strong>
<p>Javascript (ES5/ES6+), TypeScript, Python</p>

<strong>Front-End Technologies</strong>
<p>React.js, Redux Toolkit, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Design, Web Performance Optimization</p>

<strong>Back-End Technologies & Databases</strong>
<p>Node.js, Express.js, MongoDB, SQL (MySQL/PostgreSQL), RESTful APIs, WebSockets, JWT Authentication, MVC Architecture, SOLID Principles</p>

<strong>Web3 / Blockchain</strong>
<p>Solana Blockchain, Web3 Wallet Integration, SPL Tokens, Transaction Handling, RPC APIs, On-chain & Off-chain Data Integration</p>

<strong>Tools</strong>
<p>Linux, Windows, VS Code, Git, GitHub, Postman, Chrome DevTools, Nginx (Basic), PM2</p>
</Description>
            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
