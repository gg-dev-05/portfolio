import React from 'react'
import './Card.css'
export default function Card(props) {


    return (

        <div className="Card">
            <img className="back" src={props.img1} alt="back" />
            <div className="front visible-on-hover">
                <div className="container">
                    <div className="tags">
                        <span>Item1</span>
                        <span>Item1</span>
                        <span>Item1</span>
                        <span>Item1</span>
                        <span>Item1</span>


                    </div>

                </div>
                <img className="" src={props.img2} alt="front" />
            </div>

        </div>
    )
}
