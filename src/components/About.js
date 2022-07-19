import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import db from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer } from 'react-icons/fa';
import { HiDesktopComputer, HiMusicNote } from 'react-icons/hi';
import { BsFillPeopleFill, BsCupStraw } from 'react-icons/bs';
import { FaMusic, FaCouch } from 'react-icons/fa';
import { IoIosMusicalNotes } from 'react-icons/io';
import { GiChessPawn } from 'react-icons/gi';
import { AiOutlineTrophy } from 'react-icons/ai';



const About = () => {




    return (

        <div className="contain">
            <div className="offer">
                <h1 className="head">Who Are We?</h1>
            </div>
            <div className="info">
                <h4 className="desc">
                    We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!

                    You know what? It is beets. I've crashed into a beet truck. Yes, Yes, without the oops! Hey, take a look at the earthlings. Goodbye! So you two dig up, dig up dinosaurs? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</h4>
            </div>
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#a430f4" offset="0%" />
                    <stop stopColor="#0cabf5" offset="100%" />
                </linearGradient>
            </svg>
            <div className="offer">
                <h1 className="head">What Do We Offer?</h1>
            </div>
            <div className="card5">
                <HiDesktopComputer style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Gaming PC's</h1>

            </div>

            <div className="card5">
                <BsFillPeopleFill style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Socialization
                </h1>
            </div>
            <div className="card5">
                <IoIosMusicalNotes style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Music Booth
                </h1>
            </div>
            <div className="card5">

                <GiChessPawn style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Board Games
                </h1>
            </div>
            <div className="card5">
                <BsCupStraw style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Drink Bar
                </h1>
            </div>
            <div className="card5">
                <AiOutlineTrophy style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Tournaments
                </h1>
            </div>



        </div>



    )
}
export default About;

