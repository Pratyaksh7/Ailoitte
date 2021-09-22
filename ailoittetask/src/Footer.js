import React from 'react';
import "./Footer.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="upper-footer">
                <a href="/">mapbox</a>
                <div className="footer-nav">
                    <div className="nav1">
                        <h3>Products</h3>
                        <ul>
                            <li>Maps</li>
                            <li>Navigation SDK</li>
                            <li>Studio</li>
                            <li>Data</li>
                            <li>Search SDK</li>
                            <li>Mobile Maps SDK</li>
                            <li>Vision</li>
                            <li>Atlas</li>
                            <li>Dash</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    <div className="nav2">
                        <h3>Company</h3>
                        <ul>
                            <li>About Mapbox</li>
                            <li>Customers</li>
                            <li>Careers</li>
                            <li>Community</li>
                            <li>Press</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="nav3">
                        <h3>Developers</h3>
                        <ul>
                            <li>Documentation</li>
                            <li>Getting started</li>
                            <li>Tutorials</li>
                            <li>Troubleshooting</li>
                            <li>Webinars</li>
                            <li>How-to-videos</li>
                            <li>Developer Network</li>
                            <li>Platform</li>
                            <li>Status</li>
                            <li>Support</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="lower-footer">
                <div className="section1">
                    <div>&copy; Mapbox</div>
                    <button>Terms</button>
                    <button>Privacy</button>
                    <button>Security</button>
                </div>
                <div className="section2">
                    <a href="/">
                        <SocialMediaIconsReact icon="youtube" iconColor="#A0AABA" backgroundColor="transparent" borderColor="transparent" />
                    </a>
                    <a href="/">
                        <SocialMediaIconsReact icon="github" iconColor="#A0AABA" backgroundColor="transparent" borderColor="transparent" />
                    </a>
                    <a href="/">
                        <SocialMediaIconsReact icon="twitter" iconColor="#A0AABA" backgroundColor="transparent" borderColor="transparent" />
                    </a>
                    <a href="/">
                        <SocialMediaIconsReact icon="facebook" iconColor="#A0AABA" backgroundColor="transparent" borderColor="transparent" />
                    </a>
                    <a href="/">
                        <SocialMediaIconsReact icon="instagram" iconColor="#A0AABA" backgroundColor="transparent" borderColor="transparent" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
