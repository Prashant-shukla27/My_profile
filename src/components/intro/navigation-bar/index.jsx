import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from "../../download/my_profile.pdf";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src="/letter-p.png"
                    alt="Prashant"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("projects")}
                >
                    Projects
                </span>
                <CallToAction
                    text="Contact me"
                    id="navContactMe"
                    action={() => {
                        menuItemClickHandler("contact");
                    }}
                />
                <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
            </div>
        </div>
    );
};

export default Navigation;
