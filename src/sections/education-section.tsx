import CarrerCard from "../shared-components/carrer-card";
import StyledTitle from "../shared-components/styled-title";

const educations = [
    {
        id: 1,
        startDate: 'September 2021',
        endDate: 'June 2024',
        title: 'Software Engineering degree',
        institute: 'Faculty of Sciences and Techniques of Marrakesh',
        description: 'I pursue a software engineering degree at the Faculty of Sciences and Techniques of Marrakesh. I am learning the basics of computer science and software engineering.',
    },
    {
        id: 2,
        startDate: 'September 2019',
        endDate: 'June 2021',
        title: 'DEUST (Diploma in University Studies in Science and Technology)',
        institute: 'Faculty of Sciences and Techniques of Marrakesh',
        description: 'I obtained a DEUST degree in mathematics,IT, physics and chemistry at the Faculty of Sciences and Techniques of Marrakesh. ',
    },
    {
        id: 3,
        startDate: 'September 2018',
        endDate: 'June 2019',
        title: 'Baccalaureate in Physical Sciences',
        institute: 'Salah Eddine Al Ayoubi High School',
        description: 'I obtained a baccalaureate degree in physical sciences at Salah Eddine Al Ayoubi High School.',
    }
]

const Education = () => {
    return(
        <section id="Education" className="bg-gray-200 text-secondary min-h-screen">
           <StyledTitle word1="My" word2="Education"/>
           <div className="w-4/5 mx-auto mb-12">
           {educations.map((education)=>{
            return(
                <CarrerCard key={education.id} carrer={education}/>
            )
           })}
           </div>
        </section>
    )
}

export default Education;