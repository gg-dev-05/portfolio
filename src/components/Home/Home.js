import React from 'react'
import './Home.css'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


export default function Home() {
    return (
        <div className="home-content page">
            <div className="left">
                <div className="welcome">Welcome</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore non voluptatem? Optio, iste illo maiores exercitationem autem adipisci ab facere debitis magni, voluptatem explicabo, reiciendis ex aliquam? Sed animi blanditiis suscipit quos, exercitationem nam minus? Quae, ex ipsa provident optio ipsam facere soluta, vel exercitationem tempore iure quidem quam officia facilis quis ipsum magni. Perferendis, impedit. Mollitia, dicta?</p>
            </div>

            <div className="right">
                <a href="https://drive.google.com/file/d/1n2q5Pe9g5XD98oaflmF1lyuuf_CK4TB-/view" target="_blank" rel="noreferrer">
                    <AwesomeButton type="primary"><i class="fas fa-download"></i>Download Resume</AwesomeButton>

                </a>
            </div>

        </div>
    )
}
