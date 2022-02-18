import React from 'react'
import {Carousel} from 'react-bootstrap'
import imageone from './assets/trytogame.jpg';
import imagetwo from './assets/gamingtext.jpg';
import imagethree from './assets/gamingimagetwo.jpg';


export default function BootstrapCarousel() {
    return (
        <div>
            <Carousel className="h-75">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageone}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagethree}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagetwo}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
