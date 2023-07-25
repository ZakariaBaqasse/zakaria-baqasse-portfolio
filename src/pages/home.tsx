import Hero from "../sections/hero-section";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import MeetMe from "../sections/meet-me-section";
import Education from "../sections/education-section";
import Projects from "../sections/projects-section";
import Experiences from "../sections/experiences-section";
import Contact from "../sections/contact-section";
import Footer from "../sections/footer";

const NavBar = ()=>{
    const [isOpened, setIsOpened] = useState(false);
    const toggleMenu = ()=>{
        setIsOpened(!isOpened);
    };
    return(
        <nav className="bg-secondary text-white">
            <NavLink to="/">
                <div className="flex justify-between items-center px-3 md:px-0 md:justify-center">
                    <h1 className="my-4 items-center font-headings text-xl md:text-3xl hover:text-gray-400 font-semibold transition ease-out duration-300">Zakaria BAQASSE</h1>
                    <div className="md:hidden" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="text-2xl"/>
                    </div>
                </div>
            </NavLink>
            <ul className={`flex md:justify-evenly font-headings font-semibold lowercase flex-col items-center md:flex-row menu ${!isOpened?'hidden_nav':''}`}>
                <li><a href="#MeetMe">Meet Me</a></li>
                <li><a href="#Education">My Education</a></li>
                <li><a href="#Projects">My Projects</a></li>
                <li><a href="#Experience">My Experience</a></li>
                <li><a href="#Contact">Contact Me</a></li>
            </ul>
        </nav>
    )
}

const HomePage = ()=>{
    const location = useLocation();
    const projectRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
  return(
    <>
      <NavBar/>
      <Hero/>
      <MeetMe/>
      <Education/>
      <Projects location={location} passedRef={projectRef}/>
      <Experiences location={location} passedRef={experienceRef}/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage;