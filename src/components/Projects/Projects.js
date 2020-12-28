// import { useEffect } from "react";
import React from 'react'
import './Projects.css'

import Card from './Card/Card'
export default function Projects() {
    return (
        <div className="my-work page">
            <Card img1="https://picsum.photos/id/237/200/300" img2="https://picsum.photos/id/232/200/300" />
            <Card img1="https://picsum.photos/id/217/200/300" img2="https://picsum.photos/id/230/200/300" />
            <Card img1="https://picsum.photos/id/234/200/300" img2="https://picsum.photos/id/111/200/300" />


        </div>
    )
}
