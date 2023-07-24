import { memo } from "react";
import { TechStackChip } from "./chip";
import { CarrerCardProps } from "../utils/types";



const CarrerCard = memo(({ carrer }: CarrerCardProps) => {
  const renderTechnologies = () => {
    if (carrer.technologies) {
      return (
        <div className="flex justify-start flex-wrap">
          {carrer.technologies.split(',').map((tech, index) => {
            return <TechStackChip key={`${tech}_${index}`} tech={tech} />;
          })}
        </div>
      );
    }
  };
  return (
    <div className="carrer-card glass-bg">
      <div className="col-span-1 font-headings">
        <p className="text-lg text-gray-600 mb-4 md:mb-0">
          {carrer.start_date} - {carrer.end_date}
        </p>
      </div>
      <div className="col-span-2">
        <h3 className="text-xl font-semibold font-headings mb-2">
          {carrer.title}
        </h3>
        <h4 className="text-lg font-semibold font-headings text-gray-600 mb-2">
          {carrer.institute}
        </h4>
        <p className="text-justify text-base font-paragraphs font-light text-gray-600">
          {carrer.description}
        </p>
        {renderTechnologies()}
      </div>
    </div>
  );
});

export default CarrerCard;
