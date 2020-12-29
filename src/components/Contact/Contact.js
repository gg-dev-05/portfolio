import React, { useState } from 'react'
// import { useEffect } from "react";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import axios from 'axios'

import './Contact.css'

export default function Contact() {

    var [buttonState, setButtonState] = useState(false)

    var validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        var valid = re.test(document.getElementById("email-textarea").value);
        if (!valid) {
            document.getElementById("email-textarea").value = ""
            document.getElementById("email-textarea").focus()
        }
    }

    var handleChange = (elem) => {
        // var id = elem.target.id
        // var value = document.getElementById(id).value

        // if (id === 'email-textarea') {
        //     // console.log(validateEmail(value))
        // }

    }

    var validateData = () => {
        var ids = ['name', 'email', 'subject', 'message']
        var data = []
        var allOk = true;
        ids.forEach((id) => {
            var value = document.getElementById(id + "-textarea").value
            if (allOk) {
                // console.log(value)
                if (value === '') {
                    document.getElementById(id + '-textarea').focus();
                    allOk = false;
                }
                else {
                    data.push(value)

                }
            }
        })
        if (allOk) {
            var json = {
                "name": data[0],
                "from": data[1],
                "subject": data[2],
                "message": data[3]
            }
            // console.log(json)
            // console.log(document.getElementsByClassName('send-button'))
            setButtonState(!buttonState)
            axios.post('https://mail-sender-g.herokuapp.com/send', data = json)
                .then((r) => {
                    setButtonState(!setButtonState)
                })
        }


    }

    var handleClick = () => {
        validateData();
    }

    return (
        <div className="contact page">
            <h1>Get In Touch</h1>

            <div>
                <div className="name">
                    <textarea placeholder="Name" id="name-textarea" name="name" onChange={handleChange} ></textarea>
                </div>

                <div className="email">
                    <textarea placeholder="Email" id="email-textarea" name="email" onChange={handleChange} onBlur={validateEmail}></textarea>
                </div>

                <div className="subject">
                    <textarea placeholder="Subject" id="subject-textarea" name="subject" onChange={handleChange}></textarea>
                </div>

                <div className="message">
                    <textarea placeholder="Message" id="message-textarea" name="message" onChange={handleChange}></textarea>
                </div>
                <div className="send-button" onClick={handleClick}>
                    <AwesomeButton id="awesome-button" type="primary" disabled={buttonState}>Send</AwesomeButton>

                </div>
            </div>
        </div>
    )
}
