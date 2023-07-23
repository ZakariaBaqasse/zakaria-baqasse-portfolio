import StyledTitle from "../shared-components/styled-title";
import supabase from "../utils/supabase-client";
import { useQuery } from "@tanstack/react-query";
import { Project, ProjectCard } from "../shared-components/project-card";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../shared-components/loading-spinner";

const fetchRecentProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);
  if (error) throw new Error(error.message);
  return data as Project[];
};

type CustomError = {
  message: string | undefined;
};



const Projects = () => {
  const { data,isError, isLoading } = useQuery<Project[], CustomError>(
    ["recentProjects"],
    fetchRecentProjects
  );
  return (
    <section id="Projects" className="text-secondary min-h-screen">
      <StyledTitle word1="My" word2="Projects" />
      {isLoading && <LoadingSpinner />}
      {isError && (
        <p className="text-xl m-auto text-red-700 text-center">Something Went Wrong!</p>
      )}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 md:mx-7 relative z-10">
        {data?.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className="m-auto w-fit my-6">
      <NavLink to="/projects">
        <button className="text-secondary font-headings capitalize border-2 border-secondary rounded-full hover:bg-secondary hover:text-white text-xl px-3 py-2 transition-all ease-out duration-300">
            all projects
        </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;
