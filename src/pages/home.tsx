import Hero from "../sections/hero-section";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MeetMe from "../sections/meet-me-section";
import Education from "../sections/education-section";

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
                <li><NavLink to="#MeetMe">Meet Me</NavLink></li>
                <li><NavLink to="#Education">My Education</NavLink></li>
                <li><NavLink to="#Projects">My Projects</NavLink></li>
                <li><NavLink to="#Experience">My Experience</NavLink></li>
                <li><NavLink to="#Certificates">My Certificates</NavLink></li>
                <li><NavLink to="#Contact">Contact Me</NavLink></li>
            </ul>
        </nav>
    )
}

const HomePage = ()=>{
  return(
    <>
      <NavBar/>
      <Hero/>
      <MeetMe/>
      <Education/>
    </>
  )
}

export default HomePage;