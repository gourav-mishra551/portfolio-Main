import React from 'react'
import './contactPage.css'
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import  {  ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

const ContactPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <div class="background">
            <PowerButton />
            <SocialIcons theme='dark'/>
            
            <div class="container">
            <form action="https://getform.io/f/87b0b4c6-dd9c-4f8d-adaf-4d6053fe261f" method="post">
                <div class="screen">
                    <div class="screen-header">
                        <div class="screen-header-left">
                            <div class="screen-header-button close"></div>
                            <div class="screen-header-button maximize"></div>
                            <div class="screen-header-button minimize"></div>
                        </div>
                        <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span>CONTACT</span>
                                <span>ME</span>
                            </div>
                            <div class="app-contact">CONTACT INFO : +91 00 00 00</div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input type="text" name="name" class="app-form-control" placeholder="NAME"  />
                                </div>
                                <div class="app-form-group">
                                    <input type='email' name="email" class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                    <input type="tel" name="phone" class="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div class="app-form-group message">
                                    <input type="text" name='message' class="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="credits">
                    inspired by
                    <svg class="dribbble" viewBox="0 0 200 200">
                        <g stroke="#ffffff" fill="none">
                            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
                            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
                            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
                        </g>
                    </svg>
                    Linux
                </div>
                </form>
            </div>
            
        </div>
        </ThemeProvider>

    )
}

export default ContactPage