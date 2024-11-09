import { Link } from "react-router-dom";
import GrainOverlay from "../../assets/SVG/Grain";

interface CardProps {
  projectImg: string;
  linkTo: string;
  projectName: string;
}

const ProjectCard = ({ projectImg, linkTo, projectName }: CardProps) => {
  return (
    <div className="max-w-3xl p-4 relative group transition duration-500 hover:-translate-y-2 bg-main rounded-lg cursor-pointer">
      <Link to={linkTo} className="block text-center">
        <GrainOverlay />
        <div className="relative">
          <img
            className="rounded-lg w-full h-auto mb-4"
            src={projectImg}
            alt={projectName}
          />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-League-Spartan text-xl font-bold text-main-color">{projectName}</h1>
          <p className="font-League-Spartan text-md font-bold py-1 px-2 bg-primary text-second-color rounded-lg">Learn More!</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
