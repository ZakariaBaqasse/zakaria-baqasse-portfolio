import CarrerCard from "../shared-components/carrer-card";
import StyledTitle from "../shared-components/styled-title";
import { EDUCATIONS } from "../utils/const";



const Education = () => {
    return(
        <section id="Education" className="text-secondary section-sizing">
           <StyledTitle word1="My" word2="Education"/>
           <div className="w-4/5 mx-auto mb-12">
           {EDUCATIONS.map((education)=>{
            return(
                <CarrerCard key={education.id} carrer={education}/>
            )
           })}
           </div>
        </section>
    )
}

export default Education;