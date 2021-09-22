import React from 'react';
import "./Carouselcontainer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img8 from './images/img8.png';

const Carouselcontainer = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{ height:"50vh" }} src={img4} alt="First slide" />
                <Carousel.Caption style={{backgroundColor:"transparent"}}>
                <div className="title">Product Update</div>
                <h1 style={{backgroundColor:"transparent", fontSize:"32px"}}>Announcing Mapbox Dash </h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img style={{ height:"50vh" }} src={img5} alt="Second slide" />
                <Carousel.Caption style={{backgroundColor:"transparent"}}>
                <div className="title">Product Update</div>
                <h1 style={{backgroundColor:"transparent", fontSize:"32px"}}>Tiling Service</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img style={{ height:"50vh" }} src={img8} alt="Third slide" />
                <Carousel.Caption style={{backgroundColor:"transparent"}}>
                <div className="title">Product Update</div>
                <h1 style={{backgroundColor:"transparent", fontSize:"32px"}}>Navigation SDK </h1>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )  
}

export default Carouselcontainer;
