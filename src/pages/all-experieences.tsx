import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ParticlesBackground from "../sections/particlests/particles-background";
import CarrerCard from "../shared-components/carrer-card";
import LoadingSpinner from "../shared-components/loading-spinner";
import supabase from "../utils/supabase-client";
import { Carrer } from "../utils/types";

const fetchAllExperiences = async () => {
  const { data, error } = await supabase.from("experiences").select("*");
  if (error) throw new Error(error.message);
  return data as Carrer[];
};

const AllExperiences = () => {
  const { data, isError, isLoading } = useQuery<Carrer[]>(
    ["allExperiences"],
    fetchAllExperiences
  );
  return (
    <section id="all-projects" className="text-secondary min-h-screen">
      <ParticlesBackground />
      <Link to="/" state={{scrollToExperience: true,scrollToProjects:true}}>
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
      <div className="mx-auto  w-11/12 mb-4">
        {data?.map((carrer) => {
          return <CarrerCard key={carrer.id} carrer={carrer} />;
        })}
      </div>
    </section>
  );
};

export default AllExperiences;