import React, {Component, useState} from 'react';
import Carousel from "../BootstrapCarousel"
import backImage from "../assets/gamingimage.jpg"
import "./Home.css"
const Home = () => {
    return (
        <div >
            <Carousel />
            <div className = "back">
                <h1 className = "aboutUsHeader">About Us</h1>
                <h4>Vision</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id finibus nisl, nec mollis nunc. Quisque suscipit diam eu laoreet consequat. Vestibulum erat ipsum, rhoncus in scelerisque sit amet, consectetur ut lorem. Maecenas volutpat condimentum elementum. Nam eget mauris et odio consequat tristique. Sed tempus suscipit mi, vitae cursus eros semper nec. Maecenas iaculis erat et purus scelerisque, et tempus justo sollicitudin. Donec mi augue, condimentum a ipsum eu, tincidunt semper urna.

                    Vestibulum vel tempus tellus. Phasellus tempus, mi at tempus posuere, leo purus gravida leo, lobortis aliquet quam ligula non arcu. Fusce in facilisis enim. Aliquam eget est id tortor dignissim vestibulum. Donec justo lacus, tristique nec auctor non, convallis vel erat. Cras elementum imperdiet felis sit amet euismod. Nulla ipsum dui, mollis et leo id, tempus lacinia purus. Integer sem nisl, dapibus in ipsum in, efficitur dignissim neque. Sed eu justo in dui blandit cursus.

                    Ut nisi ligula, condimentum non velit et, facilisis ultrices lectus. Phasellus vitae pharetra lectus. Duis efficitur, nisl eget sodales fermentum, elit nisl elementum lorem, quis vulputate est arcu ut ipsum. Aenean sit amet mi lorem. Phasellus lacinia sapien ligula, ut faucibus magna fringilla in. Etiam non neque libero. Vestibulum hendrerit facilisis augue, vel egestas augue efficitur sit amet. Donec tristique erat mi, ut interdum mauris luctus sit amet. Integer posuere nunc ac est dapibus, at volutpat sem dapibus. Vestibulum malesuada metus ante, quis dictum turpis cursus eu. Maecenas nunc dolor, porttitor a ullamcorper in, volutpat non purus.
                </p>

                <h4>Summary</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id finibus nisl, nec mollis nunc. Quisque suscipit diam eu laoreet consequat. Vestibulum erat ipsum, rhoncus in scelerisque sit amet, consectetur ut lorem. Maecenas volutpat condimentum elementum. Nam eget mauris et odio consequat tristique. Sed tempus suscipit mi, vitae cursus eros semper nec. Maecenas iaculis erat et purus scelerisque, et tempus justo sollicitudin. Donec mi augue, condimentum a ipsum eu, tincidunt semper urna.

                    Vestibulum vel tempus tellus. Phasellus tempus, mi at tempus posuere, leo purus gravida leo, lobortis aliquet quam ligula non arcu. Fusce in facilisis enim. Aliquam eget est id tortor dignissim vestibulum. Donec justo lacus, tristique nec auctor non, convallis vel erat. Cras elementum imperdiet felis sit amet euismod. Nulla ipsum dui, mollis et leo id, tempus lacinia purus. Integer sem nisl, dapibus in ipsum in, efficitur dignissim neque. Sed eu justo in dui blandit cursus.

                    Ut nisi ligula, condimentum non velit et, facilisis ultrices lectus. Phasellus vitae pharetra lectus. Duis efficitur, nisl eget sodales fermentum, elit nisl elementum lorem, quis vulputate est arcu ut ipsum. Aenean sit amet mi lorem. Phasellus lacinia sapien ligula, ut faucibus magna fringilla in. Etiam non neque libero. Vestibulum hendrerit facilisis augue, vel egestas augue efficitur sit amet. Donec tristique erat mi, ut interdum mauris luctus sit amet. Integer posuere nunc ac est dapibus, at volutpat sem dapibus. Vestibulum malesuada metus ante, quis dictum turpis cursus eu. Maecenas nunc dolor, porttitor a ullamcorper in, volutpat non purus.
                </p>

                <h4>Goals</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id finibus nisl, nec mollis nunc. Quisque suscipit diam eu laoreet consequat. Vestibulum erat ipsum, rhoncus in scelerisque sit amet, consectetur ut lorem. Maecenas volutpat condimentum elementum. Nam eget mauris et odio consequat tristique. Sed tempus suscipit mi, vitae cursus eros semper nec. Maecenas iaculis erat et purus scelerisque, et tempus justo sollicitudin. Donec mi augue, condimentum a ipsum eu, tincidunt semper urna.

                    Vestibulum vel tempus tellus. Phasellus tempus, mi at tempus posuere, leo purus gravida leo, lobortis aliquet quam ligula non arcu. Fusce in facilisis enim. Aliquam eget est id tortor dignissim vestibulum. Donec justo lacus, tristique nec auctor non, convallis vel erat. Cras elementum imperdiet felis sit amet euismod. Nulla ipsum dui, mollis et leo id, tempus lacinia purus. Integer sem nisl, dapibus in ipsum in, efficitur dignissim neque. Sed eu justo in dui blandit cursus.

                    Ut nisi ligula, condimentum non velit et, facilisis ultrices lectus. Phasellus vitae pharetra lectus. Duis efficitur, nisl eget sodales fermentum, elit nisl elementum lorem, quis vulputate est arcu ut ipsum. Aenean sit amet mi lorem. Phasellus lacinia sapien ligula, ut faucibus magna fringilla in. Etiam non neque libero. Vestibulum hendrerit facilisis augue, vel egestas augue efficitur sit amet. Donec tristique erat mi, ut interdum mauris luctus sit amet. Integer posuere nunc ac est dapibus, at volutpat sem dapibus. Vestibulum malesuada metus ante, quis dictum turpis cursus eu. Maecenas nunc dolor, porttitor a ullamcorper in, volutpat non purus.
                </p>
            </div>
        </div>
    )
}
export default Home;
