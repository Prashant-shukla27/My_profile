import React from "react";
import {AddSkills} from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";


import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <div className = "skills">
                    <AddSkills
                    text="Javascript"
                    url = "https://devdocs.io/javascript/"
                />
                <AddSkills
                    text="ReactJs"
                    url = "https://react.dev/learn"
                />
                <AddSkills
                    text="NextJs"
                    url = "https://nextjs.org/docs"
                />
                <AddSkills
                    text="Redux"
                    url = "https://redux-toolkit.js.org/introduction/getting-started"
                />
                <AddSkills
                    text="HTML"
                    url = "https://html.com"
                />
                <AddSkills
                    text="CSS"
                    url = "https://devdocs.io/css"
                />
                <AddSkills
                    text="SCSS"
                    url = "https://sass-lang.com/documentation"
                />
                <AddSkills
                    text="Tailwind CSS"
                    url = "https://tailwindcss.com/docs/installation"
                />
                 <AddSkills
                    text="Strapi"
                    url = "https://docs.strapi.io/dev-docs/intro"
                />
                  <AddSkills
                    text="Data Structures"
                    url = "https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms"
                />
                <AddSkills
                    text="Algorithms"
                    url = "https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms"
                />
                 <AddSkills
                    text="C"
                    url = "https://devdocs.io/c"
                />
                 <AddSkills
                    text="C++"
                    url = "https://devdocs.io/cpp"
                />
                 <AddSkills
                    text="Git"
                    url = "https://git-scm.com/docs/git"
                />
                 <AddSkills
                    text="GitHub"
                    url = "https://docs.github.com/en"
                />
                 <AddSkills
                    text="Firebase"
                    url = "https://firebase.google.com/docs"
                />
                <AddSkills
                    text="AWS"
                    url = "https://docs.aws.amazon.com/"
                />
                <AddSkills
                    text="Confluence"
                    url = "https://www.atlassian.com/software/confluence?&aceid=&adposition=&adgroup=139903763174&campaign=18330624228&creative=656495977436&device=c&keyword=confluence%20documentation&matchtype=e&network=g&placement=&ds_kids=p73006849693&ds_e=GOOGLE&ds_eid=700000001542923&ds_e1=GOOGLE&gad_source=1&gclid=Cj0KCQjwmMayBhDuARIsAM9HM8eg4TTow8FN8vlIgDZ9rYjmtzhGteaLbKMRmu4dENVP7IHPn5EWquUaAqWLEALw_wcB&gclsrc=aw.ds"
                />
                <AddSkills
                    text="JIRA"
                    url = "https://confluence.atlassian.com/jira"
                />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
