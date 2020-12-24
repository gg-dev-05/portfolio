import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'

import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <Router>
                <div className="nav">
                    <div className="logo">
                        <h2>Garvit Galgat</h2>

                    </div>
                    <div className="links">
                        <Link to={'/'}><span>Home</span></Link>
                        <Link to={'/about'}><span>About</span></Link>
                        <Link to={'/about'}><span>My Work</span></Link>
                        <Link to={'/contact'}><span>Contact</span></Link>
                    </div>

                </div>

                <div className="main">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />

                    </Switch>
                </div>

            </Router>

        </div>
    )
}
