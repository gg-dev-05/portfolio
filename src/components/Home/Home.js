import React from 'react'
import './Home.css'

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


export default function Home() {



    return (
        <div className="home-content page">
            <div className="content">
                Hi, Welcome to my portfolio. <br /> I am Garvit Galgat, a Full-Stack Developer.

            </div>

            <div className="resume">
                <a href="https://drive.google.com/file/d/1n2q5Pe9g5XD98oaflmF1lyuuf_CK4TB-/view" target="_blank" rel="noreferrer">
                    <AwesomeButton type="primary"><i className="fas fa-download"></i>View My Resume</AwesomeButton>

                </a>
            </div>

        </div>
    )
}
