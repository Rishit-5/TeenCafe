import React, {Component, useState} from 'react';
import Carousel from "../BootstrapCarousel"
import "./Home.css"
const Home = () => {
    return (
        <div >
            <div className="caro">
                <Carousel/>
            </div>
            <div className = "back">
                <h1 className="header">Play. Slay. All Day.</h1>
                <h4>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. You know what? It is beets. I've crashed into a beet truck. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? They're using our own satellites against us. And the clock is ticking.

                    What do they got in there? King Kong? Do you have any idea how long it takes those cups to decompose. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You know what? It is beets. I've crashed into a beet truck.</h4>
                <button className="button-18" >Sign Up!</button>
            </div>
        </div>
    )
}
export default Home;
