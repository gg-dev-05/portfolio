import React from 'react'
import { useEffect } from "react";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import './Contact.css'

export default function Contact() {



    return (
        <div className="contact page">
            <h1>CONTACT ME</h1>

            <form action="">
                <div className="name">
                    <textarea placeholder="Name" id="name-textarea" name="name" ></textarea>
                </div>

                <div className="email">
                    <textarea placeholder="Email" id="email-textarea" name="email" ></textarea>
                </div>

                <div className="subject">
                    <textarea placeholder="Subject" id="subject-textarea" name="subject" ></textarea>
                </div>

                <div className="message">
                    <textarea placeholder="Message" id="message-textarea" name="message" ></textarea>
                </div>
                <div className="send-button">
                    <AwesomeButton type="primary">Send</AwesomeButton>

                </div>
            </form>
        </div>
    )
}
