import React from 'react'
import './About.css'
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
                        <i class="fab fa-html5 fa-3x" title="HTML5"></i>
                        <i class="fab fa-css3 fa-3x" title="CSS3"></i>
                        <i class="fab fa-js fa-3x" title="Javascript"></i>
                        <i class="fab fa-sass fa-3x" title="SASS"></i>
                        <i class="fab fa-bootstrap fa-3x" title="Bootstrap"></i>
                        <i class="fab fa-react fa-3x" title="React"></i>
                    </div>

                </div>

                <div className="backend">
                    <h4>Backend Technologies</h4>
                    <div className="items">
                        <i class="fab fa-node fa-3x" title="NodeJs"></i>
                        <i class="fab fa-python fa-3x" title="Python"></i>
                        <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" title="expressJs" />
                        <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" title="Flask" />
                        <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" title="Heroku" />
                    </div>
                </div>

                <div className="database">
                    <h4>Databases</h4>
                    <div className="items">
                        <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql" title="mysql" />
                        <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongo" title="mongo" />
                    </div>
                </div>
            </div>



        </div>
    )
}
