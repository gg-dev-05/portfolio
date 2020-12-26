import React from 'react'
import { useEffect } from "react";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import axios from 'axios'

import './Contact.css'

export default function Contact() {

    useEffect(() => {
        console.log("I am ready")
    })

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    var handleChange = (elem) => {
        var id = elem.target.id
        var value = document.getElementById(id).value

        if (id === 'email-textarea') {
            console.log(validateEmail(value))
        }

    }

    var validateData = () => {
        var ids = ['name', 'email', 'subject', 'message']
        var data = []
        ids.forEach((id) => {
            var value = document.getElementById(id + "-textarea").value
            data.push(value)
        })
        var json = {
            "name": data[0],
            "from": data[1],
            "subject": data[2],
            "message": data[3]
        }
        axios.post('https://mail-sender-g.herokuapp.com/send', data = json)
            .then((r) => console.log(r))
    }

    var handleClick = () => {
        validateData();
    }

    return (
        <div className="contact page">
            <h1>CONTACT ME</h1>

            <div>
                <div className="name">
                    <textarea placeholder="Name" id="name-textarea" name="name" onChange={handleChange} ></textarea>
                </div>

                <div className="email">
                    <textarea placeholder="Email" id="email-textarea" name="email" onChange={handleChange}></textarea>
                </div>

                <div className="subject">
                    <textarea placeholder="Subject" id="subject-textarea" name="subject" onChange={handleChange}></textarea>
                </div>

                <div className="message">
                    <textarea placeholder="Message" id="message-textarea" name="message" onChange={handleChange}></textarea>
                </div>
                <div className="send-button" onClick={handleClick}>
                    <AwesomeButton type="primary">Send</AwesomeButton>

                </div>
            </div>
        </div>
    )
}
