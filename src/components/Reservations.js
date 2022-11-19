import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import db from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import "./Reservations.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer } from 'react-icons/fa';
import { HiDesktopComputer, HiMusicNote } from 'react-icons/hi';
import { BsFillPeopleFill, BsCupStraw } from 'react-icons/bs';
import { FaMusic, FaCouch } from 'react-icons/fa';
import { IoIosMusicalNotes } from 'react-icons/io';
import { GiChessPawn } from 'react-icons/gi';
import { AiOutlineTrophy } from 'react-icons/ai';



const Reservations = () => {




    return (

        <div className="contain">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeK6xhpdHuTMVN_oN5NyJAElV_UM_hJgNgK55azKV3KMpli7w/viewform?embedded=true"
                width="75%" height="1261" frameBorder="0" marginHeight="0" marginWidth="0" className = "forms">
            </iframe>
        </div>



    )
}
export default Reservations;

