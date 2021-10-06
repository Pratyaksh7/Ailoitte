import React, {useState} from 'react';
import "./Navbar.css";
import Region from './Region';
import { FaBeer } from 'react-icons/fa';


function Navbar() {
    const [showRegion, setShowRegion] = useState(false);

    const openRegion = (e) => {
        e.preventDefault();
        setShowRegion(!showRegion);
        // console.log(showRegion);
    }

    return (
        <>
            <div className="navbar-container">
                <div className="segment1">
                    <p>Free Shopping Over 100</p>
                </div>
                <div className="segment2">
                    <a href='/' className="section">
                        <div className="icon"><FaBeer /></div>
                        <div className="text">Sustainability</div>
                    </a>

                    <a href='/' className="section">
                        <div className="icon"><FaBeer /></div>
                        <div className="text">Store Locator</div>
                    </a>

                    <a href='/' className="section" onClick={openRegion}>
                        <div className="icon"><FaBeer /></div>
                        <div className="text">United Kingdom | $</div>
                    </a>

                    <a href='/' className="section">
                        <div className="icon"></div>
                        <div className="text">Language</div>
                    </a>

                    <a href='/' className="section">
                        <div className="icon"></div>
                        <div className="text">My Account</div>
                    </a>
                </div>
            </div>

            {
            showRegion && <div style={{backgroundColor:"#e8e7e6"}}>
            <Region />
          </div>
        }
        </>
        
    )
}

export default Navbar
