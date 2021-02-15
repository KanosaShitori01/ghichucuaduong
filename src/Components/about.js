import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <div>
            <p>Version 1.0.0</p>
            <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
export default About;