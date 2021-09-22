import React from 'react'
import "./Customershowcase.css";
import straightawaylogo from './images/straightaway-logo.png';
import showcase from './images/showcase.png';

const Customershowcase = () => {
    return (
        <div className="showcase-container">
            <div className="section5">
                <div className="showcase-text">
                    <div className="title">Customer Showcase</div>
                    <img src={straightawaylogo} alt="straightawaylogo" />
                    <p>Plan and optimize your route at the snap of a photo</p>
                    <div className="showcase-button">
                        <button>Read customer showcase</button>
                    </div>
                </div>
                <div className="showcase-image">
                    <img src={showcase} alt="showcase" />
                </div>
            </div>
        </div>
    )
}

export default Customershowcase
