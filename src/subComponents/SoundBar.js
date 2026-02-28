import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useBackground } from '../context/BackgroundContext'
import { device } from '../utils/breakpoints'

import music from "../assets/audio/u-said-it-v13-1167.mp3"

const Box = styled.div`
display: flex;
align-items: center;
cursor: pointer;
position: fixed;
left: 6rem;
top: 2rem;
z-index: 10;
@media ${device.tablet} {
  left: 4.5rem;
  top: 1.5rem;
}
@media ${device.mobileL} {
  left: 3.9rem;
  top: 1.25rem;
}

&>*:nth-child(1){
  animation-delay: 0.2s;
}
&>*:nth-child(2){
  animation-delay: 0.3s;
}
&>*:nth-child(3){
  animation-delay: 0.4s;
}
&>*:nth-child(4){
  animation-delay: 0.5s;
}
&>*:nth-child(5){
  animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
/* Modal open: left is black -> white bars. Modal closed: light screen -> black bars. */
background: ${props => props.$dark ? '#FCF6F4' : '#000000'};
border: 1px solid ${props => props.$dark ? '#000000' : '#FCF6F4'};
animation: ${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin: 0 0.2rem;
`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);
    const { isDarkLeft } = useBackground();

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} $dark={isDarkLeft}/>
            <Line click={click} $dark={isDarkLeft}/>
            <Line click={click} $dark={isDarkLeft}/>
            <Line click={click} $dark={isDarkLeft}/>
            <Line click={click} $dark={isDarkLeft}/>


            <audio src={music} ref={ref}  loop />
        </Box>
    )
}

export default SoundBar
