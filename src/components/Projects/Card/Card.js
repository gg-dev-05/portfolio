import React from 'react'
import './Card.css'
export default function Card() {

    var img1 = "https://picsum.photos/id/237/200/300"
    var img2 = "https://picsum.photos/id/227/200/300"



    return (

        <div className="Card">
            <img className="back" src={img1} alt="back" />
            <div className="front visible-on-hover">
                <img className="" src={img2} alt="front" />
            </div>

        </div>
    )
}
