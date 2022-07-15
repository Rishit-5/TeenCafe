import React from 'react'
import {Carousel} from 'react-bootstrap'
import imageone from './assets/trytogame.jpg';
import imagetwo from './assets/gamingtext.jpg';
import imagethree from './assets/gamingimagetwo.jpg';
import "./index.css"

export default function BootstrapCarousel() {
    let height;
    if (window.innerHeight < 900){
        height = window.innerHeight/2
    } else {
        height = window.innerHeight
    }
    return (
        <div>
            <Carousel className="h-75">
                <Carousel.Item className="h-50">
                    <img
                        className="d-block w-100"
                        src={imageone}
                        height = {window.innerHeight/(1.5)}
                        alt="First slide"
                        style = {{objectFit: "cover"}}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagethree}
                        alt="Second slide"
                        height = {window.innerHeight/(1.5)}
                        style = {{objectFit: "cover"}}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagetwo}
                        alt="Third slide"
                        height = {window.innerHeight/(1.5)}
                        style = {{objectFit: "cover"}}
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
