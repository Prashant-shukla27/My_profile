import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import {FaLinkedinIn} from "react-icons/fa";
import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
            Let's talk ! If you have a project for me or just want to discuss design, feel free to call me or drop a mail. Contact Here !
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 7800736965</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">prashant780073@gmail.com</span>
            </div>
            {/* <div className="contact-option" 
             onClick={() => {
                window.open("https://www.linkedin.com/in/prashant-shukla-1117031b1/", "_blank");
            }}>
                        <FaLinkedinIn />
                        <span className="text">prashant-shukla-1117031b1</span> 
                        
            </div> */}
        </div>
    );
};

export default ContactInfo;
