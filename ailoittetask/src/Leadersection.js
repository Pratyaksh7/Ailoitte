import React from 'react';
import "./Leadersection.css";
import logo1 from './images/1.png';
import logo2 from './images/2.png';
import logo3 from './images/3.png';
import logo4 from './images/4.png';
import logo5 from './images/5.png';
import logo6 from './images/6.png';
import logo7 from './images/7.png';
import logo8 from './images/8.png';
import logo9 from './images/9.png';
import logo10 from './images/10.png';

const Leadersection = () => {
    return (
        <div style={{paddingTop:"8%"}}>
            <h2>Trusted by the Industry Leaders</h2>
            <div className="logos">
                <div className="logo">
                    <img src={logo1} alt="logo1" />
                </div>
                <div className="logo">
                    <img src={logo2} alt="logo2" />
                </div>
                <div className="logo">
                    <img src={logo3} alt="logo3" />
                </div>
                <div className="logo">
                    <img src={logo4} alt="logo4" />
                </div>
                <div className="logo">
                    <img src={logo5} alt="logo5" />
                </div>
                <div className="logo">
                    <img src={logo6} alt="logo6" />
                </div>
                <div className="logo">
                    <img src={logo7} alt="logo7" />
                </div>
                <div className="logo">
                    <img src={logo8} alt="logo8" />
                </div>
                <div className="logo">
                    <img src={logo9} alt="logo9" />
                </div>
                <div className="logo">
                    <img src={logo10} alt="logo10" />
                </div>
            </div>
        </div>
    )
}

export default Leadersection;
