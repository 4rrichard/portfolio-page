import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function Projects() {
    const projects = [
        {
            title: "Psychology Website",
            img: "/images/psychology-website.jpg",
            url: "https://psychology-website.netlify.app/",
            github: "https://github.com/4rrichard/psychology-website",
            desc: "A modern platform for psychologists to showcase services, manage appointments, and communicate with clients.",
        },
        {
            title: "Solar Watch App",
            img: "/images/solar-watch-website.png",
            url: "",
            github: "https://github.com/4rrichard/solar-watch-app",
            desc: "A full-stack app that lets users register, log in, and view sunrise and sunset times for any city using the OpenWeather API.",
        },
    ];

    return (
        <section className="projects" id="projects">
            <h1 className="title--projects">PROJECTS</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <div className="project-img-container">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="project-img"
                                loading="lazy"
                            />
                            <div className="project-text-container">
                                <p className="project-text">{project.desc}</p>
                                <button
                                    className="go-to-project-site"
                                    onClick={() =>
                                        window.open(project.url, "_blank")
                                    }
                                >
                                    Visit website
                                    <FontAwesomeIcon
                                        icon={faRightLong}
                                        className="right-arrow"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="project-description">
                            <h2 className="project-title">{project.title}</h2>
                            <FontAwesomeIcon
                                icon={faSquareGithub}
                                size="2x"
                                className="social-icon--projects"
                                onClick={() =>
                                    window.open(project.github, "_blank")
                                }
                                title={`${project.title} GitHub`}
                                aria-label={`${project.title} GitHub`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
