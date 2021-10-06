import React from 'react';
import "./Region.css";
import Flags from 'country-flag-icons/react/3x2'
// import { BsXLg } from "react-icons/bs";
const Region = ({showRegion}) => {

    return (
        <div className="region-container">
            <div className="heading">Select Region</div>
            <div className="short-heading">Please Select your <b>Shipping Region</b></div>
            <div className="continents">
                <div className="continent column-1">
                    <h2>Europe</h2>
                    <div className="countries">

                        <div className="country">
                            <Flags.DE className="flag"/>
                            <small>Germany | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.FI className="flag"/>
                            <small>Finland | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.NO className="flag"/>
                            <small>Norway | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.DK className="flag"/>
                            <small>Denmark | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.FR className="flag"/>
                            <small>France | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.SE className="flag"/>
                            <small>Sweden | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.NL className="flag"/>
                            <small>Netherlands | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.GB className="flag"/>
                            <small>United Kingdom | &euro;</small>
                        </div>

                        
                    </div>
                </div>

                <div className="continent column-3">
                    <h2>Asia</h2>
                    <div className="countries">
                        <div className="country">
                            <Flags.IN className="flag"/>
                            <small>India| &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.CN className="flag"/>
                            <small>China | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.KR className="flag"/>
                            <small>South Korea | &euro;</small>
                        </div>
                    </div>
                </div>
                

                <div className="continent column-3">
                    <h2>North America</h2>
                    <div className="countries ">
                        <div className="country">
                            <Flags.CA  className="flag"/>
                            <small>Canada | &euro;</small>
                        </div>

                        <div className="country">
                            <Flags.US className="flag"/>
                            <small>United States | &euro;</small>
                        </div>

                       
                        </div>
                    </div>
                </div>

                
            </div>

        
    )
}

export default Region
