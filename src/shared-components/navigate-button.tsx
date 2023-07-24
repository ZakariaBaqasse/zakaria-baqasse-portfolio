import { Link } from "react-router-dom";
import { NavigateButtonProps } from "../utils/types";



const NavigateButton = ({ label, linkTo }: NavigateButtonProps) => {
  return (
    <div className="m-auto w-fit my-6">
      <Link to={linkTo}>
        <button className="text-secondary font-headings capitalize border-2 border-secondary rounded-full hover:bg-secondary hover:text-white text-xl px-3 py-2 transition-all ease-out duration-300">
          {label}
        </button>
      </Link>
    </div>
  );
};

export default NavigateButton;
