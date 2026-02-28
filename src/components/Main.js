import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { Link } from "react-router-dom"
import { useBackground } from '../context/BackgroundContext'
import { device } from '../utils/breakpoints'



const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
@media ${device.tablet} {
  padding: 1rem;
}
@media ${device.mobileL} {
  padding: 0.75rem;
}
`

const Contact = styled(Link)`
color: ${props => props.theme.text} !important;
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 10;
display: flex;
align-items: center;
font-size: calc(0.9rem + 0.5vw);
@media ${device.mobileL} {
  font-size: 0.9rem;
}
&:hover, &:visited, &:active {
  color: ${props => props.theme.text} !important;
}
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 10;
@media ${device.mobileL} {
  font-size: 0.9rem;
}
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 10;
@media ${device.mobileL} {
  font-size: 0.9rem;
}
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
gap: 20px;
justify-content: space-evenly;
z-index: 10;
@media ${device.mobileL} {
  bottom: 0.75rem;
  padding: 0 0.5rem;
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
margin-right: 20px;
@media ${device.mobileL} {
  font-size: 0.9rem;
}
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
margin-left: 40px;
@media ${device.mobileL} {
  font-size: 0.9rem;
}
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const CenterWrapper = styled.div`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
transition: all 1s ease;
z-index: 10;
@media ${device.mobileL} {
  top: ${props => props.click ? '80%' : '50%'};
  left: ${props => props.click ? '88%' : '50%'};
}
`

const Center = styled(motion.button)`
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&>:first-child {
  animation: ${rotate} infinite 1.5s linear;
}
&>:last-child {
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);
    const { setIsDarkLeft } = useBackground();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleClick = () => setClick(!click);

    // Auto-click once after 2 seconds on page load
    useEffect(() => {
        const timer = setTimeout(() => setClick(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Sync dark background for SoundBar: when modal open, left half is black -> SoundBar white; else black
    useEffect(() => {
        setIsDarkLeft(click);
    }, [click, setIsDarkLeft]);

    // Reset when leaving Main (navigate to other page)
    useEffect(() => {
        return () => setIsDarkLeft(false);
    }, [setIsDarkLeft]);

    // Track viewport for responsive YinYang size
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        setIsSmallScreen(mq.matches);
        const handler = () => setIsSmallScreen(mq.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    return (
        <MainContainer>
            <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                <CenterWrapper click={click}>
                    <Center
                        click={click}
                        onClick={() => handleClick()}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <YinYang
                            as="span"
                            width={click ? (isSmallScreen ? 80 : 120) : (isSmallScreen ? 120 : 200)}
                            height={click ? (isSmallScreen ? 80 : 120) : (isSmallScreen ? 120 : 200)}
                            fill="currentColor"
                        />
                        <span>click here</span>
                    </Center>
                </CenterWrapper>
                {/* add a link of contact form */}
                <Contact to="/contact">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ margin: 0 }}
                    >
                        Say hi..
                    </motion.h2>
                </Contact>
                <BLOG to="/blog">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        view
                    </motion.h2>
                </BLOG>
                <WORK to="/work" click={+click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>

                </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
