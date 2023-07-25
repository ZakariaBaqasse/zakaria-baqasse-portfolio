import { useQuery } from "@tanstack/react-query";
import CarrerCard from "../shared-components/carrer-card";
import StyledTitle from "../shared-components/styled-title";
import supabase from "../utils/supabase-client";
import LoadingSpinner from "../shared-components/loading-spinner";
import NavigateButton from "../shared-components/navigate-button";
import { useEffect } from "react";
import { Carrer, Props } from "../utils/types";

const fetchRecentExperiences = async () => {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);
  if (error) throw new Error(error.message);
  return data as Carrer[];
};

const Experiences = ({location,passedRef}:Props) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (location.state && location.state.scrollToExperience) {
      passedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, [location.state,passedRef]);
  const { data, isError, isLoading } = useQuery(
    ["recent_experiences"],
    fetchRecentExperiences
  );
  return (
    <section id="Experience" className="section-sizing" ref={passedRef}>
      <StyledTitle word1="My" word2="Experience" />
      {isLoading && <LoadingSpinner />}
      {isError && (
        <p className="text-center text-red-500 text-2xl">
          Something went wrong
        </p>
      )}
      <div className="mx-auto  w-11/12 mb-4">
        {data?.map((carrer) => {
          return <CarrerCard key={carrer.id} carrer={carrer} />;
        })}
      </div>
      <NavigateButton label="all experiences" linkTo="/experiences" />
    </section>
  );
};

export default Experiences;
