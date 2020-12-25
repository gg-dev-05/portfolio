import React from 'react'
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'

import { AwesomeButton } from "react-awesome-button";
import './Footer.css'
export default function Footer() {
    return (
        <div className="Footer">


            <a href="https://github.com/gg-dev-05" target="_blank" rel="noreferrer">
                <AwesomeButton type="github"><i className="fab fa-github fa-2x"></i></AwesomeButton>
            </a>

            <a href="https://www.linkedin.com/in/garvit-galgat-17122a191/" target="_blank" rel="noreferrer">
                <AwesomeButton type="linkedin"><i className="fab fa-linkedin fa-2x"></i></AwesomeButton>
            </a>

            <a href="https://www.instagram.com/garvit.05/" target="_blank" rel="noreferrer">
                <AwesomeButton type="instagram"><i className="fab fa-instagram fa-2x"></i></AwesomeButton>
            </a>
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type="github" url="https://github.com/gg-dev-05"></AwesomeButtonSocial>
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type="linkedin" url="https://www.linkedin.com/in/garvit-galgat-17122a191/"></AwesomeButtonSocial>
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type="instagram" url="https://www.instagram.com/garvit.05/"></AwesomeButtonSocial>
        </div>
    )
}
