import React from "react";
import "./app.scss";

import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Intro from "./components/intro";
import Skills from "./components/skills";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Blogs />
            <Contact />
        </div>
    );
};

export default App;
