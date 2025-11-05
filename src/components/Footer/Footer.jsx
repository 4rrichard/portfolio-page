import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareGithub,
    faLinkedin,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="upper-footer">
                <div className="footer-left">
                    <h2 className="name--footer">RICH RESPERGER</h2>
                    <p className="text--footer">
                        Turning ideas into full-stack applications.
                    </p>
                </div>

                <div className="footer-right">
                    <h2 className="social-title--footer">SOCIALS</h2>
                    <div className="social-icons--footer">
                        <a
                            href="https://www.linkedin.com/in/richard-resperger/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2x"
                                className="social-icon--footer"
                                title="LinkedIn"
                            />
                        </a>
                        <a
                            href="https://github.com/4rrichard"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon
                                icon={faSquareGithub}
                                size="2x"
                                className="social-icon--footer"
                                title="GitHub"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FontAwesomeIcon
                                icon={faSquareFacebook}
                                size="2x"
                                className="social-icon--footer"
                                title="Facebook"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="lower-footer">
                <p className="creator--footer">
                    Created by <strong>RICH RESPERGER</strong>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
