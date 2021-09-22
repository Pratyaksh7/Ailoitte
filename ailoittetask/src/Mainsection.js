import React from 'react';
import "./Mainsection.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import Getstartedsection from './Getstartedsection';
import Customershowcase from './Customershowcase';


const Mainsection = () => {
    return (
        <div className="mainSection">
            <div className="mainSection-containers">
                <div className="container1">
                    <div className="heading-text">
                        <h2>Navigation</h2>
                        <p>Mapbox provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.</p>
                        <button>Explore Navigation</button>
                    </div>
                    <div className="navigation-img">
                        <img src={img1} alt="img1" />
                        <img src={img2} alt="img2" />
                    </div>
                </div>

                <div className="container2">
                    <div className="heading-text">
                        <h2>Mapbox Studio</h2>
                        <p>Mapbox Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn.</p>
                        <button>Learn about Studio</button>
                    </div>
                    <div className="navigation--img">
                        <img src={img3} alt="img3" />
                    </div>
                </div>

                <div className="container3">
                    <div className="heading-text">
                        <h2>Maps</h2>
                        <p>Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.</p>
                        <button>Learn about Maps</button>
                    </div>
                    <div className="navigation-img">
                        <img src={img4} alt="img4" />
                        <img src={img5} alt="img5" />
                    </div>
                </div>


                <div className="container4">
                    <div className="heading-text">
                        <h2>Search</h2>
                        <p>Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.</p>
                        <button>Discover Search</button>
                    </div>
                    <div className="navigation--img">
                        <img src={img6} alt="img6" />
                    </div>
                </div>

                <Customershowcase />


                <div className="container6">
                    <div className="heading-text">
                        <h2> Vision</h2>
                        <p>The Mapbox Vision SDK describes every curb, lane, street sign, and road hazard it sees as data. Developers use the SDK's AI-powered semantic segmentation, object detection, and classification to deliver precise navigation guidance, display driver assistance alerts, and detect and map road incidents.</p>
                        <button>Discover Vision</button>
                    </div>
                    <div className="navigation--img">
                        <img src={img7} alt="img7" />
                    </div>
                </div>


                <div className="container7">
                    <div className="heading-text">
                        <h2>Data</h2>
                        <p>Our data is powered by hundreds of data sources, and a distributed global users base of more than half a billion monthly active users.</p>
                        <button>Learn about Data</button>
                    </div>
                    <div className="navigation--img">
                        <img src={img8} alt="img8" />
                    </div>
                </div>


                <div className="container8">
                    <div className="heading-text">
                        <h2> Atlas</h2>
                        <p>With Atlas, you can self-host Mapbox maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Mapbox Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Mapbox GL JS v2 and Mapbox Maps SDKs for iOS and Android.</p>
                        <button>Self-host with Atlas</button>
                    </div>
                    <div className="navigation--img">
                        <img src={img9} alt="img9" />
                    </div>
                </div>

                <Getstartedsection />

            </div>
        </div>
    )
}

export default Mainsection;
