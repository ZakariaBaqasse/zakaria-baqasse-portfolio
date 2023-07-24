import { Location } from "react-router-dom";

export type Props = {
  location: Location;
  passedRef: React.RefObject<HTMLDivElement>;
};

export type Carrer = {
  id: number;
  start_date: string;
  end_date: string;
  title: string;
  institute: string;
  description: string;
  technologies?: string;
};

export type CarrerCardProps = {
  carrer: Carrer;
};

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

export type NavigateButtonProps = {
  label: string;
  linkTo: string;
};

export type ModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export type StyledTitleProps = {
  word1: string;
  word2: string;
  textColor?: string;
};
