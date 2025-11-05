import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faDocker,
    faJava,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
    const skills = [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
        { name: "React", icon: faReact },
        { name: "NodeJS", icon: faNodeJs },
        { name: "Docker", icon: faDocker },
        { name: "Java", icon: faJava },
        { name: "Spring Boot", img: "/images/spring_boot_logo.svg" },
        { name: "MongoDB", img: "/images/mongodb_logo.svg" },
        { name: "PostgreSQL", img: "/images/postgresql_logo.svg" },
    ];

    return (
        <section className="about-me">
            <h1 className="title--about-me">ABOUT ME</h1>

            <div className="details--about-me">
                <p className="text--about-me">
                    I’m a full-stack developer passionate about both the
                    creative and technical sides of programming. <br />
                    <br />
                    After working as a graphic designer in 2020, I discovered
                    that software development offers the challenges I truly
                    enjoy.
                    <br />
                    <br /> I’m now looking for a team where I can grow,
                    contribute, and keep improving as a developer.
                </p>

                <div className="skills--about-me">
                    <h2 className="title--skills">Skills</h2>
                    <ul className="list--skills">
                        {skills.map(({ name, icon, img }, i) => (
                            <li key={i} className="list-element">
                                {icon ? (
                                    <FontAwesomeIcon
                                        icon={icon}
                                        size="3x"
                                        className="skill-icon"
                                    />
                                ) : (
                                    <img
                                        src={img}
                                        alt={name}
                                        className="skill-image"
                                        loading="lazy"
                                    />
                                )}
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
