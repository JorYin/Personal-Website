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
    <div className="w-full rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
      <div>
        <img className="rounded-t-lg" src={projectImg}/>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {about}
        </p>
      </div>
      <div className="p-5">
        {technologies?.map((elements) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{elements}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;