import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

import '../css/Navbar.css'

export default function Navbar() {
    return (
        <div>
            <Router>
                <div className="nav">
                    <div className="logo">
                        <h2>Welcome Welcome</h2>

                    </div>
                    <div className="links">
                        <span><Link to={'/'} onClick={() => { console.log("clicked") }}>Home</Link></span>
                        <span><Link to={'/about'}>About</Link></span>
                        <span><Link to={'/about'}>My Work</Link></span>
                        <span><Link to={'/contact'}>Contact</Link></span>
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
