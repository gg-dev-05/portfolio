import React from 'react'
import './About.css'
import { useEffect } from "react";
import mysql from '../../data/mysql-6.svg'
import express from '../../data/express-109.svg'
import flask from '../../data/flask.svg'
import heroku from '../../data/heroku-1.svg'
import mongo from '../../data/mongodb-icon-1.svg'
export default function About() {



    return (
        <div className="about-me page">

            <span className="heading">I am <span className="change-on-hover">Garvit Galgat</span>,</span>
            <span className="content"> a 2nd yr. B.Tech CSE student of <span className="change-on-hover"> Indian Institute of Technology Indore</span></span>.

            <div>I am a budding <span className="change-on-hover">Full Stack Developer</span> learning about different tech stacks and making various <span className="change-on-hover">projects</span> and
            participating in various <span className="change-on-hover">hackathons</span>.
            </div>

            <div className="stack">
                <div className="frontend">
                    <h4>Frontend Technologies </h4>
                    <div className="items">
                        <i className="fab fa-html5 fa-3x" title="HTML5"></i>
                        <i className="fab fa-css3 fa-3x" title="CSS3"></i>
                        <i className="fab fa-js fa-3x" title="Javascript"></i>
                        <i className="fab fa-sass fa-3x" title="SASS"></i>
                        <i className="fab fa-bootstrap fa-3x" title="Bootstrap"></i>
                        <i className="fab fa-react fa-3x" title="React"></i>
                    </div>

                </div>

                <div className="backend">
                    <h4>Backend Technologies</h4>
                    <div className="items">
                        <i className="fab fa-node fa-3x" title="NodeJs"></i>
                        <i className="fab fa-python fa-3x" title="Python"></i>
                        <img className="express" src={express} alt="express" />
                        <img className="flask" src={flask} alt="flask" />
                        <img className="heroku" src={heroku} alt="heroku" />
                    </div>
                </div>

                <div className="database">
                    <h4>Databases</h4>
                    <div className="items">
                        <img className="mysql" src={mysql} alt="mysql" />
                        <img className="mongo" src={mongo} alt="mongo" />

                    </div>
                </div>
            </div>



        </div>
    )
}
