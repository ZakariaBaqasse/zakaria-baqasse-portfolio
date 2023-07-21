import ParticlesBackground from "./particlests/particles-background";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import { GITHUB_LINK, LINKEDIN_LINK, MAIL_ADDRESS, TWITTER_LINK } from "../utils/const";


const Intro = ()=>{
    return(<div className="intro-heading">
        <h1 className="inline-block mr-2">Hello,</h1>
        <h1 className="inline-block mr-2">I'm</h1>
        <h1 className="inline-block mr-2">Zakaria</h1>
        <h1 className="inline-block mr-2">|</h1><br/>
        <h1 className="inline-block">Software Engineer</h1>
    </div>);
}

const Links = ()=>{
    library.add(fab);
    return(
        <div className="my-5 md:my-3 ml-12 md:ml-28">
           <a href={GITHUB_LINK} target="_blank" className="social-icons"><FontAwesomeIcon icon={["fab","github"]} /></a>     
           <a href={LINKEDIN_LINK} target="_blank" className="social-icons"><FontAwesomeIcon icon={["fab","linkedin"]} /></a>      
           <a href={TWITTER_LINK} target="_blank" className="social-icons"><FontAwesomeIcon icon={["fab","twitter"]} /></a>     
           <a href={`mailto:${MAIL_ADDRESS}`} className="social-icons"><FontAwesomeIcon icon={faEnvelope} /></a>       
        </div>
    )
}

const Hero = ()=> {
  return (
    <section id="hero-section" className="bg-secondary w-full min-h-screen">
        <ParticlesBackground/>
        <Intro/>
        <Links/>
        <p className="text-gray-300 text-justify intro-paragraph font-paragraphs font-light text-base pt-10 px-10 md:pl-20 pb-20 md:pb-28">I love challenging myself 💪, I embrace a growth mindset and actively seek new knowledge 👨‍🎓. And yeah I like anime 😻</p>
    </section>
  )
}

export default Hero;