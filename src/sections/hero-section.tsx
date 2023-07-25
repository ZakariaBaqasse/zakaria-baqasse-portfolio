import ParticlesBackground from "./particlests/particles-background";
import Links from "../shared-components/social-links";
import { SocialLinkLocation } from "../utils/types";


const Intro = ()=>{
    return(<div className="intro-heading">
        <h1 className="inline-block mr-2">Hello,</h1>
        <h1 className="inline-block mr-2">I'm</h1>
        <h1 className="inline-block mr-2">Zakaria</h1>
        <h1 className="inline-block mr-2">|</h1><br/>
        <h1 className="inline-block">Software Engineer</h1>
    </div>);
}



const Hero = ()=> {
  return (
    <section id="hero-section" className="bg-secondary w-full section-sizing">
        <ParticlesBackground/>
        <Intro/>
        <Links location={SocialLinkLocation.INTRO}/>
        <p className="text-gray-300 text-justify intro-paragraph font-paragraphs font-light text-base pt-10 px-10 md:pl-20 pb-20 md:pb-28">I love challenging myself 💪, I embrace a growth mindset and actively seek new knowledge 👨‍🎓. And yeah I like anime 😻</p>
    </section>
  )
}

export default Hero;