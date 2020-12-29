// import { useEffect } from "react";
import React from 'react'
import './Projects.css'

import Card from './Card/Card'
export default function Projects() {
    return (
        <div className="my-work page">
            <Card img1="https://picsum.photos/id/237/200/300" img2="https://picsum.photos/id/232/200/300"
                tags={["HTML", "CSS", "JS", "JQuery", "Heroku"]} link="https://github.com/gg-dev-05/clubsiiti"
            />
            <Card img1="https://picsum.photos/id/217/200/300" img2="https://picsum.photos/id/230/200/300"
                tags={["Heroku", "ReactJs", "MYSQL", "Flask"]} link="https://github.com/gg-dev-05/secure-blink"
            />
            <Card img1="https://picsum.photos/id/234/200/300" img2="https://picsum.photos/id/111/200/300"
                tags={["JSX", "GCP", "Mongod", "JQuery", "HTML"]} link="https://github.com/gg-dev-05/secure-blink"
            />


        </div>
    )
}
