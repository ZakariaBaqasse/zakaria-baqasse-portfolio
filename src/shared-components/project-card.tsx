import { LazyLoadImage } from "react-lazy-load-image-component";
import { TechStackChip } from "./chip";
import { useReducer } from "react";
import Modal from "./modal";

export interface Project {
  id: number;
  project_title: string;
  project_description: string;
  project_thumbnail: string;
  project_url: string;
  project_scope: string;
  project_techstack: string;
  createdAt: string;
}

export type ProjectCardProps = {
  project: Project;
};

enum ActionType {
  OPEN = "OPEN",
  CLOSE = "CLOSE"
}

const reducer = (state:{isOpen:boolean},action:{type:ActionType}) => {
  switch(action.type){
    case ActionType.OPEN:
      return {isOpen:true};
    case ActionType.CLOSE:
      return {isOpen:false};
    default:
      return state;
  }
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [state,dispatch] = useReducer(reducer,{isOpen:false});
  const renderTechStack = () => {
    const techArray = project.project_techstack.split(",");
    if (techArray.length > 3) {
      return techArray.slice(0, 3).map((tech, index) => {
        return <TechStackChip key={`${tech}_${index}`} tech={tech} />;
      });
    }
    return techArray.map((tech, index) => {
      return <TechStackChip key={`${tech}_${index}`} tech={tech} />;
    });
  };
  return (
    <>
    <div className="product-card">
      <div className="card-thumbnail">
        <LazyLoadImage
          className="img-responsive"
          src={project.project_thumbnail}
        />
      </div>
      <div className="card-content">
        <h1 className="card-title">{project.project_title}</h1>
        <h2 className="card-sub-title pb-5">{project.project_scope}</h2>
        <div className="flex justify-start">{renderTechStack()}</div>
      </div>
      <div className="m-auto w-fit absolute bottom-9 left-1/2 -translate-x-1/2">
        <button className="bg-primary text-white font-headings text-lg px-3 py-2 m-auto rounded-full" onClick={()=>dispatch({type:ActionType.OPEN})}>
          More Details
        </button>
      </div>
    </div>
    <Modal project={project} isOpen={state.isOpen} onClose={() => dispatch({type:ActionType.CLOSE})} />
    </>
  );
};
