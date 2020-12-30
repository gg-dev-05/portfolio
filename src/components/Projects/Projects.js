// import { useEffect } from "react";
import React from 'react'
import './Projects.css'
import projects from './MyProjects'

import Card from './Card/Card'

export default function Projects() {

    // var tags = [
    //     "Flask", "MYSQL", "Heroku", "Bootstrap", "Python", "ReactJS", "SASS", "ExpressJS", "NodeJS", "BOT", "CSS", "MongoDB",
    //     "React-Native", "MERN", "JQuery", "extensions", "Flutter"
    // ]

    var tags = [
        "All", "tag1", "tag2", "tag3", "tag4", "tag5"
    ]

    var selector = []

    for (var i = 0; i < tags.length; i++) {
        selector.push(
            <span key={i} onClick={Selected_Cards(tags[i])} >{tags[i]}</span>
        )
    }

    var Cards = []

    function Selected_Cards(current = "all") {
        console.log(current)
    }

    for (i = 0; i < projects.length; i++) {
        Cards.push(
            <Card key={i} img1={projects[i]['img1']} img2={projects[i]['img2']} title={projects[i]['title']}
                tags={projects[i]['tags']} link={projects[i]['link']}
            />
        )
    }



    return (
        <div className="my-work page">
            <div className="selector">
                {selector}
            </div>
            <div className="cards">
                {Cards}

            </div>

        </div>
    )
}
