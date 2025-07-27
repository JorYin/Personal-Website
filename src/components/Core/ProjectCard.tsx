import { Link } from "react-router-dom";
import GrainOverlay from "../../assets/SVG/Grain";

interface CardProps {
  projectImg: string;
  linkTo: string;
  projectName: string;
}

const ProjectCard = ({ projectImg, linkTo, projectName }: CardProps) => {
  return (
    <div className="max-w-3xl relative group transition duration-500 hover:-translate-y-2 rounded-lg cursor-pointer">
      <Link to={linkTo} className="block text-center">
        <div className="relative">
          <img
            className="rounded-lg w-full h-auto mb-4"
            src={projectImg}
            alt={projectName}
          />
        </div>
        <div className="flex">
          <h1 className="font-Karantina text-4xl text-main-color">{projectName}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
