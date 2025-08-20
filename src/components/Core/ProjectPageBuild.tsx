import { useNavigate } from "react-router-dom";
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
    <div className="min-h-screen bg-main text-main-color">
      <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
        <div className="mx-5">
          <button
            onClick={() => navigate(-1)}
            className="flex justify-center items-center my-5 transition duration-500 hover:bg-accent"
          >
            <FaArrowLeft />
            <p className="mx-2 font-Kay-Pho-Du text-lg">Go Back!</p>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            <div className="order-1 md:order-none">
              <h1 className="font-Karantina text-5xl">{projectName}</h1>
              <p className="mt-4 font-Kay-Pho-Du text-lg">{projectAbout}</p>
            </div>

            <div className="text-center order-2 md:order-none">
              <h3 className="font-Karantina text-3xl font-bold">Technologies</h3>
              <p className="font-Kay-Pho-Du text-lg">{projectTech.join(", ")}</p>
              <button className="mt-5 py-3 px-4 bg-primary text-second-color rounded-lg font-Kay-Pho-Du transition duration-500 hover:scale-105">
                <a href={projectDemo} target="_blank">View Demo!</a>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center my-5">
            <img
              src={projectImage}
              className="w-full max-w-3xl rounded-3xl shadow-[5px_5px_0px_0px_#2b2d42]"
              alt={projectName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageBuild;
