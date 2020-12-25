import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                        <span><NavLink exact to="/" activeClassName="active">Home</NavLink></span>
                        <span><NavLink to="/about" activeClassName="active">About</NavLink></span>
                        <span><NavLink to="/projects" activeClassName="active">My Work</NavLink></span>
                        <span><NavLink to="/contact" activeClassName="active">Contact</NavLink></span>
                    </div>

                </div>

                <div className="main">

                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={30000} classNames="fade">
                                <Switch location={location}>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/contact' component={Contact} />
                                    <Route path='/projects' component={Projects} />
                                    <Route path='/about' component={About} />
                                    <Redirect to="/" />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />

                </div>

            </Router>

        </div>
    )
}
