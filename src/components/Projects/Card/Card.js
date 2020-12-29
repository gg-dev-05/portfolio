import React from 'react'
import './Card.css'

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Card(props) {


    var tags = [];

    for (let i = 0; i < props.tags.length; i++) {
        var delay = Number(i) * 0.07;
        delay = delay + "s"
        tags.push(
            <span key={i} className="bouncy" style={{ animationDelay: delay }}>{props.tags[i]}</span>
        )
    }
    return (


        <div className="Card">
            <img className="back" src={props.img1} alt="back" />
            <div className="front visible-on-hover">
                <div className="container">
                    <div className="tags">
                        {tags}
                    </div>
                    <a href={props.link} target="_blank" rel="noreferrer"><AwesomeButton type="primary">Know More</AwesomeButton></a>

                </div>
                <img className="" src={props.img2} alt="front" />
            </div>

        </div>
    )
}
