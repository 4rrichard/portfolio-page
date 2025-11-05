import React from "react";
import PDF from "../../pdf/richard_resperger__cv.pdf";
import "./CV.css";

function CV() {
    return (
        <section className="cv" id="cv">
            <h1 className="title--cv">CV</h1>

            <a
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-img-container"
                aria-label="Open Richard Resperger CV PDF"
            >
                <img
                    src="/images/cv_rr.jpg"
                    alt="Richard Resperger CV preview"
                    className="cv-img"
                    loading="lazy"
                />
                <div className="open-pdf">Check CV</div>
            </a>
        </section>
    );
}

export default CV;
