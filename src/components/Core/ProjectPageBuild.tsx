import { useNavigate } from "react-router-dom";
import GrainOverlay from "../../assets/SVG/Grain";
import { FaArrowLeft } from "react-icons/fa6";

interface ProjectPageBuild {
  projectImage: string;
  projectName: string;
  projectAbout: string;
  projectDemo: string;
  projectTech: string[];
}

const ProjectPageBuild = ({ projectImage, projectName, projectAbout, projectDemo, projectTech }: ProjectPageBuild) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-main text-main-color overflow-hidden">

      <div className="absolute inset-0">
        <GrainOverlay />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
        <button
          onClick={() => navigate(-1)}
          className="flex justify-center items-center mx-5 my-5 transition duration-500 hover:-translate-y-2"
        >
          <FaArrowLeft />
          <p className="mx-2 font-Libre-Baskerville">Go Back!</p>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 justify-center items-center">
          <div className="order-1 md:order-none">
            <h1 className="font-League-Spartan text-5xl font-bold">{projectName}</h1>
            <p className="mt-4 font-Libre-Baskerville">{projectAbout}</p>
          </div>

          <div className="text-center order-2 md:order-none">
            <h3 className="font-League-Spartan text-3xl font-bold">Technologies</h3>
            <p className="font-Libre-Baskerville">{projectTech.join(", ")}</p>
            <button className="mt-5 py-3 px-4 bg-primary text-second-color rounded-lg font-Libre-Baskerville transition duration-500 hover:scale-105">
              <a href={projectDemo} target="_blank">View Demo!</a>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center my-5 mx-5">
          <img
            src={projectImage}
            className="w-full max-w-3xl rounded-3xl shadow-lg"
            alt={projectName}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPageBuild;
