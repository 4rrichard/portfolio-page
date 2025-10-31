import React from "react";
import { Link as Scroll } from "react-scroll";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <h1 className="title--hero">HELLO, I’M RICH RESPERGER</h1>
            <h2 className="subtitle--hero">
                Turning ideas into full-stack applications.
            </h2>

            <div className="scroll-btns">
                <Scroll
                    to="projects"
                    smooth={true}
                    className="scroll-btn to-projects-btn"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && e.target.click()}
                >
                    PROJECTS
                </Scroll>

                <Scroll
                    to="cv"
                    smooth={true}
                    className="scroll-btn to-cv-btn"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && e.target.click()}
                >
                    CV
                </Scroll>
            </div>
        </section>
    );
}

export default Hero;
