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
                {/*<h1 className = "aboutUsHeader">About Us</h1>*/}
                {/*<p></p>*/}
                {/*<p>The Teen Cafe, a nonprofit organization affiliated with the Calgary Tsung Tsin Benevolent Association, is a for-youth-by-youth organization that is dedicated to interconnecting communities throughout Calgary. Located in the heart of Downtown, our space is made to be accessible for all teens and is surrounded by public transport for easy commuting. Our mission strives to create a safe space for teenagers to enjoy, connect, and participate in activities with one another. Here, we hope to deliver the highest-quality experience to our users by providing full access to the variety of spaces within our cafe. This includes a designated space for computers, TVs and gaming consoles, which are open for use by all youth. In addition to that, our space will include quiet study spaces where individuals can interact together and meet new people. Board games will as well be available to use and other games including a foosball table, a dance floor, and music will be a part of this incredible experience. Along with the many activities we have, our staff members will host biweekly events, such as tournaments of the most popular games, that all youth can partake in. We hope that teenagers will visit */}
                {/*    our space and leave with positive experiences and new friendships. </p>*/}

                <h1 className="header">Play. Slay. All Day.</h1>
                <h4>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. You know what? It is beets. I've crashed into a beet truck. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? They're using our own satellites against us. And the clock is ticking.

                    What do they got in there? King Kong? Do you have any idea how long it takes those cups to decompose. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You know what? It is beets. I've crashed into a beet truck.</h4>
                <button className="button-18" >Sign Up!</button>
            </div>
        </div>
    )
}
export default Home;
