import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TechStackChip } from "./chip";
import { ModalProps } from "../utils/types";



const Modal = ({ project, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="  w-3/4 h-5/6 bg-white rounded-md z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll">
        <div className="flex justify-between mx-4 my-3 md:my-5">
          <button className="rounded-md bg-white hover:bg-primary hover:text-white transition-all ease-out duration-300 px-2 py-1">
            <a href={project.project_url} target="_blank">
              Try it
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="ml-2 text-xl text-gray-500 hover:text-white"
              />
            </a>
          </button>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl text-secondary cursor-pointer"
            onClick={onClose}
          />
        </div>
        <h1 className=" font-headings font-semibold text-3xl text-center">
          {project.project_title}
        </h1>
        <h2 className="font-headings text-xl font-medium text-primary text-center my-3">
          {project.project_scope}
        </h2>
        <div className="lg:grid lg:grid-cols-3 mx-6 lg:gap-5">
          <div className="lg:col-span-2 flex flex-col items-center">
            <p className=" p-3 font-paragraphs text-base text-secondary inset-3 bg-gray-100 text-justify rounded-md">
              {project.project_description}
            </p>
            <LazyLoadImage
              className="rounded-md my-3 h-2/3"
              src={project.project_thumbnail}
              />
          </div>
          <div className=" col-span-1 ">
            <h3 className="font-headings text-xl font-medium text-secondary text-center my-3">
                Tech Stack: ⚙
            </h3>
            <div className="flex lg:justify-start justify-evenly">
                {project.project_techstack.split(",").map((tech, index) => {
                    return <TechStackChip key={`${tech}_${index}`} tech={tech} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
