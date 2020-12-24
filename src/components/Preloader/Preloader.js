import React from 'react'
import '../css/Preloader.css'
import loading from '../images/load.svg'

export default function Preloader() {
    return (
        <div id="loader">
            <img src={loading} alt="loading" />
        </div>
    )
}
