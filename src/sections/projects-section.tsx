import StyledTitle from "../shared-components/styled-title";
import supabase from "../utils/supabase-client";
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "../shared-components/project-card";
import LoadingSpinner from "../shared-components/loading-spinner";
import NavigateButton from "../shared-components/navigate-button";
import { useEffect } from "react";
import { Project, Props } from "../utils/types";

const fetchRecentProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);
  if (error) throw new Error(error.message);
  return data as Project[];
};

const Projects = ({location,passedRef}:Props) => {
  const { data,isError, isLoading } = useQuery<Project[]>(
    ["recentProjects"],
    fetchRecentProjects
  );
  useEffect(()=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if(location.state && location.state.scrollToProjects){
      passedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  },[location.state,passedRef]);
  return (
    <section id="Projects" className="text-secondary section-sizing" ref={passedRef}>
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
      <NavigateButton label="all projects" linkTo="/projects"/>
    </section>
  );
};

export default Projects;
