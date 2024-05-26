import React from "react";

import Arrow from "../arrow";

import "./style.scss";

const CallToAction = ({ text, action, icon }) => {
    return (
        <div
            className="call-to-action"
            onClick={action}
        >
            <span className="text">{text}</span>
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export const AddSkills = ({ text , url}) => {
    return (
        <div className="call-to-skill"
        onClick={() => {
            window.open(url, "_blank");
        }}>
            <span className="text">{text}</span>
        </div>
    );
};

export default CallToAction;
