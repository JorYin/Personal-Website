import { FaGithub, FaLink } from "react-icons/fa6"
import GrainOverlay from "../../assets/SVG/Grain"

interface CardProps {
  projectImg: string,
  title:string,
  about: string,
  github?: string,
  website?: string,
  technologies?: string[],
}

const Card = ({ projectImg, title, about, github, website, technologies} : CardProps) => {
  return(
    <div className="w-full rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 group bg-main relative">
      <GrainOverlay />
      <div className="relative">
        <img className="rounded-t-lg" src={projectImg}/>
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {github && (
              <a href={github} target="_blank">
                <FaGithub className="text-second-color w-12 h-12" />
              </a>
            )}
            {website && (
              <a href={website} target="_blank">
                <FaLink className="text-second-color w-12 h-12" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5 text-main-color">
        <h5 className="mb-2 text-2xl font-bold font-League-Spartan">
          {title}
        </h5>
        <p className="mb-3 font-Libre-Baskerville font-normal">
          {about}
        </p>
      </div>
      <div className="p-5">
        {technologies?.map((elements) => (
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-medium font-League-Spartan mr-2 mb-2">#{elements}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;