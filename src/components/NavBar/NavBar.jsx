import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen((prev) => !prev);
    const closeNav = () => setNavOpen(false);

    const menuItems = [
        { name: "ABOUT ME", to: "about-me" },
        { name: "PROJECTS", to: "projects" },
        { name: "CV", to: "cv" },
        { name: "CONTACT", to: "contact" },
    ];

    return (
        <header>
            <nav className="navbar">
                <Link to="/" onClick={closeNav} className="nav--name">
                    <h1>PORTFOLIO</h1>
                </Link>

                <div className={`nav--primary ${navOpen ? "nav--open" : ""}`}>
                    <div className="nav--anchors">
                        {menuItems.map((item, index) => (
                            <Scroll
                                key={index}
                                to={item.to}
                                smooth={true}
                                spy={true}
                                hashSpy={true}
                                onClick={closeNav}
                                className="nav--anchor"
                                tabIndex={0}
                                role="button"
                                aria-label={`Go to ${item.name}`}
                            >
                                {item.name}
                            </Scroll>
                        ))}
                    </div>
                </div>

                <FontAwesomeIcon
                    onClick={toggleNav}
                    icon={navOpen ? faXmark : faBars}
                    size="3x"
                    className="hiddenMenuIcon"
                    aria-label={navOpen ? "Close menu" : "Open menu"}
                />
            </nav>
        </header>
    );
}

export default NavBar;
