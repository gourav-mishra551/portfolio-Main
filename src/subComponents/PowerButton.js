// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { device } from '../utils/breakpoints'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
cursor: pointer;
&:hover {
  background-color: rgba(0,25,0,0.4);
  box-shadow: 0 0 0 6px rgba(0,0,0,0.2);
}
&>*:first-child {
  text-decoration: none;
  color: inherit;
}
@media ${device.tablet} {
  top: 1.25rem;
  width: 2.25rem;
  height: 2.25rem;
}
@media ${device.mobileL} {
  top: 1rem;
  width: 2rem;
  height: 2rem;
  & svg {
    width: 22px;
    height: 22px;
  }
}
`

const PowerButton = () => {
    return (
        <Power>
        <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
        </NavLink>
        </Power>
    )
}

export default PowerButton
