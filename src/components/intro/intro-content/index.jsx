import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/my_pic.JPG";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Prashant Shukla</span>
                    </h1>
                    <p className="title">
                    A frontend developer with 2 years of experience and a Master's degree in Computer Science & Engineering from IIT Roorkee.
                    Passionate about creating impactful user experiences through innovative problem-solving and design. 
                    Proficient in frontend technologies and adept at utilizing various programming languages, libraries, and frameworks.
                    </p>
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Prashant Shukla"
                    />

                </div>
            </div>
        </div>
    );
};

export default IntroContent;
