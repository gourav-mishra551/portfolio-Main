import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import { device, size } from '../utils/breakpoints'

const BoxWrapper = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 65vw;
height: 55vh;
z-index: 5;
@media ${device.tablet} {
  width: 85vw;
  height: 60vh;
}
@media ${device.mobileL} {
  width: 90vw;
  height: auto;
  min-height: 75vh;
  overflow: visible;
}
`

const BoxContent = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
z-index: 10;
@media ${device.mobileL} {
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem 0;
}
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
min-width: 0;
@media ${device.mobileL} {
  width: 100%;
  min-height: 40vh;
  justify-content: center;
  align-items: center;
}
.pic-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
@media ${device.mobileL} {
  .pic-wrapper {
    position: relative;
    inset: auto;
    align-items: center;
  }
}
.pic {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: auto;
  max-height: 50vh;
  max-width: 100%;
  object-fit: contain;
  object-position: center bottom;
}
@media ${device.tablet} {
  .pic {
    max-height: 45vh;
  }
}
@media ${device.mobileL} {
  .pic {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    max-height: 35vh;
    width: auto;
    height: auto;
    object-position: center center;
  }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
gap: 0.5rem;
min-width: 0;
@media ${device.tablet} {
  padding: 1.5rem;
  font-size: calc(0.9em + 1vw);
}
@media ${device.mobileL} {
  padding: 1rem 1.25rem;
  font-size: 1rem;
  min-height: auto;
  justify-content: center;
  gap: 0.75rem;
}
`

const IntroDescription = styled(motion.h6)`
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
font-size: calc(0.5rem + 1.5vw);
font-weight: 300;
line-height: 1.5;
width: 100%;
min-width: 0;
height: auto;
overflow: hidden;
word-wrap: break-word;
overflow-wrap: break-word;
word-break: break-word;
@media ${device.mobileL} {
  font-size: 0.85rem;
  line-height: 1.6;
}
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }
  }
}

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${size.mobileL})`)
    setIsMobile(mq.matches)
    const handler = () => setIsMobile(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <BoxWrapper
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isMobile ? '75vh' : '55vh',
        opacity: 1
      }}
      transition={{
        height: { type: 'spring', stiffness: 50, damping: 15, delay: 0.5 },
        opacity: { duration: 0.6, delay: 0.3 }
      }}
    >
      <BoxContent>
        <SubBox>
          <Text
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>Hi,</motion.h1>
            <motion.h3 variants={itemVariants}>I'm Gourav.</motion.h3>
            <IntroDescription className="intro-description" variants={itemVariants}>
              I craft elegant, user-focused web experiences with clean code and thoughtful design.
            </IntroDescription>
          </Text>
        </SubBox>
        <SubBox>
          <motion.div
            className="pic-wrapper"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img className="pic" src={Me} alt="Gourav" />
          </motion.div>
        </SubBox>
      </BoxContent>
    </BoxWrapper>
  )
}

export default Intro
