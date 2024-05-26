import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.png";
import Blog2 from "../../images/blogs/blog-thumb-2.png";
// import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="projects"
            title="Projects"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    image={Blog1}
                    title="WalkTheWalk"
                    description="An Online E-commerce Shoe Store Dynamic Website"
                    link="https://walkthewalk.vercel.app/"
                />
                <BlogCard
                    image={Blog2}
                    title="MobyG"
                    description="An Online Movies and TV Shows Trailer Streaming Dynamic Website"
                    link="https://mobyg.vercel.app/"
                />
                {/* <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog3}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                /> */}
            </div>
        </Section>
    );
};

export default Blogs;
