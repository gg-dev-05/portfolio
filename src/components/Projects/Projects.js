import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import projects from './MyProjects'

import Card from './Card/Card'

export default function Projects() {

    var tags = [
        "All", "tag1", "tag2", "tag3", "tag4"
    ]
    var [currentTag, setCurrentTag] = useState("All")
    var Cards = useRef([])
    var [proj, setProj] = useState([])

    useEffect(() => {
        Cards.current = []
        projects.forEach(project => {
            if (currentTag === "All") {
                Cards.current.push(
                    <Card key={projects.indexOf(project)} img1={project['img1']} img2={project['img2']} title={project['title']}
                        tags={project['tags']} link={project['link']}
                    />
                )
            }
            else {
                project['tags'].forEach(tag => {
                    console.log(tag, currentTag)
                    if (tag === currentTag) {
                        Cards.current.push(
                            <Card key={projects.indexOf(project)} img1={project['img1']} img2={project['img2']} title={project['title']}
                                tags={project['tags']} link={project['link']}
                            />
                        )
                    }
                })
            }

        })
        console.log(Cards.current)
        setProj(Cards.current)
    }, [currentTag])

    // for (var i = 0; i < projects.length; i++) {
    //     Cards.push(
    //         <Card key={i} img1={projects[i]['img1']} img2={projects[i]['img2']} title={projects[i]['title']}
    //             tags={projects[i]['tags']} link={projects[i]['link']}
    //         />
    //     )
    // }






    const selector = []
    tags.forEach(tag => {
        selector.push(
            <button key={tags.indexOf(tag)} onClick={() => {
                setCurrentTag(tag)
            }}>{tag}</button>
        )
    })






    return (
        <div className="my-work page">
            <div className="selector">
                {selector}
            </div>
            <div className="cards">
                {proj}

            </div>

        </div>
    )
}
