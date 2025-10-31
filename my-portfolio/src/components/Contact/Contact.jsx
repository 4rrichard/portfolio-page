import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact">
            <h1 className="title--contact">CONTACT ME</h1>

            <form className="contact--send-email">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    aria-label="Full name"
                    className="send-email--full-name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    className="send-email--email-address"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    aria-label="Phone number"
                    className="send-email--phone-number"
                />

                <textarea
                    name="message"
                    placeholder="Write your message"
                    aria-label="Message"
                    className="send-email--message"
                    rows="6"
                    required
                ></textarea>

                <button type="submit" className="send-email--btn">
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;
