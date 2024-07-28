import Grid from "../Core/Grid";
import Card from "../Core/Card";
import ProjectInfo from "../../utils/projectInfo"
import SectionAnimations from "../Animations/SectionAnimations";
import GrainOverlay from "../../assets/SVG/Grain";


const Projects = () => {
  
  return(
    <section id="projects" className="w-full py-40 text-second-color bg-primary rounded-b-2xl relative overflow-hidden">
      <GrainOverlay />
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
          <SectionAnimations>
            <h1 className="font-League-Spartan text-5xl sm:text-9xl font-bold">PROJECTS</h1>
          </SectionAnimations>
        </div>
        <Grid>
          {ProjectInfo.map((Projects) => (
          <div className="relative z-20">
              <Card
                projectImg={Projects.projectImg}
                title={Projects.title}
                about={Projects.about}
                technologies={Projects.technologies}
                github={Projects.github}
                website={Projects.website}
              />
            </div>
          ))}
        </Grid>
      </div>
  </section>
  )
}

export default Projects;