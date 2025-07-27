import Grid from "../Core/Grid";
import ProjectCard from "../Core/ProjectCard";
import ProjectInfo from "../../utils/ProjectInfo"
import SectionHeading from "../Core/SectionHeading";
import { ScaleIn } from "../Animations/ScaleIn";

const Projects = () => {
  return(
    <section id="projects" className="w-full py-40 rounded-b-2xl relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
            <SectionHeading text="Projects" />
        </div>
        <ScaleIn>
          <Grid>
            {ProjectInfo.map((element, index) => (
              <ProjectCard key={index} projectImg={element.projectImg} linkTo={element.link} projectName={element.title}/>
            ))}
          </Grid>
        </ScaleIn>
      </div>
  </section>
  )
}

export default Projects;