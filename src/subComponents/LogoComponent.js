import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { device } from '../utils/breakpoints'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico', cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 10;
font-size: 1.8rem;
@media ${device.tablet} {
  left: 1.25rem;
  top: 1.25rem;
  font-size: 1.5rem;
}
@media ${device.mobileL} {
  left: 1rem;
  top: 1rem;
  font-size: 1.25rem;
}
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          GM
        </Logo>
    )
}

export default LogoComponent
