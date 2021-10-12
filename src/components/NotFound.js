import React from 'react'
import './NotFound.css'
import image from '../images/404.jpg'

export default function NotFound() {
    return (
        <div className="notFound">
            <img src={image} alt="Resource not found, please try again."/>
            <h1>RESOURCE NOT FOUND</h1>
        </div>
    )
}
