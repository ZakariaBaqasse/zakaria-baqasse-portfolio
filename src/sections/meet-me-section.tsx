import { LazyLoadImage } from "react-lazy-load-image-component";
import StyledTitle from "../shared-components/styled-title";
import { MY_SKILLS } from "../utils/const";

const MeetMe = () => {
  const isSmallScreen = window.innerWidth < 768;
  return (
    <div id="MeetMe" className="w-full h-screen">
      <StyledTitle word1="Meet" word2="Me" />
      <div className="md:grid md:grid-cols-3 md:gap-14 relative z-10 mx-3 lg:mx-32">
        <div className="flex items-center col-span-1 rounded-md overflow-hidden shadow-lg w-fit m-auto mb-7 md:m-0 h-fit">
          <LazyLoadImage
            src="/images/profile.JPG"
            alt="Zakaria BAQASSE photo"
            width={isSmallScreen ? 175 : 350}
            height={isSmallScreen ? 250 : 500}
          />
        </div>
        <div className="col-span-2 text-justify text-lg w-full lg:w-3/4">
          <ul className="flex flex-wrap md:justify-start justify-center">
            {MY_SKILLS.map((skill, index) => {
              return (
                <li
                  key={index}
                  className="bg-secondary text-gray-100 capitalize p-2 mr-2 mb-2"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className=" md:mt-16 mt-8 mx-8 mb-8 md:mx-0">
            <h4 className="text-xl font-semibold font-headings">
              I find joy in crafting and building projects that excite me 👨‍💻
            </h4>
            <p className=" mt-8 ">
              As a software engineer, I immerse myself in the world of software
              development, constantly honing my skills and embarking on new
              projects. My passion for learning allows me to adapt quickly and
              tackle fresh challenges with enthusiasm. Embracing teamwork, I
              eagerly support my colleagues and embrace collaborative
              problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetMe;
