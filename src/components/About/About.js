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
                        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><i className="fab fa-html5 fa-3x html" title="HTML5"></i></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"><i className="fab fa-css3 fa-3x css" title="CSS3"></i></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><i className="fab fa-js fa-3x javascript" title="Javascript"></i></a>
                        <a href="https://sass-lang.com/"><i className="fab fa-sass fa-3x sass" title="SASS"></i></a>
                        <a href="https://getbootstrap.com/"><i className="fab fa-bootstrap fa-3x bootstrap" title="Bootstrap"></i></a>
                        <a href="https://reactjs.org/"><i className="fab fa-react fa-3x react" title="React"></i></a>
                    </div>

                </div>

                <div className="backend">
                    <h4>Backend Technologies</h4>
                    <div className="items">
                        <a href="https://nodejs.org/en/"><i className="fab fa-node fa-3x node" title="NodeJs"></i></a>
                        <a href="https://www.python.org/"><i className="fab fa-python fa-3x python" title="Python"></i></a>
                        <a href="https://expressjs.com/"><img className="express" src={express} alt="express" /></a>
                        <a href="https://flask.palletsprojects.com/en/1.1.x/"><img className="flask" src={flask} alt="flask" /></a>
                        <a href="https://www.heroku.com/"><img className="heroku" src={heroku} alt="heroku" /></a>
                    </div>
                </div>

                <div className="database">
                    <h4>Databases</h4>
                    <div className="items">
                        <a href="https://www.mysql.com/"><img className="mysql" src={mysql} alt="mysql" /></a>
                        <a href="https://www.mongodb.com/"><img className="mongo" src={mongo} alt="mongo" /></a>

                    </div>
                </div>
            </div>



        </div>
    )
}
