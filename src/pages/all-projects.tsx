import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "../shared-components/project-card";
import supabase from "../utils/supabase-client";
import LoadingSpinner from "../shared-components/loading-spinner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ParticlesBackground from "../sections/particlests/particles-background";
import { Project } from "../utils/types";

const fetchAllProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) throw new Error(error.message);
  return data as Project[];
};

const AllProjects = () => {
  const { data, isError, isLoading } = useQuery<Project[]>(
    ["allProjects"],
    fetchAllProjects
  );
  return (
    <section id="all-projects" className="text-secondary min-h-screen">
      <ParticlesBackground />
      <Link to="/" state={{scrollToProjects: true,scrollToExperience:true}}>
        <button className="text-secondary font-headings capitalize border-2 border-secondary rounded-full hover:bg-secondary hover:text-white text-xl px-3 py-2 transition-all ease-out duration-300 my-4 ml-3">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Home Page
        </button>
      </Link>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <p className="text-xl m-auto text-red-700 text-center">
          Something Went Wrong!
        </p>
      )}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 md:mx-7 relative z-10">
        {data?.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default AllProjects;
