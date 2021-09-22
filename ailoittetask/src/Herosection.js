import React from 'react';
import Carouselcontainer from './Carouselcontainer';
import './Herosection.css';
import Leadersection from './Leadersection';


const Herosection = () => {
    return (
        <div className="heroSection">
            <div className="container">
                <h1>Maps and location for developers</h1>
                <p>Precise location data and powerful developer tools to change the way we navigate the world.</p>
                <a href="/">Start mapping for free</a>
            </div>
            <Carouselcontainer />
            <Leadersection />
            <button>View customer stories</button>
        </div>
    )
}

export default Herosection;
