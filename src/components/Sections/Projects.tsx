import Grid from "../Core/Grid";
import ProjectCard from "../Core/ProjectCard";
import ProjectInfo from "../../utils/projectInfo"
import GrainOverlay from "../../assets/SVG/Grain";


const Projects = () => {
  
  return(
    <section id="projects" className="w-full py-40 text-second-color bg-primary rounded-b-2xl relative overflow-hidden">
      <GrainOverlay />
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
            <h1 className="font-League-Spartan text-5xl sm:text-9xl font-bold">PROJECTS</h1>
        </div>
        <Grid>
          {ProjectInfo.map((element) => (
            <ProjectCard projectImg={element.projectImg} linkTo={element.link} projectName={element.title}/>
          ))}
        </Grid>
      </div>
  </section>
  )
}

export default Projects;