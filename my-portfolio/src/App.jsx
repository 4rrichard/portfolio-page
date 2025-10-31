import { Route, Routes } from "react-router-dom";

import "./reset.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CV from "./components/CV/CV";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <AboutMe />
            <Projects />
            <CV />
            <Contact />
            <Footer />
            <Routes>
                <Route path="/" />
            </Routes>
        </div>
    );
}

export default App;
